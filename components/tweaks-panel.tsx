"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Settings, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-context";
import { PALETTES, FONT_PAIRS, type ArchetypeKey, type PaletteKey, type FontPairKey } from "@/config/design.config";

export function TweaksPanel() {
	const [open, setOpen] = useState(true);
	const { config, setConfig } = useTheme();

	return (
		<>
			{/* Toggle button */}
			<motion.button
				onClick={() => setOpen((v) => !v)}
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ delay: 1, type: "spring", stiffness: 300, damping: 22 }}
				whileHover={{ scale: 1.08 }}
				whileTap={{ scale: 0.94 }}
				style={{
					position: "fixed",
					bottom: 20,
					right: 20,
					zIndex: 2147483645,
					width: 48,
					height: 48,
					borderRadius: "50%",
					background: "rgba(20,18,15,0.88)",
					color: "#fff",
					border: "1px solid rgba(255,255,255,0.12)",
					display: "grid",
					placeItems: "center",
					cursor: "pointer",
					boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
					backdropFilter: "blur(8px)",
				}}
				aria-label='Open tweaks'
			>
				{open ? <X size={18} strokeWidth={2} /> : <Settings size={18} strokeWidth={2} />}
			</motion.button>

			{/* Panel */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, y: 16, scale: 0.97 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 16, scale: 0.97 }}
						transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
						style={{
							position: "fixed",
							bottom: 76,
							right: 20,
							zIndex: 2147483646,
							width: 292,
							maxHeight: "calc(100vh - 96px)",
							display: "flex",
							flexDirection: "column",
							background: "rgba(250,249,247,0.82)",
							color: "#29261b",
							backdropFilter: "blur(24px) saturate(160%)",
							WebkitBackdropFilter: "blur(24px) saturate(160%)",
							border: "0.5px solid rgba(255,255,255,0.65)",
							borderRadius: 16,
							boxShadow: "0 1px 0 rgba(255,255,255,0.5) inset, 0 16px 48px rgba(0,0,0,0.2)",
							fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
							fontSize: 11.5,
							overflow: "hidden",
						}}
					>
						{/* Header */}
						<div
							style={{
								padding: "12px 14px",
								borderBottom: "0.5px solid rgba(0,0,0,0.07)",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<span style={{ fontWeight: 600, fontSize: 12, letterSpacing: "-0.01em" }}>Tweaks</span>
							<button
								onClick={() => setOpen(false)}
								style={{
									appearance: "none",
									border: 0,
									background: "transparent",
									color: "rgba(41,38,27,0.5)",
									width: 22,
									height: 22,
									borderRadius: 6,
									cursor: "pointer",
									display: "grid",
									placeItems: "center",
									fontSize: 13,
								}}
							>
								✕
							</button>
						</div>

						{/* Body */}
						<div
							style={{
								padding: "4px 14px 16px",
								display: "flex",
								flexDirection: "column",
								gap: 12,
								overflowY: "auto",
								overflowX: "hidden",
							}}
						>
							{/* ── Archetype ── */}
							<Section label='Brand archetype' />
							<SegmentedControl
								label='Client'
								value={config.archetype}
								options={[
									{ value: "salon", label: "Salon" },
									{ value: "plumber", label: "Plumber" },
									{ value: "taco", label: "Taco" },
								]}
								onChange={(v) => setConfig("archetype", v as ArchetypeKey)}
							/>

							{/* ── Palette ── */}
							<Section label='Palette' />
							<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
								{(Object.entries(PALETTES) as [PaletteKey, (typeof PALETTES)[PaletteKey]][]).map(([k, p]) => {
									const sel = config.palette === k;
									return (
										<button
											key={k}
											onClick={() => setConfig("palette", k)}
											style={{
												appearance: "none",
												cursor: "pointer",
												padding: 6,
												background: sel ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)",
												border: sel ? "1px solid rgba(0,0,0,0.35)" : "1px solid rgba(0,0,0,0.08)",
												borderRadius: 8,
												display: "flex",
												flexDirection: "column",
												gap: 4,
												boxShadow: sel ? "0 0 0 2px rgba(0,0,0,0.1)" : "none",
												transition: "border-color 0.12s, background 0.12s",
											}}
										>
											<div style={{ display: "flex", gap: 2, height: 14 }}>
												<span
													style={{
														flex: 1,
														background: p.bg,
														borderRadius: "2px 0 0 2px",
														border: "0.5px solid rgba(0,0,0,0.08)",
													}}
												/>
												<span style={{ flex: 1, background: p.fg }} />
												<span style={{ flex: 1, background: p.primary }} />
												<span style={{ flex: 1, background: p.accent, borderRadius: "0 2px 2px 0" }} />
											</div>
											<span style={{ fontSize: 10, fontWeight: 600, color: "#29261b", textAlign: "left" }}>
												{p.name}
											</span>
										</button>
									);
								})}
							</div>

							{/* ── Typography ── */}
							<Section label='Typography' />
							<SelectControl
								label='Font pair'
								value={config.fontPair}
								options={[
									{ value: "fraunces", label: "Fraunces + Inter" },
									{ value: "instrument", label: "Instrument Serif + DM Sans" },
									{ value: "bricolage", label: "Bricolage + IBM Plex" },
									{ value: "dmserif", label: "DM Serif + DM Sans" },
									{ value: "geist", label: "System UI (Geist)" },
								]}
								onChange={(v) => setConfig("fontPair", v as FontPairKey)}
							/>

							{/* ── Logo ── */}
							<Section label='Logo' />
							<SegmentedControl
								label='Lockup'
								value={config.logoKind}
								options={[
									{ value: "text", label: "Text" },
									{ value: "icon", label: "Icon+Text" },
									{ value: "image", label: "Image" },
								]}
								onChange={(v) => setConfig("logoKind", v as "text" | "icon" | "image")}
							/>

							{/* ── Shape & content ── */}
							<Section label='Shape & content' />
							<SliderControl
								label='Border radius'
								value={config.radius}
								min={0}
								max={2}
								step={0.25}
								unit='×'
								onChange={(v) => setConfig("radius", v)}
							/>
							<ToggleControl
								label='Filled imagery'
								value={config.filledImagery}
								onChange={(v) => setConfig("filledImagery", v)}
							/>

							{/* ── Menu (taco only) ── */}
							{config.archetype === "taco" && (
								<>
									<Section label='Menu style' />
									<SegmentedControl
										label='Layout'
										value={config.menuVariant}
										options={[
											{ value: "tabs", label: "Tabs" },
											{ value: "accordion", label: "Accordion" },
										]}
										onChange={(v) => setConfig("menuVariant", v as "tabs" | "accordion")}
									/>
									<ToggleControl
										label='Show menu pictures'
										value={config.menuItemsPictures}
										onChange={(v) => setConfig("menuItemsPictures", v)}
									/>
								</>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Section({ label }: { label: string }) {
	return (
		<div
			style={{
				fontSize: 10,
				fontWeight: 600,
				letterSpacing: "0.06em",
				textTransform: "uppercase",
				color: "rgba(41,38,27,0.45)",
				paddingTop: 10,
			}}
		>
			{label}
		</div>
	);
}

function Row({ label, value, children }: { label: string; value?: string | number; children: React.ReactNode }) {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "baseline",
					color: "rgba(41,38,27,0.72)",
				}}
			>
				<span style={{ fontWeight: 500 }}>{label}</span>
				{value != null && (
					<span style={{ color: "rgba(41,38,27,0.45)", fontVariantNumeric: "tabular-nums" }}>{value}</span>
				)}
			</div>
			{children}
		</div>
	);
}

function SegmentedControl({
	label,
	value,
	options,
	onChange,
}: {
	label: string;
	value: string;
	options: { value: string; label: string }[];
	onChange: (v: string) => void;
}) {
	const n = options.length;
	const idx = Math.max(
		0,
		options.findIndex((o) => o.value === value),
	);

	return (
		<Row label={label}>
			<div
				style={{
					position: "relative",
					display: "flex",
					padding: 2,
					borderRadius: 8,
					background: "rgba(0,0,0,0.06)",
				}}
			>
				{/* Sliding thumb */}
				<div
					style={{
						position: "absolute",
						top: 2,
						bottom: 2,
						left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
						width: `calc((100% - 4px) / ${n})`,
						borderRadius: 6,
						background: "rgba(255,255,255,0.9)",
						boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
						transition: "left 0.15s cubic-bezier(0.3,0.7,0.4,1)",
						pointerEvents: "none",
					}}
				/>
				{options.map((o) => (
					<button
						key={o.value}
						onClick={() => onChange(o.value)}
						style={{
							flex: 1,
							position: "relative",
							zIndex: 1,
							appearance: "none",
							border: "none",
							background: "transparent",
							color: "inherit",
							fontFamily: "inherit",
							fontSize: "inherit",
							fontWeight: 500,
							minHeight: 22,
							borderRadius: 6,
							cursor: "pointer",
							padding: "4px 6px",
							lineHeight: 1.2,
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis",
						}}
					>
						{o.label}
					</button>
				))}
			</div>
		</Row>
	);
}

function SelectControl({
	label,
	value,
	options,
	onChange,
}: {
	label: string;
	value: string;
	options: { value: string; label: string }[];
	onChange: (v: string) => void;
}) {
	return (
		<Row label={label}>
			<select
				value={value}
				onChange={(e) => onChange(e.target.value)}
				style={{
					appearance: "none",
					width: "100%",
					height: 26,
					padding: "0 22px 0 8px",
					border: "0.5px solid rgba(0,0,0,0.1)",
					borderRadius: 7,
					background: `rgba(255,255,255,0.6) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>") no-repeat right 8px center`,
					color: "inherit",
					fontFamily: "inherit",
					fontSize: "inherit",
					outline: "none",
					cursor: "pointer",
				}}
			>
				{options.map((o) => (
					<option key={o.value} value={o.value}>
						{o.label}
					</option>
				))}
			</select>
		</Row>
	);
}

function SliderControl({
	label,
	value,
	min,
	max,
	step,
	unit,
	onChange,
}: {
	label: string;
	value: number;
	min: number;
	max: number;
	step: number;
	unit: string;
	onChange: (v: number) => void;
}) {
	return (
		<Row label={label} value={`${value}${unit}`}>
			<input
				type='range'
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={(e) => onChange(Number(e.target.value))}
				style={{
					width: "100%",
					height: 4,
					margin: "6px 0",
					borderRadius: 999,
					background: "rgba(0,0,0,0.12)",
					outline: "none",
					appearance: "none",
					cursor: "pointer",
				}}
			/>
		</Row>
	);
}

function ToggleControl({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
			<span style={{ fontWeight: 500, color: "rgba(41,38,27,0.72)" }}>{label}</span>
			<button
				onClick={() => onChange(!value)}
				aria-checked={value}
				role='switch'
				style={{
					position: "relative",
					width: 32,
					height: 18,
					border: 0,
					borderRadius: 999,
					background: value ? "#34c759" : "rgba(0,0,0,0.15)",
					transition: "background 0.15s",
					cursor: "pointer",
					padding: 0,
					flexShrink: 0,
				}}
			>
				<span
					style={{
						position: "absolute",
						top: 2,
						left: 2,
						width: 14,
						height: 14,
						borderRadius: "50%",
						background: "#fff",
						boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
						transition: "transform 0.15s",
						transform: value ? "translateX(14px)" : "none",
					}}
				/>
			</button>
		</div>
	);
}
