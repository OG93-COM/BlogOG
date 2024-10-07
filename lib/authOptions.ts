import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@auth/prisma-adapter'
import prisma from "@/lib/prismadb"
import { NextAuthOptions } from 'next-auth';


export const authOptions : NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
    GitHubProvider({
        clientId: process.env.CLIENT_ID_GITHUB as string,
        clientSecret: process.env.CLIENT_SECRET_GITHUB as string
    }),
    GoogleProvider({
        clientId: process.env.CLIENT_ID_GOOGLE as string,
        clientSecret: process.env.CLIENT_SECRET_GOOGLE as string,
    })
],
pages: {
    signIn:"/signin",
},
secret: process.env.NEXTAUTH_SECRET as string
}