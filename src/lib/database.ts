import mongoose from "mongoose";

type connectionObject = {
    isConnected?: boolean;
};

const connection: connectionObject = {};

export async function CONNECTDB() {
    if (connection.isConnected) {
        console.log("Database Already Connected!");
        return;
    }

    try {
        if (!process.env.MONGODB_CONNNECTION_URI) {
            throw new Error(
                "The enviroment variable `MONGODB_CONNNECTION_URI` is missing"
            );
        }
        const db = mongoose.connect(process.env.MONGODB_CONNNECTION_URI);

        if ((await db).connections[0].readyState) {
            connection.isConnected = true;
        } else {
            throw new Error("Database readystate is not valid");
        }
    } catch (error: any) {
        connection.isConnected = false;
        console.log("Database connection faild!, error: ", error.message);
        process.exit(1);
    }
}
