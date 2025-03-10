import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "About - Laphel.com",
		template: "%s | laphel.com",
	},
	description: "Nomad, Python, Nextjs, Web3, Crypto, Reading.",
	openGraph: {
		title: "laphel.com",
		description:
			"Nomad, Python, Nextjs, Web3, Crypto, Reading.",
		url: "https://laphel.com",
		siteName: "laphel.com",
		images: [
			{
				url: "https://about.laphel.com/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Laphel",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
			<script 
				defer 
				src="https://cloud.umami.is/script.js" 
				data-website-id="6ba7be75-6179-40f4-bec8-dd2d5e8d66a2"
				data-domains="about.laphel.com"
			></script>
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				<Analytics />
				{children}
			</body>
		</html>
	);
}
