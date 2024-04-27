import { useState, useEffect } from "react";

const CustomCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [hidden, setHidden] = useState(false);
	const [click, setClick] = useState(false);
	const [linkHovered, setLinkHovered] = useState(false);

	useEffect(() => {
		const addEventListeners = () => {
			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseenter", onMouseEnter);
			document.addEventListener("mouseleave", onMouseLeave);
			document.addEventListener("mousedown", onMouseDown);
			document.addEventListener("mouseup", onMouseUp);
		};

		const removeEventListeners = () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseenter", onMouseEnter);
			document.removeEventListener("mouseleave", onMouseLeave);
			document.removeEventListener("mousedown", onMouseDown);
			document.removeEventListener("mouseup", onMouseUp);
		};

		const onMouseMove = (e: any) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		const onMouseLeave = () => {
			setHidden(true);
		};

		const onMouseEnter = () => {
			setHidden(false);
		};

		const onMouseDown = () => {
			setClick(true);
		};

		const onMouseUp = () => {
			setClick(false);
		};

		addEventListeners();
		return () => removeEventListeners();
	}, []);

	useEffect(() => {
		const links = document.querySelectorAll("a");
		const onMouseEnter = () => setLinkHovered(true);
		const onMouseLeave = () => setLinkHovered(false);

		links.forEach((link) => {
			link.addEventListener("mouseenter", onMouseEnter);
			link.addEventListener("mouseleave", onMouseLeave);
		});

		return () => {
			links.forEach((link) => {
				link.removeEventListener("mouseenter", onMouseEnter);
				link.removeEventListener("mouseleave", onMouseLeave);
			});
		};
	}, []);

	return (
		<div
			className={`fixed pointer-events-none z-50 transition-transform duration-150 ease-out ${
				hidden ? "opacity-0" : "opacity-60"
			}
        ${click ? "scale-90" : "scale-100"}`}
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
				width: "20px",
				height: "20px",
				borderRadius: "50%",
				background: linkHovered ? '#06b6d4' : "#081138",
				boxShadow:
					"0 0 0 2px white, 0 0 12px 4px rgba(255,255,255,0.7)",
			}}
		/>
	);
};

export default CustomCursor;
