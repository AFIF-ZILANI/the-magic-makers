import { Schema, models, model } from "mongoose";

const memberSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        fatherName: {
            type: String,
            required: true,
            trim: true,
        },
        motherName: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        contributation: {
            type: Number,
            default: 0,
        },
        role: {
            type: String,
            required: true,
            enum: ["member", "admin"],
        },
        donations: [
            {
                type: Schema.Types.ObjectId,
                ref: "Donations",
            },
        ],
        activities: [
            {
                type: Schema.Types.ObjectId,
                ref: "Activities",
            },
        ],
    },
    { timestamps: true }
);

export const MemberModel = models.Members || model("Members", memberSchema);
