export default function FillerImage({ index }: { index: number }) {
	return (
		<div
			style={{
				borderRadius: "var(--r-md)",
				width: "100%",
				height: "100%",
				background: "var(--c-surface-2)",
				border: "1px dashed var(--c-border)",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: 6,
				color: "var(--c-muted)",
				backgroundImage:
					"repeating-linear-gradient(135deg, transparent, transparent 14px, color-mix(in srgb, var(--c-border), transparent 50%) 14px, color-mix(in srgb, var(--c-border), transparent 50%) 15px)",
			}}
		>
			<span
				style={{
					fontFamily: "var(--f-body)",
					fontSize: 11,
					fontWeight: 500,
					textTransform: "uppercase",
					letterSpacing: "0.06em",
					opacity: 0.6,
				}}
			>
				Image {index + 1}
			</span>
		</div>
	);
}
