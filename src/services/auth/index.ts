import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const {
  handlers: {GET, POST},
  auth
} = NextAuth({
  providers: [GitHub],
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
