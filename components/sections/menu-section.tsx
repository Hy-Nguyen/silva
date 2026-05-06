"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/primitives";
import { stagger, staggerItem } from "@/lib/motion";
import type { Archetype, MenuVariant, MenuCategory } from "@/config/design.config";
import FillerImage from "../ui/filler-image";
import Image from "next/image";

const VP = { once: true, margin: "-60px" };

interface MenuSectionProps {
	data: Archetype;
	variant: MenuVariant;
	filled: boolean;
	menuItemsPictures: boolean;
}

export function MenuSection({ data, variant, filled, menuItemsPictures }: MenuSectionProps) {
	const reduced = useReducedMotion();
	const [tab, setTab] = useState(0);
	const [openAcc, setOpenAcc] = useState(0);
	if (!data.menu) return null;
	const cats = data.menu.categories;

	return (
		<section
			id='menu'
			style={{ padding: "clamp(72px, 8vw, 120px) clamp(24px, 5vw, 64px)", maxWidth: 1280, margin: "0 auto" }}
		>
			<motion.div
				variants={reduced ? undefined : stagger()}
				initial='hidden'
				whileInView='show'
				viewport={VP}
				style={{ maxWidth: 640, marginBottom: "clamp(32px, 5vw, 48px)" }}
			>
				<motion.div variants={reduced ? undefined : staggerItem}>
					<Badge tone='accent' style={{ marginBottom: 20 }}>
						Menu
					</Badge>
				</motion.div>
				<motion.h2
					variants={reduced ? undefined : staggerItem}
					style={{
						fontFamily: "var(--f-display)",
						fontWeight: 500,
						fontSize: "clamp(32px, 3.5vw, 48px)",
						lineHeight: 1.05,
						letterSpacing: "-0.02em",
						color: "var(--c-fg)",
						margin: 0,
					}}
				>
					{data.menu.sectionTitle}
				</motion.h2>
			</motion.div>

			{variant === "tabs" ? (
				<TabsMenu cats={cats} tab={tab} setTab={setTab} filled={filled} menuItemsPictures={menuItemsPictures} />
			) : (
				<AccordionMenu
					cats={cats}
					open={openAcc}
					setOpen={setOpenAcc}
					filled={filled}
					menuItemsPictures={menuItemsPictures}
				/>
			)}
		</section>
	);
}

function TabsMenu({
	cats,
	tab,
	setTab,
	filled,
	menuItemsPictures,
}: {
	cats: MenuCategory[];
	tab: number;
	setTab: (i: number) => void;
	filled: boolean;
	menuItemsPictures: boolean;
}) {
	return (
		<>
			{/* Tab bar */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={VP}
				transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
				style={{
					display: "flex",
					gap: 4,
					padding: 4,
					background: "var(--c-surface-2)",
					borderRadius: "var(--r-pill)",
					marginBottom: 32,
					width: "fit-content",
					maxWidth: "100%",
					overflow: "auto",
				}}
			>
				{cats.map((c, i) => (
					<button
						key={i}
						onClick={() => setTab(i)}
						style={{
							appearance: "none",
							border: "none",
							cursor: "pointer",
							padding: "10px 18px",
							borderRadius: "var(--r-pill)",
							background: tab === i ? "var(--c-surface)" : "transparent",
							color: tab === i ? "var(--c-fg)" : "var(--c-muted)",
							fontFamily: "var(--f-body)",
							fontSize: 14,
							fontWeight: 600,
							whiteSpace: "nowrap",
							transition: "background 0.14s, color 0.14s",
							boxShadow: tab === i ? "var(--shadow-sm)" : "none",
						}}
					>
						{c.name}
					</button>
				))}
			</motion.div>

			<AnimatePresence mode='wait'>
				<motion.div
					key={tab}
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -8 }}
					transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
						gap: "4px clamp(24px, 4vw, 56px)",
					}}
				>
					{cats[tab].items.map((item, i) => (
						<MenuItem key={i} item={item} index={i} filled={filled} menuItemsPictures={menuItemsPictures} />
					))}
				</motion.div>
			</AnimatePresence>
		</>
	);
}

function AccordionMenu({
	cats,
	open,
	setOpen,
	filled,
	menuItemsPictures,
}: {
	cats: MenuCategory[];
	open: number;
	setOpen: (i: number) => void;
	filled: boolean;
	menuItemsPictures: boolean;
}) {
	return (
		<div style={{ borderTop: "1px solid var(--c-border)" }}>
			{cats.map((c, i) => (
				<div key={i} style={{ borderBottom: "1px solid var(--c-border)" }}>
					<button
						onClick={() => setOpen(open === i ? -1 : i)}
						style={{
							appearance: "none",
							border: "none",
							background: "transparent",
							width: "100%",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							padding: "20px 0",
							textAlign: "left",
						}}
					>
						<span
							style={{
								fontFamily: "var(--f-display)",
								fontWeight: 500,
								fontSize: "clamp(22px, 2.5vw, 28px)",
								letterSpacing: "-0.01em",
								color: "var(--c-fg)",
							}}
						>
							{c.name}
						</span>
						<motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
							<ChevronDown size={20} strokeWidth={1.8} style={{ color: "var(--c-muted)" }} />
						</motion.div>
					</button>

					<AnimatePresence initial={false}>
						{open === i && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
								style={{ overflow: "hidden" }}
							>
								<div
									style={{
										paddingBottom: 24,
										display: "grid",
										gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
										gap: "4px clamp(24px, 4vw, 56px)",
									}}
								>
									{c.items.map((item, j) => (
										<MenuItem
											key={j}
											item={item}
											index={j}
											filled={filled}
											menuItemsPictures={menuItemsPictures}
										/>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	);
}

function MenuItem({
	item,
	index,
	filled,
	menuItemsPictures,
}: {
	item: { name: string; desc: string; price: string; image?: string };
	index: number;
	filled: boolean;
	menuItemsPictures: boolean;
}) {
	return (
		<div
			className='py-3.5 flex flex-row'
			style={{ borderBottom: "1px dashed color-mix(in srgb, var(--c-border), transparent 30%)" }}
		>
			<AnimatePresence initial={false}>
				{menuItemsPictures && (
					<motion.div
						initial={{ opacity: 0, width: 0 }}
						animate={{ opacity: 1, width: "64px", height: "64px" }}
						exit={{ opacity: 0, width: 0 }}
						transition={{ duration: 0.3 }}
						style={{ marginRight: 16, flexShrink: 0 }}
						className='overflow-hidden size-16'
					>
						{filled ? (
							item.image ? (
								<Image
									src={item.image}
									alt={item.name}
									width={64}
									height={64}
									className='object-cover w-full h-full rounded-md'
								/>
							) : (
								<div
									className='size-16'
									style={{
										borderRadius: 8,
										background: "var(--c-muted)",
										flexShrink: 0,
									}}
								/>
							)
						) : (
							<FillerImage index={index} />
						)}
					</motion.div>
				)}
			</AnimatePresence>
			<div>
				<div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
					<span
						style={{
							fontFamily: "var(--f-display)",
							fontWeight: 600,
							fontSize: 17,
							color: "var(--c-fg)",
							letterSpacing: "-0.005em",
						}}
					>
						{item.name}
					</span>
					<span
						style={{
							flex: 1,
							borderBottom: "1px dotted color-mix(in srgb, var(--c-border), transparent 30%)",
							marginBottom: 4,
						}}
					/>
					<span
						style={{
							fontFamily: "var(--f-body)",
							fontSize: 14,
							fontWeight: 600,
							color: "var(--c-primary)",
							fontVariantNumeric: "tabular-nums",
							whiteSpace: "nowrap",
						}}
					>
						{item.price}
					</span>
				</div>
				<p
					style={{
						fontFamily: "var(--f-body)",
						fontSize: 13,
						lineHeight: 1.5,
						color: "var(--c-muted)",
						margin: 0,
					}}
				>
					{item.desc}
				</p>
			</div>
		</div>
	);
}
