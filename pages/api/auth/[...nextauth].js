import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';
 
export default NextAuth ({
    providers: [
        // Google Provider
        GoogleProvider({
            clientId:  process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),

        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
            token: {
                url: 'https://www.linkedin.com/oauth/v2/accessToken',
                request: async context => {
                    const body = querystring.stringify({
                        grant_type: 'authorization_code',
                        code: context.params.code,
                        redirect_uri: context.provider.callbackUrl,
                        client_id: context.provider.clientId,
                        client_secret: context.provider.clientSecret,
                    });
                
                    const { data } = await axios.post(context.provider.token.url, body);
                
                    return {
                        tokens: [data.access_token],
                    };
                },
            },

            userinfo: {
                url:'https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))',
                async request(context) {
                    const { data } = await axios.get(context.provider.userinfo.url, {
                        headers: {
                            Authorization: `Bearer ${context.tokens[0]}`,
                        },
                    });
                    return data;
                },
            },
        }),
    ]
})