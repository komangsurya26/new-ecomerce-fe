const { Schema, model, models } = require("mongoose");

const OrderSchema = new Schema({
    line_items: Object,
    name : String,
    email: String,
    address: String,
    regency: String,
    province: String,
    postalCode: String,
    paid: Boolean
})

export const Order = models?.Order || model('Order', OrderSchema)