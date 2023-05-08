import Link from "next/link";
import React from "react";

const navigation = [
	{ name: "Home", href: "https://laphel.com" },
	{ name: "Projects", href: "/projects" },
	{ name: "Channel", href: "/channel" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<h1 className="z-10 text-4xl  text-transparent duration-1000 cursor-default text-edge-outline animate-title  font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white ">
				Laphel
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Hi, this is Laphel, I'm building serverless and open source
					organization at{" "}
					<Link
						target="_blank"
						href="https://activitypubproject.github.io/"
						className="underline duration-500 hover:text-zinc-300"
					>
						ActivitypubProject
					</Link>

					<br />
					and working on my projects 
					{/* and working on{" "}
					<Link
						target="_blank"
						href="https://planetfall.io"
						className="underline duration-500 hover:text-zinc-300"
					>
						planetfall.io
					</Link>{" "} */}
					at night.
				</h2>
			</div>
		</div>
	);
}
