"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/primitives";
import { getIcon } from "@/lib/icons";
import type { Archetype, LogoKind } from "@/config/design.config";

const LINKS = ["About", "Services", "Menu", "Gallery", "Hours", "Contact"];

interface NavProps {
	data: Archetype;
	logoKind: LogoKind;
}

export function Nav({ data, logoKind }: NavProps) {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const Mark = getIcon(data.logoMark);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Close mobile menu on resize
	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth >= 768) setOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return (
		<header
			style={{
				position: "sticky",
				top: 0,
				zIndex: 30,
				background: scrolled
					? "color-mix(in srgb, var(--c-bg) 92%, transparent)"
					: "color-mix(in srgb, var(--c-bg) 80%, transparent)",
				backdropFilter: "blur(16px) saturate(150%)",
				WebkitBackdropFilter: "blur(16px) saturate(150%)",
				borderBottom: `1px solid ${scrolled ? "var(--c-border)" : "transparent"}`,
				transition: "background 0.3s, border-color 0.3s",
			}}
		>
			{/* Desktop nav */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "18px 48px",
					maxWidth: 1280,
					margin: "0 auto",
				}}
				className='mobile-nav-bar'
			>
				<Logo kind={logoKind} name={data.name} mark={Mark} size={20} />

				{/* Desktop links */}
				<nav className='desktop-nav' style={{ display: "flex", alignItems: "center", gap: 4 }}>
					{LINKS.map((l) => (
						<DesktopLink key={l} href={`#${l.toLowerCase()}`} label={l} />
					))}
					<span style={{ width: 12 }} />
					<Button variant='secondary' size='sm' icon={Phone} href={`tel:${data.contact.phone}`}>
						{data.contact.phone}
					</Button>
					<Button variant='primary' size='sm'>
						Book now
					</Button>
				</nav>

				{/* Mobile row */}
				<div className='mobile-nav' style={{ display: "flex", alignItems: "center", gap: 6 }}>
					<Button variant='primary' size='sm' icon={Phone} href={`tel:${data.contact.phone}`}>
						Call
					</Button>
					<button
						onClick={() => setOpen(!open)}
						style={{
							appearance: "none",
							border: "1px solid var(--c-border)",
							background: "var(--c-surface)",
							width: 40,
							height: 40,
							borderRadius: "var(--r-md)",
							display: "grid",
							placeItems: "center",
							cursor: "pointer",
							color: "var(--c-fg)",
						}}
						aria-label='Toggle menu'
					>
						{open ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
						style={{ overflow: "hidden", borderTop: "1px solid var(--c-border)" }}
					>
						<div
							style={{
								padding: "8px 18px 18px",
								background: "var(--c-bg)",
								display: "flex",
								flexDirection: "column",
								gap: 2,
							}}
						>
							{LINKS.map((l) => (
								<a
									key={l}
									href={`#${l.toLowerCase()}`}
									onClick={(e) => {
										e.preventDefault();
										setOpen(false);

										setTimeout(() => {
											document.querySelector(`#${l.toLowerCase()}`)?.scrollIntoView({
												behavior: "smooth",
											});
										}, 150); // match your sheet/drawer close animation duration
									}}
									style={{
										padding: "14px 4px",
										fontFamily: "var(--f-body)",
										fontSize: 16,
										fontWeight: 500,
										color: "var(--c-fg)",
										textDecoration: "none",
										borderBottom: "1px solid var(--c-border)",
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									{l}
									<ChevronRight size={16} strokeWidth={2} style={{ opacity: 0.4 }} />
								</a>
							))}
							<div style={{ paddingTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
								<Button variant='primary' size='md' full icon={Phone} href={`tel:${data.contact.phone}`}>
									{data.contact.phone}
								</Button>
								{/* <Button variant='secondary' size='md' full icon={Calendar}>
									Book online
								</Button> */}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

function DesktopLink({ href, label }: { href: string; label: string }) {
	const [hover, setHover] = useState(false);
	return (
		<a
			href={href}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				padding: "8px 14px",
				fontFamily: "var(--f-body)",
				fontSize: 14,
				fontWeight: 500,
				color: hover ? "var(--c-primary)" : "var(--c-fg)",
				textDecoration: "none",
				borderRadius: "var(--r-md)",
				background: hover ? "var(--c-surface-2)" : "transparent",
				transition: "color 0.14s, background 0.14s",
			}}
		>
			{label}
		</a>
	);
}
