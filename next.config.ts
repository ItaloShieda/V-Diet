import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ajuda a identificar bugs no React 19
  poweredByHeader: false, // Segurança: remove o cabeçalho "X-Powered-By: Next.js"
  logging: {
    fetches: {
      fullUrl: true, // Ajuda a debugar requisições de dados no console
    },
  },
  // Se for usar imagens externas (ex: Google, S3), adicione aqui depois:
  // images: { remotePatterns: [...] }
};

export default nextConfig;
