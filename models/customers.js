import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema (
    {
    typeOfPerson: {type: String, required: true},   
    typeOfIdentification: {type: String, required: true},
    identification: {type: Number, required: true, },
    dv: {type: String, required: true},
    company: {type: String, required: true,},
    tradeName: { type: String, required: true},
    names: { type: String, required: true},
    addres: {type: String, required: true},
    email: {type:String, required: true},
    phone: {type:String, required: true},
    legalOrganizationId: {type: String, required: true},
    tributeId: { type: String, required: true},
    identificationDocumentId: {type: String, required:true},
    municipalityId: {type: String, required: true}
 
})

export default mongoose.model('customers', customerSchema)