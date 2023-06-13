import { connectMongo } from "@/db/dbconnect";
import Users from "@/models/Schema";
import { hash } from "bcryptjs";
async function handler(req, res) {
    if (req.method === "POST") {
        await connectMongo();
        if (!req.body) return res.status(204).json({ message: "No content" });
        const { firstName, lastName, email, password } = req.body;
        const checkUser = await Users.findOne({ email });
        if (checkUser)
            return res.status(422).json({
                message: "User already exists, login instead",
            });
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
