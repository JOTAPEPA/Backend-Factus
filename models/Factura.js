import moongose from 'mongoose';

const facturaSchema = new mongooseSchema ({
    numbering_range_id: {type: Number, required: true},
    reference_code: {type: String, required :true, unique: true},
    observation: { type: String, required: true},
    paymentForm: { type: String, required: true },
    paymentDueDate: {type: Date, required: true},
    paymentMethodCode: {type: String, required: true, unique: true},
    billingPeriod: {
        startDate: {type: Date, required: true},
        StartTime: {type: String, required: true },
        endDate: { type: Date, required: true},
        endTime: { type: String, required: true},
    },  
})

export default moongose.model('factura', facturaSchema)

