import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "images.unsplash.com" },
			{ protocol: "https", hostname: "scontent-phx1-1.cdninstagram.com" },
		],
	},
};

export default nextConfig;
