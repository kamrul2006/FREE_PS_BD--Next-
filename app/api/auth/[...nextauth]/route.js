import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // EmailProvider({
        //     server: process.env.EMAIL_SERVER,
        //     from: process.env.EMAIL_FROM,
        // }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: '/login', // Optional: custom login page
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
