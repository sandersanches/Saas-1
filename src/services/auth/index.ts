import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Nodemailer from "next-auth/providers/nodemailer"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../database"


export const { handlers: {GET, POST}, auth, signIn, signOut} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
     Nodemailer({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
})







// 1) Configuração Auth
// import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
// import Google from "next-auth/providers/google"

// export const {
//   auth,
//   handlers,
//   signIn,
//   signOut
// } = NextAuth({
//   providers: [GitHub, Google],
// })


// 2) Configuração Prisma
// import NextAuth from "next-auth"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [],
// })
