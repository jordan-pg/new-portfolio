"use client";
import React from "react";
import { Lamp } from "@/components/lamp";
import { Background } from "@/components/background";
import CustomCursor from "@/components/custom-cursor";
import { Projects } from "@/components/projects";
import { content } from "@/utils/projectDetails";

export default function ProjectsPage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between cursor-none">
				<CustomCursor />
				<Projects content={content} />
				<Background />
		</main>
	);
}
