/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
       remotePatterns: [
         {
           protocol: 'https',
           hostname: 'muhevsuldpnzjmybxmih.supabase.co',
           port: '',
           pathname: '/**',
         },
       ],
     },
   };
   
   export default nextConfig;
   