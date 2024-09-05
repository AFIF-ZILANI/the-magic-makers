import { Schema, model, models } from "mongoose";

const activitiesSchema = new Schema(
    {
        subject: {
            type: String,
            required: true,
        },
        aboutActivity: {
            type: String,
            required: true,
        },
        demandedMembers: [
            {
                type: Schema.Types.ObjectId,
                ref: "Members",
            },
        ],
        joinedMembers: [
            {
                type: Schema.Types.ObjectId,
                ref: "Members",
            },
        ],
        creator: {
            type: Schema.Types.ObjectId,
            ref: "Members",
        },
        joinedButNotMember: [
            {
                name: {
                    type: String,
                    required: true,
                    default: null,
                },
                address: {
                    type: String,
                    required: true,
                    default: null,
                },
            },
        ],
        timeLine: {
            type: String,
            required: true,
        },
        costOfActivity: {
            type: Number,
        },
        reasonOfCancel: {
            type: String,
        },
        reasonOfDelay: {
            type: String,
        },
        status: {
            type: String,
            required: true,
            enum: ["CONTINUE", "FINNISH", "CANCELED", "DELAY"],
        },
    },
    { timestamps: true }
);

export const ActivitiesModel =
    models.Activities || model("Activities", activitiesSchema);
