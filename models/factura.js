import mongoose from 'mongoose';

const facturaSchema = new mongoose.Schema(
    {
        numbering_range_id: { type: Number },   
        referenceCode: { type: String, required: true, unique: true },
        observation: { type: String},
        paymentForm: { type: String },
        paymentDueDate: { type: Date},
        paymentMethodCode: { type: String},
        billingPeriod: {
            startDate: { type: Date},
            startTime: { type: String},
            endDate: { type: Date},
            endTime: { type: String}
        },
        customer: {type: mongoose.Schema.Types.ObjectId, ref: 'customers', required: true},
        items: {type:Array, required: true},
        cufe: { type: String, unique: true },
        invoiceUrl: { type: String },
        qr: { type: String },
        publicUrl: { type: String },
        qrImage: { type: String },
        number: { type: String },
        company: { type: String },
    },
    {timestamps: true}  
);

export default mongoose.model('factura', facturaSchema);
