// Next Auth.
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// DB.
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [Google],
    callbacks: {
        async signIn({ profile }) {
            if (!profile?.email) {
                throw new Error('no profile');
            }
            
            await prisma.user.upsert({
                where: {
                    email: profile.email,
                },
                create: {
                    email: profile.email,
                    name: profile.name,
                },
                update: {
                    name: profile.name
                }
            })

            return true;
        },
        // Prepare the JWT with User ID Field.
        async jwt({ token, profile }) {
            if (profile && profile.email) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: profile.email
                    }
                });

                if (!user) {
                    throw new Error('No Valid User Found.');
                }

                return {...token, id: user.id};
            }

            return token;
        },
        // Prepare user session cookie with custom fields.
        async session({ session, token }) {
            if (!token.id) {
                throw new Error('Invalid User');
            }
            
            return { ...session, id: token.id };
        }
    }
});