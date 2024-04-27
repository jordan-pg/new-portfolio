import Image from "next/image";

export const projectTileDetails = [
	{
		title: "Moonbeam",
		link: "https://gomoonbeam.com",
		thumbnail:
			"/seatscoutr.png",
	},
	{
		title: "Cursor",
		link: "https://cursor.so",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/cursor.png",
	},
	{
		title: "Rogue",
		link: "https://userogue.com",
		thumbnail:
			"/seatscoutr.png",
	},

	{
		title: "Editorially",
		link: "https://editorially.org",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/editorially.png",
	},
	{
		title: "Editrix AI",
		link: "https://editrix.ai",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/editrix.png",
	},
	{
		title: "Pixel Perfect",
		link: "https://app.pixelperfect.quest",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
	},

	{
		title: "Algochurn",
		link: "https://algochurn.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/algochurn.png",
	},
	{
		title: "Aceternity UI",
		link: "https://ui.aceternity.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
	},
	{
		title: "Tailwind Master Kit",
		link: "https://tailwindmasterkit.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
	},
	{
		title: "SmartBridge",
		link: "https://smartbridgetech.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
	},
	{
		title: "Renderwork Studio",
		link: "https://renderwork.studio",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/renderwork.png",
	},

	{
		title: "Creme Digital",
		link: "https://cremedigital.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
	},
	{
		title: "Golden Bells Academy",
		link: "https://goldenbellsacademy.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
	},
	{
		title: "Invoker Labs",
		link: "https://invoker.lol",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/invoker.png",
	},
	{
		title: "E Free Invoice",
		link: "https://efreeinvoice.com",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
	},
];

export const content = [
	{
		title: "Collaborative Editing",
		description:
			"Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
				Collaborative Editing
			</div>
		),
	},
	{
		title: "Real time changes",
		description:
			"See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<Image
					src="/linear.webpack"
					width={300}
					height={300}
					className="h-full w-full object-cover"
					alt="linear board demo"
				/>
			</div>
		),
	},
	{
		title: "Version control",
		description:
			"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
				Version control
			</div>
		),
	},
	{
		title: "Running out of content",
		description:
			"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
				Running out of content
			</div>
		),
	},
];
