import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongo } from "@/db/dbconnect";
import Users from "@/models/Schema";
import { compare } from "bcryptjs";
export default NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials, req) {
                connectMongo();
                const { email, password } = credentials;
                const user = await Users.findOne({ email });
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
