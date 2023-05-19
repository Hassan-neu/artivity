import { connectMongo } from "@/db/dbconnect";
import Users from "@/models/Schema";
import { hash } from "bcryptjs";
async function handler(req, res) {
    if (req.method === "POST") {
        connectMongo();
        if (!req.body) res.status(204).json({ message: "No content" });
        const { firstName, lastName, email, password } = req.body;
        const user = await Users.create({
            firstName,
            lastName,
            email,
            password: await hash(password, 12),
        });

        res.status(201).json({ user });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

export default handler;
