import { Schema, model, models } from "mongoose";

const donationSchema = new Schema(
    {
        ammount: {
            type: Number,
            required: true,
            min: 10,
            max: 25000,
        },
        donationMethod: {
            type: String,
            required: true,
            enum: ["BKASH", "NAGAD"],
        },
        fromPhoneNumber: {
            type: String,
            required: true,
        },
        toPhoneNumber: {
            type: String,
            required: true,
        },
        isMember: {
            type: Boolean,
            required: true,
        },
        isGuest: {
            type: Boolean,
            required: true,
        },
        MemberId: {
            type: Schema.Types.ObjectId,
            ref: "Members",
        },
        transactionId: {
            type: String,
            required: true,
        },
        transactionDate: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const DonationModel =
    models.Donations || model("Donations", donationSchema);
