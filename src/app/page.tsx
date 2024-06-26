"use client";
import React from "react";
import { ProjectParallax } from "@/components/project-parallax";
import { projectTileDetails } from "@/utils/projectDetails";
import { Lamp } from "@/components/lamp";
import { Background } from "@/components/background";
import CustomCursor from "@/components/custom-cursor";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between cursor-none">
			<CustomCursor />
			<Lamp />
			<Background />
			<ProjectParallax products={projectTileDetails} />
		</main>
	);
}
