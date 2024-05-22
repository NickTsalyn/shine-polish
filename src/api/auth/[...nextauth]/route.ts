import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({  
    providers: [
        CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: { },
            email: {},
            password: { }
        },
        async authorize(credentials, req) {
            const user = { id: '1', name: 'J Smith', email:  'email@example.com', password: 'password' };
            return user;
        }
        }) 
    ] 
});


export { handler as GET, handler as POST};