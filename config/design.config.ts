// ─── Types ────────────────────────────────────────────────────────────────────
export type ArchetypeKey = "salon" | "plumber" | "taco";
export type PaletteKey = "stone" | "ink" | "sage" | "fire" | "ocean" | "rose";
export type FontPairKey = "fraunces" | "instrument" | "bricolage" | "dmserif" | "geist";
export type LogoKind = "text" | "icon" | "image";
export type MenuVariant = "tabs" | "accordion";

export interface Palette {
	name: string;
	desc: string;
	bg: string;
	surface: string;
	surface2: string;
	fg: string;
	muted: string;
	border: string;
	primary: string;
	primaryFg: string;
	secondary: string;
	accent: string;
	accentFg: string;
}

export interface FontPair {
	display: string;
	body: string;
	googleHref: string;
}

export interface ServiceItem {
	icon: string;
	title: string;
	desc: string;
	price: string;
}

export interface MenuItem {
	name: string;
	desc: string;
	price: string;
	image?: string;
}

export interface MenuCategory {
	name: string;
	items: MenuItem[];
}

export interface Testimonial {
	quote: string;
	name: string;
	meta: string;
	rating: number;
}

export interface Archetype {
	name: string;
	tagline: string;
	logoMark: string;
	hero: {
		eyebrow: string;
		headline: string;
		sub: string;
		cta: string;
		ctaIcon: string;
	};
	about: {
		title: string;
		body: string;
		badges: { icon: string; text: string }[];
	};
	sectionHeadings: {
		services: string;
		servicesSub: string;
		gallery: string;
		testimonials: string;
		hours: string;
		contact: string;
	};
	services: ServiceItem[];
	galleryCaptions: string[];
	testimonials: Testimonial[];
	hours: [string, string][];
	contact: { phone: string; email: string; address: string };
	menu: { sectionTitle: string; categories: MenuCategory[] } | null;
	images: {
		hero: string;
		about: string;
		gallery: string[];
		testimonialAvatar: string;
	};
}

export interface SiteConfig {
	archetype: ArchetypeKey;
	palette: PaletteKey;
	fontPair: FontPairKey;
	radius: number;
	logoKind: LogoKind;
	filledImagery: boolean;
	menuVariant: MenuVariant;
	menuItemsPictures: boolean;
}

// Design settings for a client deployment — no archetype switcher needed.
export type ClientSiteConfig = Omit<SiteConfig, "archetype">;

// ─── Palettes ─────────────────────────────────────────────────────────────────
export const PALETTES: Record<PaletteKey, Palette> = {
	stone: {
		name: "Stone",
		desc: "Neutral default · warm off-white & graphite",
		bg: "#f7f5f1",
		surface: "#fdfcfa",
		surface2: "#efece5",
		fg: "#1f1d1a",
		muted: "#6b665d",
		border: "#e3ded3",
		primary: "#2a2622",
		primaryFg: "#fdfcfa",
		secondary: "#7a7368",
		accent: "#b8804b",
		accentFg: "#fff",
	},
	ink: {
		name: "Ink",
		desc: "Crisp paper & confident black",
		bg: "#fafaf8",
		surface: "#ffffff",
		surface2: "#f0efeb",
		fg: "#0d0d0c",
		muted: "#5e5d58",
		border: "#e1dfd8",
		primary: "#0d0d0c",
		primaryFg: "#fafaf8",
		secondary: "#5e5d58",
		accent: "#c8a464",
		accentFg: "#0d0d0c",
	},
	sage: {
		name: "Sage",
		desc: "Soft moss · salon, wellness, studio",
		bg: "#f5f3ed",
		surface: "#fcfbf7",
		surface2: "#e8e6dc",
		fg: "#222a23",
		muted: "#5b665b",
		border: "#d8d6c9",
		primary: "#3d5142",
		primaryFg: "#fcfbf7",
		secondary: "#7a8a76",
		accent: "#c69552",
		accentFg: "#fff",
	},
	fire: {
		name: "Fire",
		desc: "Saturated · taco, bbq, streetwear",
		bg: "#fbf6f0",
		surface: "#ffffff",
		surface2: "#f4ece1",
		fg: "#1a1310",
		muted: "#76665b",
		border: "#ead9c5",
		primary: "#c6371b",
		primaryFg: "#fff",
		secondary: "#3a2c25",
		accent: "#f0b13d",
		accentFg: "#1a1310",
	},
	ocean: {
		name: "Ocean",
		desc: "Calm blue · medical, financial, technical",
		bg: "#f4f7fa",
		surface: "#ffffff",
		surface2: "#e8edf3",
		fg: "#0e1a26",
		muted: "#566679",
		border: "#d3dbe5",
		primary: "#1d4f7a",
		primaryFg: "#ffffff",
		secondary: "#5a7894",
		accent: "#dc8a3a",
		accentFg: "#fff",
	},
	rose: {
		name: "Rose",
		desc: "Quiet warmth · salon, boutique, florist",
		bg: "#faf5f3",
		surface: "#ffffff",
		surface2: "#f3e9e5",
		fg: "#2a1c1a",
		muted: "#806c66",
		border: "#e5d4cd",
		primary: "#a04a48",
		primaryFg: "#fff",
		secondary: "#82605c",
		accent: "#c4965d",
		accentFg: "#fff",
	},
};

// ─── Font pairs ───────────────────────────────────────────────────────────────
export const FONT_PAIRS: Record<FontPairKey, FontPair> = {
	fraunces: {
		display: '"Fraunces", Georgia, serif',
		body: '"Inter", system-ui, sans-serif',
		googleHref:
			"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap",
	},
	instrument: {
		display: '"Instrument Serif", Georgia, serif',
		body: '"DM Sans", system-ui, sans-serif',
		googleHref:
			"https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap",
	},
	bricolage: {
		display: '"Bricolage Grotesque", system-ui, sans-serif',
		body: '"IBM Plex Sans", system-ui, sans-serif',
		googleHref:
			"https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
	},
	dmserif: {
		display: '"DM Serif Display", Georgia, serif',
		body: '"DM Sans", system-ui, sans-serif',
		googleHref:
			"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap",
	},
	geist: {
		display: "system-ui, sans-serif",
		body: "system-ui, sans-serif",
		googleHref: "",
	},
};

// ─── Token helpers ────────────────────────────────────────────────────────────
export function getTokenVars(config: ClientSiteConfig): Record<string, string> {
	const p = PALETTES[config.palette];
	const f = FONT_PAIRS[config.fontPair];
	const r = config.radius;
	return {
		"--c-bg": p.bg,
		"--c-surface": p.surface,
		"--c-surface-2": p.surface2,
		"--c-fg": p.fg,
		"--c-muted": p.muted,
		"--c-border": p.border,
		"--c-primary": p.primary,
		"--c-primary-fg": p.primaryFg,
		"--c-secondary": p.secondary,
		"--c-accent": p.accent,
		"--c-accent-fg": p.accentFg,
		"--r-sm": `${4 * r}px`,
		"--r-md": `${8 * r}px`,
		"--r-lg": `${14 * r}px`,
		"--r-pill": "999px",
		"--f-display": f.display,
		"--f-body": f.body,
		"--shadow-sm": "0 1px 2px rgba(20,18,15,0.04), 0 1px 3px rgba(20,18,15,0.06)",
		"--shadow-md": "0 4px 12px rgba(20,18,15,0.08), 0 12px 28px rgba(20,18,15,0.06)",
	};
}
