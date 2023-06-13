import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongo } from "@/db/dbconnect";
import Users from "@/models/Schema";
import { compare } from "bcryptjs";
export default NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials, req) {
                await connectMongo();
                const { email, password } = credentials;
                const user = await Users.findOne({ email });
                console.log(user);
                if (!user) {
                    throw new Error("Email not found");
                }
                const matchPassword = await compare(password, user.password);
                if (!user || !matchPassword) {
                    throw new Error("Password or Email not valid");
                }
                return user;
            },
        }),
    ],
});
