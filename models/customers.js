import mongoose from "mongoose";

const customerSchema = new mongooseSchema ({
    indetification: {type: Number, requiered: true, unique: true},
    dv: {type: String, requiered: true},
    company: {type: String, requiered: true,},
    tradeName: { type: String, requiered: true},
    names: { type: String, requiered: true},
    addres: {type: String, requiered: true},
    email: {type:String, requiered: true},
    phone: {type:String, requiered: true},
    legalOrganizationId: {type: String, requiered: true, unique: true},
    tributeId: { type: String, requiered: true, unique: true},
    identificationDocumentId: {type: String, requiered:true, unique: true},
    municipalityId: {type: String, requiered: true, unique: true}

})

export default moongose.model('customer', customerSchema)