
import factura from '../models/factura.js';
import customers from '../models/customers.js';
import item from '../models/items.js';
import axios from 'axios';

const httpFactura = {

    postFactura: async (req, res) => {
        const authheader = req.headers.authorization;
        let token = "";
        let envioData = ""

        try {
            if (authheader) {
                token = authheader.split(' ')[1];
            } else {
                return res.status(401).json({ error: "no hay token" });
            }

            const { numberingRangeId, referenceCode, observation, paymentForm,
                paymentDueDate, paymentMethodCode, billingPeriod, customer, items, cufe,
                invoiceUrl, qr, publicUrl, qrImage, number, company } = req.body;

            const existingCustomer = await customers.findById(customer);
            if (!existingCustomer) {
                return res.status(404).json({ error: "El cliente no existe" });
            }


            const dataFactura = {
                numberingRangeId, referenceCode, observation, paymentForm,
                paymentDueDate, paymentMethodCode, billingPeriod,
                customers: existingCustomer,
                items: item,
                cufe,
                invoiceUrl, qr, publicUrl, qrImage, number, company
            }

            let apiResponse
            try {
                apiResponse = await axios.post("https://api-sandbox.factus.com.co/v1/bills/validate",
                    dataFactura,
                    { headers: { Authorization: `Bearer ${token}` } }
                );

                envioData = apiResponse;
            } catch (axiosError) {
                console.error("Error en la API de Factus:", axiosError.response?.data || axiosError.message);
                return res.status(500).json({ error: "Error al validar la factura con Factus", details: axiosError.response?.data });
            }

            const nweFactura = new factura({
                numberingRangeId, referenceCode, observation, paymentForm,
                paymentDueDate, paymentMethodCode, billingPeriod,
                customers: existingCustomer,
                items: item,
                cufe,
                invoiceUrl: url,
                qr, publicUrl, qrImage, number, company
            });

            const savedFactura = await nweFactura.save();

            const populateFactura = await factura.findById(savedFactura._id)
            .populate("customers")
            .populate("items.items");

            if (!factura.length){
                return res.status(404).json({ error: "No se encontraron facturas" });
            }
            res.json(factura)
        }
    }

        





        export default httpFactura;