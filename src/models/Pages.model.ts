import { Schema, model, models } from "mongoose";

const pageSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    body: {
        type: Object
    }
}, {timestamps: true})
export const PageModel = models.Page || model("Page", pageSchema)