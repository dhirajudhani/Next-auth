import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';


const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username : {label: 'email', type: "text", placeholder: ""},
                password : {label: 'password', type: "text", placeholder: ""}
            },
            async authorize(credentials: any){
                return {
                    id: "user1"
                }
            }
        })
    ]
})

export const GET = handler
export const POST = handler