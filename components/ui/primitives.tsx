"use client";

import { useState, type ReactNode, type CSSProperties } from "react";
import { Image as ImageIcon, User, Star } from "lucide-react";
import Image from "next/image";
import { CLIENT_CONFIG } from "@/config/client.config";

// ─── Badge ────────────────────────────────────────────────────────────────────
interface BadgeProps {
	children: ReactNode;
	tone?: "neutral" | "primary" | "accent" | "outline";
	icon?: React.ComponentType<{ size?: number; strokeWidth?: number }>;
	style?: CSSProperties;
}

const BADGE_TONES = {
	neutral: { bg: "var(--c-surface-2)", fg: "var(--c-fg)", bd: "var(--c-border)" },
	primary: {
		bg: "color-mix(in srgb, var(--c-primary), #fff 82%)",
		fg: "var(--c-primary)",
		bd: "color-mix(in srgb, var(--c-primary), #fff 70%)",
	},
	accent: {
		bg: "color-mix(in srgb, var(--c-accent), #fff 82%)",
		fg: "var(--c-accent)",
		bd: "color-mix(in srgb, var(--c-accent), #fff 70%)",
	},
	outline: { bg: "transparent", fg: "var(--c-muted)", bd: "var(--c-border)" },
};

export function Badge({ children, tone = "neutral", icon: Icon, style }: BadgeProps) {
	const t = BADGE_TONES[tone];
	return (
		<span
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: 6,
				height: 26,
				padding: "0 10px",
				borderRadius: "var(--r-pill)",
				background: t.bg,
				color: t.fg,
				border: `1px solid ${t.bd}`,
				fontFamily: "var(--f-body)",
				fontSize: 12,
				fontWeight: 500,
				letterSpacing: "-0.005em",
				whiteSpace: "nowrap",
				...style,
			}}
		>
			{Icon && <Icon size={13} strokeWidth={2} />}
			{children}
		</span>
	);
}

// ─── Card ─────────────────────────────────────────────────────────────────────
interface CardProps {
	children: ReactNode;
	hover?: boolean;
	padding?: number;
	style?: CSSProperties;
	onClick?: () => void;
}

export function Card({ children, hover = false, padding = 24, style, onClick }: CardProps) {
	const [h, setH] = useState(false);
	const interactive = hover || !!onClick;
	return (
		<div
			onClick={onClick}
			onMouseEnter={() => setH(true)}
			onMouseLeave={() => setH(false)}
			style={{
				background: "var(--c-surface)",
				border: `1px solid ${interactive && h ? "color-mix(in srgb, var(--c-primary), transparent 60%)" : "var(--c-border)"}`,
				borderRadius: "var(--r-lg)",
				padding,
				cursor: onClick ? "pointer" : "default",
				boxShadow: interactive && h ? "var(--shadow-md)" : "var(--shadow-sm)",
				transform: interactive && h ? "translateY(-2px)" : "none",
				transition: "box-shadow 0.18s, transform 0.18s, border-color 0.18s",
				...style,
			}}
		>
			{children}
		</div>
	);
}

// ─── ImageSlot ────────────────────────────────────────────────────────────────
interface ImageSlotProps {
	label: string;
	ratio?: string;
	filled?: boolean;
	src?: string;
	alt?: string;
	style?: CSSProperties;
}

export function ImageSlot({ label, ratio = "16/9", filled, src, alt = "", style }: ImageSlotProps) {
	if (filled && src) {
		return (
			<div
				style={{
					aspectRatio: ratio,
					width: "100%",
					backgroundImage: `url(${src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundColor: "var(--c-surface-2)",
					borderRadius: "var(--r-md)",
					...style,
				}}
				role='img'
				aria-label={alt || label}
			/>
		);
	}
	return (
		<div
			style={{
				aspectRatio: ratio,
				width: "100%",
				position: "relative",
				background: "var(--c-surface-2)",
				border: "1px dashed var(--c-border)",
				borderRadius: "var(--r-md)",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: 6,
				color: "var(--c-muted)",
				overflow: "hidden",
				backgroundImage:
					"repeating-linear-gradient(135deg, transparent, transparent 14px, color-mix(in srgb, var(--c-border), transparent 50%) 14px, color-mix(in srgb, var(--c-border), transparent 50%) 15px)",
				...style,
			}}
		>
			<ImageIcon size={20} strokeWidth={1.5} style={{ opacity: 0.6 }} />
			<div
				style={{
					fontFamily: "var(--f-body)",
					fontSize: 11,
					fontWeight: 500,
					letterSpacing: "0.02em",
					textTransform: "uppercase",
					opacity: 0.7,
				}}
			>
				{label}
			</div>
			<div style={{ fontFamily: "var(--f-body)", fontSize: 10, opacity: 0.5, fontVariantNumeric: "tabular-nums" }}>
				{ratio}
			</div>
		</div>
	);
}

// ─── Stars ────────────────────────────────────────────────────────────────────
export function Stars({ rating = 5, size = 14 }: { rating?: number; size?: number }) {
	return (
		<div style={{ display: "inline-flex", gap: 2, color: "var(--c-accent)" }}>
			{Array.from({ length: 5 }).map((_, i) => (
				<Star key={i} size={size} strokeWidth={1.5} style={{ fill: i < rating ? "currentColor" : "transparent" }} />
			))}
		</div>
	);
}

// ─── Logo ─────────────────────────────────────────────────────────────────────
interface LogoProps {
	kind?: "text" | "icon" | "image";
	name: string;
	mark?: React.ComponentType<{ size?: number; strokeWidth?: number }>;
	size?: number;
	style?: CSSProperties;
}

export function Logo({ kind = "icon", name, mark: Mark, size = 22, style }: LogoProps) {
	if (kind === "image") {
		return (
			<div style={{ display: "flex", alignItems: "center", gap: 10, ...style }}>
				{CLIENT_CONFIG.data.logoImageUrl ? (
					<Image src={CLIENT_CONFIG.data.logoImageUrl} alt={name} width={size + 18} height={size + 6} />
				) : (
					<div
						style={{
							width: size + 18,
							height: size + 6,
							borderRadius: "var(--r-sm)",
							background:
								"repeating-linear-gradient(135deg, var(--c-surface-2), var(--c-surface-2) 6px, var(--c-border) 6px, var(--c-border) 7px)",
							border: "1px dashed var(--c-border)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontFamily: "var(--f-body)",
							fontSize: 9,
							color: "var(--c-muted)",
							letterSpacing: "0.04em",
							textTransform: "uppercase" as const,
						}}
					>
						logo
					</div>
				)}
			</div>
		);
	}

	return (
		<div style={{ display: "flex", alignItems: "center", gap: 8, ...style }}>
			{kind === "icon" && Mark && (
				<div
					style={{
						width: size + 6,
						height: size + 6,
						borderRadius: "var(--r-sm)",
						background: "var(--c-primary)",
						color: "var(--c-primary-fg)",
						display: "grid",
						placeItems: "center",
						flexShrink: 0,
					}}
				>
					<Mark size={Math.round(size * 0.7)} strokeWidth={2} />
				</div>
			)}
			<span
				style={{
					fontFamily: "var(--f-display)",
					fontWeight: 600,
					fontSize: size,
					letterSpacing: "-0.01em",
					color: "var(--c-fg)",
					lineHeight: 1,
				}}
			>
				{name}
			</span>
		</div>
	);
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
export function Avatar({ src, filled }: { src: string; filled?: boolean }) {
	return (
		<div
			style={{
				width: 40,
				height: 40,
				borderRadius: "50%",
				flexShrink: 0,
				...(filled
					? { backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" }
					: {
							background: "var(--c-surface-2)",
							border: "1px dashed var(--c-border)",
							display: "grid",
							placeItems: "center",
						}),
			}}
		>
			{!filled && <User size={18} strokeWidth={1.5} style={{ color: "var(--c-muted)" }} />}
		</div>
	);
}
