import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema(
    {
        legalOrganizationId: { type: String, required: true }, 
        identificationDocumentId: { type: String, required: true },
        identification: { type: String, required: true, },
        dv: { type: String},
        company: { type: String, },
        tradeName: { type: String, },
        names: { type: String},
        addres: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        tributeId: { type: String, required: true },
        municipalityId: { type: String, required: true },
        state: { type: Number, default: 1 },
    })

export default mongoose.model('customers', customerSchema)