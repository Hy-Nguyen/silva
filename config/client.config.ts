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
		palette: "ocean", // stone | ink | sage | fire | ocean | rose
		fontPair: "fraunces", // fraunces | instrument | bricolage | dmserif | geist
		radius: 1, // 0 = square  ·  1 = default  ·  2 = very rounded
		logoKind: "image", // text | icon | image
		filledImagery: true, // true = real photos  ·  false = placeholder wireframes
		menuVariant: "tabs", // tabs | accordion  (only applies when menu is non-null)
		menuItemsPictures: false, // show per-item images in the menu
	},

	data: {
		name: "Mariscos Silva",
		tagline: "Fresh Daily · Phoenix, AZ",
		logoMark: "Shrimp", // any Lucide icon name — browse at lucide.dev/icons
		logoImageUrl:
			"https://scontent-phx1-1.cdninstagram.com/v/t51.82787-19/657595279_17942701569159220_2504081701899808913_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDI2LmMyIn0&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2gGYqrFo3D1oR9uCs2nUrOHPxCwM8v_LRMRStxG63eGYWI_b5vkRAXO8BUVCgOCO7ps&_nc_ohc=RoJcGfyxKncQ7kNvwHL1jKt&_nc_gid=rUSis3nE1-MDPkb_o1r5fQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af5MjlhmpYZglx-7XJvnAri589xLqG7h0CZW7PjDZprDqA&oe=6A017C95&_nc_sid=7a9f4b",

		hero: {
			eyebrow: "Fresh Seafood Daily",
			headline: "Bold. Fresh. Straight From the Sea.",
			sub: "Coastal Mexican mariscos crafted daily with the freshest ingredients. Find us around Phoenix and taste what the ocean tastes like.",
			cta: "See the Menu",
			ctaIcon: "Menu",
		},

		about: {
			title: "Bringing the Coast to Phoenix", // 4–8 words
			body: "Mariscos Silva is a family-run seafood trailer serving up bold, authentic Mexican coastal flavors right here in the valley. Inspired by the rich culinary traditions of Sinaloa, every dish we make — from our zesty aguachile to our hearty caldo de camaron — is crafted with fresh ingredients, real technique, and a whole lot of love. We started this to share the food we grew up eating, and every plate that leaves our window is a little piece of home. Whether you're a longtime fan of mariscos or trying it for the first time, we're here to make it memorable. Come hungry, leave happy.", // 2–4 sentences about the business
			badges: [
				{ icon: "Party", text: "Catering Available" }, // e.g. "12 years in business"
				{ icon: "Heart", text: "Family Recipe" }, // e.g. "Licensed & insured"
				{ icon: "Check", text: "Health Graded A" }, // e.g. "Locally owned"
			],
		},

		sectionHeadings: {
			services: "Where to find us.",
			servicesSub: "On the corner or at your event — we keep it simple.",
			gallery: "From the truck.",
			testimonials: "What regulars say.",
			hours: "This week.",
			contact: "Find us or reach out.",
		},
		services: [
			{
				icon: "Truck",
				title: "On the corner",
				desc: "Find us at 2732 W Glendale Ave Friday to Sunday from 12 PM to 6 PM",
				price: "",
			},
			{
				icon: "Calendar",
				title: "Catering",
				desc: "Contact us for private events and corporate gatherings",
				price: "From $25/guest",
			},
			// { icon: "Coffee", title: "Pop-ups", desc: "YOUR_POPUP_DESC", price: "" },
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
			["Monday - Thursday", "Closed"],
			["Friday - Sunday", "12 PM - 6 PM"],
		],

		contact: {
			phone: "602-423-9567",
			email: "YOUR_EMAIL_ADDRESS",
			address: "2732 W Glendale Ave, Phoenix AZ 85051",
		},

		// Set to null if the client has no menu.
		// Set to an object if they do — see the taco starter template below for structure.
		menu: {
			sectionTitle: "Menu",
			categories: [
				{
					name: "Tacos",
					items: [
						{
							name: "Tacos de Governador",
							desc: "Sinaloan-style tacos filled with sautéed shrimp, onions, garlic, and poblano peppers, loaded with melted cheese inside a crispy griddled tortilla.",
							price: "$20",
						},
						{
							name: "Tacos de Camaron (Hecho a la Plancha)",
							desc: "Juicy shrimp cooked on a flat-top griddle, seasoned simply and served in warm tortillas with fresh toppings.",
							price: "$20",
						},
						{
							name: "Tacos de Pescado",
							desc: "Tender, seasoned white fish nestled in soft tortillas, topped with crisp cabbage, crema, and a squeeze of lime.",
							price: "$20",
						},
					],
				},
				{
					name: "Cocteles & Caldos",
					items: [
						{
							name: "Coctel de Camaron y Pulpo",
							desc: "A refreshing chilled cocktail combining plump shrimp and tender octopus in a zesty tomato-citrus broth with cucumber, onion, and avocado.",
							price: "$20",
						},
						{
							name: "Coctel de Camaron (Mediano)",
							desc: "A classic medium-sized shrimp cocktail served in a tangy tomato and lime base, garnished with fresh vegetables.",
							price: "$15",
						},
						{
							name: "Pasta de Camaron",
							desc: "Hearty pasta tossed with seasoned shrimp in a rich, savory sauce — a satisfying surf-and-comfort combo.",
							price: "$20",
						},
						{
							name: "Caldo de Camaron Mixto",
							desc: "A bold, deeply flavored shrimp broth loaded with a mix of seafood, vegetables, and spices — true Mexican coastal comfort food.",
							price: "$25",
						},
						{
							name: "Platos de Tilapia con Camaron",
							desc: "A generous plate pairing grilled tilapia with seasoned shrimp, served with rice, beans, and fresh accompaniments.",
							price: "$22",
						},
					],
				},
				{
					name: "Especialidades",
					items: [
						{
							name: "Aguachile Verde",
							desc: "Fresh shrimp cured in a vibrant green chile and lime marinade, served with cucumber and red onion — bright, spicy, and bold.",
							price: "$22",
						},
						{
							name: "Ceviche Mediano",
							desc: "A medium portion of tender seafood marinated in lime juice with tomato, cilantro, onion, and jalapeño for a fresh, tangy bite.",
							price: "$18",
						},
						{
							name: "Ceviche Grande",
							desc: "The full-size version of our classic ceviche — loaded with citrus-cured seafood, crisp vegetables, and bold seasoning.",
							price: "$22",
						},
						{
							name: "Campechana",
							desc: "A mixed seafood cocktail layering shrimp, octopus, and other ocean treasures in a rich, spiced tomato-lime sauce.",
							price: "$25",
						},
						{
							name: "Botana Mixta",
							desc: "A shareable seafood snack platter featuring a rotating mix of the kitchen's best — perfect for the table.",
							price: "$30",
						},
						{
							name: "Charola Mixta",
							desc: "An overflowing tray of mixed seafood specialties — ideal for groups, celebrations, or anyone who wants it all.",
							price: "$80, $100+",
						},
					],
				},
				{
					name: "Bebidas",
					items: [
						{
							name: "Soda de Botella",
							desc: "Chilled bottled soda.",
							price: "$4",
						},
						{
							name: "Soda de Lata",
							desc: "Ice-cold canned soda.",
							price: "$2",
						},
						{
							name: "Agua / Water",
							desc: "Refreshing bottled water.",
							price: "$1",
						},
					],
				},
			],
		},

		images: {
			hero: "https://scontent-phx1-1.cdninstagram.com/v/t51.82787-15/542294066_17918007468159220_6852400315291571176_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzcxNjYwMTg4ODkyNzU3NjA0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IlNUT1JZLnhwaWRzLjEyOTAuc2RyLnJlZ3VsYXJfcGhvdG8uQzMifQ%3D%3D&_nc_ohc=0s6WHMlFg7sQ7kNvwE1cSBQ&_nc_oc=AdqGIQdcxJ_IL5R6qWqLWEl64Qwr_2tRbJjk7jQ3RSN7gWEYfFRivaLrUuRA2oPnUZE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_gid=PLgyxSlpgFfK4MaGdV-GDA&_nc_ss=7a22e&oh=00_Af4TAHrp202ZYrofblBuiT3V3xl0C40PK3VZUlYVvTmIMQ&oe=6A0184F1", // 1600px wide — full-bleed background
			about: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5", // portrait orientation, ~900px wide
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
