import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';


const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username : {label: 'email', type: "text", placeholder: ""},
                password :{label: 'password', type: "password", placeholder: ""}
            },
            async authorize(credentials: any){
                console.log(credentials)
                return {
                    id: "1",
                    name: "dhiraj",
                    email: "sfl"
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks : {
        jwt : ({token, user}) => {
            console.log(token)
            token.userId = token.sub
            // console.log(user)
            console.log(token)
            return token
        },
        session : ({token, session, user} : any) => {
            console.log(token)
            console.log(session)
            console.log(user)
            if(session && session.user){

                session.user.id = token.sub
            }
            return session
        }
    }
})

export const GET = handler
export const POST = handler