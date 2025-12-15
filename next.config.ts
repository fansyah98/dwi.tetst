import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  // menambahkan allowedDevOrigins untuk development mode
  allowedDevOrigins: [
    'http://localhost:3000',    // default dev
    'http://192.168.1.2:3000',  // ganti sesuai IP device-mu
  ],
};

export default nextConfig;
