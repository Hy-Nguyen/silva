// ┌─────────────────────────────────────────────────────────────────────────────┐
// │  SETUP CHECKLIST                                                             │
// │                                                                              │
// │  1. Pick the client's archetype and copy the matching STARTER_TEMPLATE      │
// │     from the bottom of this file into CLIENT_CONFIG.data.                   │
// │  2. Set meta.isDemoMode = true while building; flip to false before deploy. │
// │  3. Fill every ALL_CAPS placeholder in CLIENT_CONFIG.data and .site.        │
// │  4. Replace all image URLs (hero, about, gallery, avatar) with real assets. │
// │  5. Add, remove, or reword services and testimonials to match the client.   │
// │  6. Update hours to the client's actual schedule.                           │
// │  7. Update app/layout.tsx → metadata.title / description / favicon.         │
// │  8. Delete STARTER_TEMPLATES from this file before shipping.                │
// └─────────────────────────────────────────────────────────────────────────────┘

import type { Archetype, ArchetypeKey, ClientSiteConfig } from "@/config/design.config";

export const CLIENT_CONFIG: {
	meta: { isDemoMode: boolean };
	site: ClientSiteConfig;
	data: Archetype;
} = {
	meta: {
		// true  → /demo shows the archetype switcher (use while building/previewing)
		// false → /demo redirects to / and the TweaksPanel is hidden (use in production)
		isDemoMode: false,
	},

	site: {
		palette: "stone", // stone | ink | sage | fire | ocean | rose
		fontPair: "fraunces", // fraunces | instrument | bricolage | dmserif | geist
		radius: 1, // 0 = square  ·  1 = default  ·  2 = very rounded
		logoKind: "icon", // text | icon | image
		filledImagery: true, // true = real photos  ·  false = placeholder wireframes
		menuVariant: "tabs", // tabs | accordion  (only applies when menu is non-null)
		menuItemsPictures: false, // show per-item images in the menu
	},

	data: {
		name: "YOUR_BUSINESS_NAME",
		tagline: "YOUR_TAGLINE · YOUR_CITY, STATE",
		logoMark: "Scissors", // any Lucide icon name — browse at lucide.dev/icons

		hero: {
			eyebrow: "YOUR_EYEBROW_TEXT", // short ALL-CAPS line above the headline
			headline: "YOUR_HERO_HEADLINE", // 6–10 words, punchy
			sub: "YOUR_HERO_SUBHEADLINE", // 1–2 sentences expanding on the headline
			cta: "YOUR_CTA_BUTTON_TEXT", // primary button label
			ctaIcon: "Calendar", // Lucide icon name for the CTA button
		},

		about: {
			title: "YOUR_ABOUT_SECTION_TITLE", // 4–8 words
			body: "YOUR_ABOUT_BODY_PARAGRAPH", // 2–4 sentences about the business
			badges: [
				{ icon: "Award", text: "YOUR_BADGE_1" }, // e.g. "12 years in business"
				{ icon: "Shield", text: "YOUR_BADGE_2" }, // e.g. "Licensed & insured"
				{ icon: "Heart", text: "YOUR_BADGE_3" }, // e.g. "Locally owned"
			],
		},

		sectionHeadings: {
			services: "YOUR_SERVICES_HEADING", // h2 above the services grid
			servicesSub: "YOUR_SERVICES_SUBHEADING", // one sentence below it
			gallery: "YOUR_GALLERY_HEADING", // h2 above the photo grid
			testimonials: "YOUR_TESTIMONIALS_HEADING", // h2 above the review cards
			hours: "YOUR_HOURS_HEADING", // h2 in the hours column
			contact: "YOUR_CONTACT_HEADING", // h2 in the contact column
		},

		services: [
			{ icon: "Star", title: "YOUR_SERVICE_1", desc: "YOUR_SERVICE_1_DESC", price: "From $XX" },
			{ icon: "Star", title: "YOUR_SERVICE_2", desc: "YOUR_SERVICE_2_DESC", price: "From $XX" },
			{ icon: "Star", title: "YOUR_SERVICE_3", desc: "YOUR_SERVICE_3_DESC", price: "From $XX" },
		],

		galleryCaptions: [
			"YOUR_CAPTION_1",
			"YOUR_CAPTION_2",
			"YOUR_CAPTION_3",
			"YOUR_CAPTION_4",
			"YOUR_CAPTION_5",
			"YOUR_CAPTION_6",
		],

		testimonials: [
			{ quote: "YOUR_QUOTE_1", name: "YOUR_REVIEWER_1_NAME", meta: "YOUR_REVIEWER_1_META", rating: 5 },
			{ quote: "YOUR_QUOTE_2", name: "YOUR_REVIEWER_2_NAME", meta: "YOUR_REVIEWER_2_META", rating: 5 },
			{ quote: "YOUR_QUOTE_3", name: "YOUR_REVIEWER_3_NAME", meta: "YOUR_REVIEWER_3_META", rating: 5 },
		],

		hours: [
			["Monday", "YOUR_HOURS"],
			["Tuesday", "YOUR_HOURS"],
			["Wednesday", "YOUR_HOURS"],
			["Thursday", "YOUR_HOURS"],
			["Friday", "YOUR_HOURS"],
			["Saturday", "YOUR_HOURS"],
			["Sunday", "Closed"],
		],

		contact: {
			phone: "YOUR_PHONE_NUMBER",
			email: "YOUR_EMAIL_ADDRESS",
			address: "YOUR_STREET_ADDRESS · YOUR_CITY, STATE",
		},

		// Set to null if the client has no menu.
		// Set to an object if they do — see the taco starter template below for structure.
		menu: null,

		images: {
			hero: "YOUR_HERO_IMAGE_URL", // 1600px wide — full-bleed background
			about: "YOUR_ABOUT_IMAGE_URL", // portrait orientation, ~900px wide
			gallery: [
				"YOUR_GALLERY_1_URL", // 600px — rendered at aspect 4/5
				"YOUR_GALLERY_2_URL", // 600px — rendered at aspect 1/1
				"YOUR_GALLERY_3_URL", // 600px — rendered at aspect 1/1
				"YOUR_GALLERY_4_URL", // 600px — rendered at aspect 1/1
				"YOUR_GALLERY_5_URL", // 600px — rendered at aspect 4/5
				"YOUR_GALLERY_6_URL", // 600px — rendered at aspect 1/1
			],
			testimonialAvatar: "YOUR_AVATAR_URL", // 200×200px square
		},
	},
};

// ─── Starter templates ────────────────────────────────────────────────────────
// Copy the matching template into CLIENT_CONFIG.data above, then replace every
// ALL_CAPS placeholder with real content. Delete this section before shipping.
export const STARTER_TEMPLATES: Record<ArchetypeKey, Archetype> = {
	// ── Salon / wellness / studio ─────────────────────────────────────────────
	salon: {
		name: "YOUR_SALON_NAME",
		tagline: "Hair Studio · YOUR_CITY, STATE",
		logoMark: "Scissors",
		hero: {
			eyebrow: "BY APPOINTMENT",
			headline: "YOUR_HERO_HEADLINE",
			sub: "YOUR_HERO_SUBHEADLINE",
			cta: "Book a chair",
			ctaIcon: "Calendar",
		},
		about: {
			title: "YOUR_ABOUT_TITLE",
			body: "YOUR_ABOUT_PARAGRAPH",
			badges: [
				{ icon: "Award", text: "YOUR_YEARS years in business" },
				{ icon: "Shield", text: "Licensed & insured" },
				{ icon: "Heart", text: "Locally owned" },
			],
		},
		sectionHeadings: {
			services: "What we offer.",
			servicesSub: "Prices are starting points — we quote anything bigger before we begin.",
			gallery: "Recent work.",
			testimonials: "From guests who keep coming back.",
			hours: "This week.",
			contact: "Stop in or get in touch.",
		},
		services: [
			{ icon: "Scissors", title: "Cut & style", desc: "YOUR_CUT_DESC", price: "From $XX" },
			{ icon: "Sparkles", title: "Color", desc: "YOUR_COLOR_DESC", price: "From $XX" },
			{ icon: "Brush", title: "Highlights", desc: "YOUR_HIGHLIGHTS_DESC", price: "From $XX" },
			{ icon: "Droplet", title: "Treatment", desc: "YOUR_TREATMENT_DESC", price: "$XX" },
			{ icon: "Heart", title: "Bridal", desc: "YOUR_BRIDAL_DESC", price: "Quote" },
			{ icon: "User", title: "First visit", desc: "YOUR_FIRST_VISIT_DESC", price: "$XX" },
		],
		galleryCaptions: [
			"YOUR_CAPTION_1",
			"YOUR_CAPTION_2",
			"YOUR_CAPTION_3",
			"YOUR_CAPTION_4",
			"YOUR_CAPTION_5",
			"YOUR_CAPTION_6",
		],
		testimonials: [
			{ quote: "YOUR_QUOTE_1", name: "YOUR_CLIENT_1", meta: "Guest since YEAR", rating: 5 },
			{ quote: "YOUR_QUOTE_2", name: "YOUR_CLIENT_2", meta: "Guest since YEAR", rating: 5 },
			{ quote: "YOUR_QUOTE_3", name: "YOUR_CLIENT_3", meta: "Guest since YEAR", rating: 5 },
		],
		hours: [
			["Monday", "Closed"],
			["Tuesday", "10:00 — 6:00"],
			["Wednesday", "10:00 — 6:00"],
			["Thursday", "10:00 — 8:00"],
			["Friday", "9:00 — 6:00"],
			["Saturday", "9:00 — 4:00"],
			["Sunday", "Closed"],
		],
		contact: {
			phone: "YOUR_PHONE_NUMBER",
			email: "YOUR_EMAIL_ADDRESS",
			address: "YOUR_STREET_ADDRESS · YOUR_CITY, STATE",
		},
		menu: null,
		images: {
			hero: "YOUR_HERO_IMAGE_URL",
			about: "YOUR_ABOUT_IMAGE_URL",
			gallery: [
				"YOUR_GALLERY_1_URL",
				"YOUR_GALLERY_2_URL",
				"YOUR_GALLERY_3_URL",
				"YOUR_GALLERY_4_URL",
				"YOUR_GALLERY_5_URL",
				"YOUR_GALLERY_6_URL",
			],
			testimonialAvatar: "YOUR_AVATAR_URL",
		},
	},

	// ── Trades / home services ────────────────────────────────────────────────
	plumber: {
		name: "YOUR_COMPANY_NAME",
		tagline: "YOUR_TRADE · Since YOUR_YEAR",
		logoMark: "Wrench",
		hero: {
			eyebrow: "24/7 EMERGENCY SERVICE",
			headline: "YOUR_HERO_HEADLINE",
			sub: "YOUR_HERO_SUBHEADLINE",
			cta: "Call YOUR_PHONE_NUMBER",
			ctaIcon: "Phone",
		},
		about: {
			title: "YOUR_ABOUT_TITLE",
			body: "YOUR_ABOUT_PARAGRAPH",
			badges: [
				{ icon: "Award", text: "YOUR_YEARS years in business" },
				{ icon: "Shield", text: "Licensed · YOUR_LICENSE_NUMBER" },
				{ icon: "CheckCircle", text: "Bonded & insured" },
			],
		},
		sectionHeadings: {
			services: "What we do, and what we charge.",
			servicesSub: "Prices are starting points — we write a fixed quote before we touch anything.",
			gallery: "Recent work.",
			testimonials: "From people who keep calling us back.",
			hours: "This week.",
			contact: "Stop in or call us.",
		},
		services: [
			{ icon: "Droplet", title: "YOUR_SERVICE_1", desc: "YOUR_SERVICE_1_DESC", price: "From $XXX" },
			{ icon: "Wrench", title: "YOUR_SERVICE_2", desc: "YOUR_SERVICE_2_DESC", price: "From $XXX" },
			{ icon: "Flame", title: "YOUR_SERVICE_3", desc: "YOUR_SERVICE_3_DESC", price: "Quote" },
			{ icon: "Shield", title: "YOUR_SERVICE_4", desc: "YOUR_SERVICE_4_DESC", price: "Quote" },
			{ icon: "Sparkles", title: "YOUR_SERVICE_5", desc: "YOUR_SERVICE_5_DESC", price: "From $XXX" },
			{ icon: "Phone", title: "Emergency", desc: "YOUR_EMERGENCY_DESC", price: "$XXX + work" },
		],
		galleryCaptions: [
			"YOUR_CAPTION_1",
			"YOUR_CAPTION_2",
			"YOUR_CAPTION_3",
			"YOUR_CAPTION_4",
			"YOUR_CAPTION_5",
			"YOUR_CAPTION_6",
		],
		testimonials: [
			{ quote: "YOUR_QUOTE_1", name: "YOUR_CLIENT_1", meta: "YOUR_CITY, residential", rating: 5 },
			{ quote: "YOUR_QUOTE_2", name: "YOUR_CLIENT_2", meta: "YOUR_CITY, residential", rating: 5 },
			{ quote: "YOUR_QUOTE_3", name: "YOUR_CLIENT_3", meta: "Commercial, since YEAR", rating: 5 },
		],
		hours: [
			["Monday", "7:00 — 5:00"],
			["Tuesday", "7:00 — 5:00"],
			["Wednesday", "7:00 — 5:00"],
			["Thursday", "7:00 — 5:00"],
			["Friday", "7:00 — 5:00"],
			["Saturday", "8:00 — 2:00"],
			["Sunday", "Emergency only"],
		],
		contact: {
			phone: "YOUR_PHONE_NUMBER",
			email: "YOUR_EMAIL_ADDRESS",
			address: "YOUR_STREET_ADDRESS · YOUR_CITY, STATE",
		},
		menu: null,
		images: {
			hero: "YOUR_HERO_IMAGE_URL",
			about: "YOUR_ABOUT_IMAGE_URL",
			gallery: [
				"YOUR_GALLERY_1_URL",
				"YOUR_GALLERY_2_URL",
				"YOUR_GALLERY_3_URL",
				"YOUR_GALLERY_4_URL",
				"YOUR_GALLERY_5_URL",
				"YOUR_GALLERY_6_URL",
			],
			testimonialAvatar: "YOUR_AVATAR_URL",
		},
	},

	// ── Food truck / restaurant ───────────────────────────────────────────────
	taco: {
		name: "YOUR_BUSINESS_NAME",
		tagline: "YOUR_FOOD_TYPE · Since YOUR_YEAR",
		logoMark: "Truck",
		hero: {
			eyebrow: "YOUR_DAYS · YOUR_HOURS_EYEBROW", // e.g. "WED — SUN · 11AM TILL WE RUN OUT"
			headline: "YOUR_HERO_HEADLINE",
			sub: "YOUR_HERO_SUBHEADLINE",
			cta: "See the menu",
			ctaIcon: "ChevronDown",
		},
		about: {
			title: "YOUR_ABOUT_TITLE",
			body: "YOUR_ABOUT_PARAGRAPH",
			badges: [
				{ icon: "Flame", text: "YOUR_BADGE_1" }, // e.g. "Trompo-spit cooked"
				{ icon: "Heart", text: "Family recipe" },
				{ icon: "CheckCircle", text: "Health-graded A" },
			],
		},
		sectionHeadings: {
			services: "Where to find us.",
			servicesSub: "On a corner, at a brewery, or at your event — we keep it simple.",
			gallery: "From the truck.",
			testimonials: "What regulars say.",
			hours: "This week.",
			contact: "Find us or reach out.",
		},
		services: [
			{ icon: "Truck", title: "On the corner", desc: "YOUR_LOCATION_AND_HOURS", price: "" },
			{ icon: "Calendar", title: "Catering", desc: "YOUR_CATERING_DESC", price: "From $XX/guest" },
			{ icon: "Coffee", title: "Pop-ups", desc: "YOUR_POPUP_DESC", price: "" },
			{ icon: "Flame", title: "YOUR_SPECIALTY", desc: "YOUR_SPECIALTY_DESC", price: "Quote" },
		],
		galleryCaptions: [
			"YOUR_CAPTION_1",
			"YOUR_CAPTION_2",
			"YOUR_CAPTION_3",
			"YOUR_CAPTION_4",
			"YOUR_CAPTION_5",
			"YOUR_CAPTION_6",
		],
		testimonials: [
			{ quote: "YOUR_QUOTE_1", name: "YOUR_REVIEWER_1", meta: "Regular since YEAR", rating: 5 },
			{ quote: "YOUR_QUOTE_2", name: "YOUR_REVIEWER_2", meta: "YOUR_CONTEXT", rating: 5 },
			{ quote: "YOUR_QUOTE_3", name: "YOUR_REVIEWER_3", meta: "YOUR_LOCATION", rating: 5 },
		],
		hours: [
			["Monday", "Closed"],
			["Tuesday", "Closed"],
			["Wednesday", "YOUR_HOURS"],
			["Thursday", "YOUR_HOURS"],
			["Friday", "YOUR_HOURS"],
			["Saturday", "YOUR_HOURS"],
			["Sunday", "YOUR_HOURS"],
		],
		contact: {
			phone: "YOUR_PHONE_NUMBER",
			email: "YOUR_EMAIL_ADDRESS",
			address: "YOUR_CORNER_OR_ADDRESS",
		},
		menu: {
			sectionTitle: "YOUR_MENU_SECTION_TITLE", // e.g. "What's on today."
			categories: [
				{
					name: "YOUR_CATEGORY_1",
					items: [
						{ name: "YOUR_ITEM_1", desc: "YOUR_ITEM_1_DESC", price: "$X.XX" },
						{ name: "YOUR_ITEM_2", desc: "YOUR_ITEM_2_DESC", price: "$X.XX" },
					],
				},
				{
					name: "YOUR_CATEGORY_2",
					items: [
						{ name: "YOUR_ITEM_3", desc: "YOUR_ITEM_3_DESC", price: "$XX" },
						{ name: "YOUR_ITEM_4", desc: "YOUR_ITEM_4_DESC", price: "$XX" },
					],
				},
			],
		},
		images: {
			hero: "YOUR_HERO_IMAGE_URL",
			about: "YOUR_ABOUT_IMAGE_URL",
			gallery: [
				"YOUR_GALLERY_1_URL",
				"YOUR_GALLERY_2_URL",
				"YOUR_GALLERY_3_URL",
				"YOUR_GALLERY_4_URL",
				"YOUR_GALLERY_5_URL",
				"YOUR_GALLERY_6_URL",
			],
			testimonialAvatar: "YOUR_AVATAR_URL",
		},
	},
};
