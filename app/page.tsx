"use client";

import { useEffect } from "react";
import { FONT_PAIRS, getTokenVars } from "@/config/design.config";
import { CLIENT_CONFIG } from "@/config/client.config";
import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { HoursContact } from "@/components/sections/hours-contact";
import { MenuSection } from "@/components/sections/menu-section";
import { Footer } from "@/components/sections/footer";

const tokenVars = getTokenVars(CLIENT_CONFIG.site);

export default function Page() {
	useEffect(() => {
		const href = FONT_PAIRS[CLIENT_CONFIG.site.fontPair].googleHref;
		if (!href) return;
		const id = "client-gfonts";
		let link = document.getElementById(id) as HTMLLinkElement | null;
		if (!link) {
			link = document.createElement("link");
			link.id = id;
			link.rel = "stylesheet";
			document.head.appendChild(link);
		}
		if (link.href !== href) link.href = href;
	}, []);

	const { data, site } = CLIENT_CONFIG;

	return (
		<div style={{ ...tokenVars, background: "var(--c-bg)", color: "var(--c-fg)", fontFamily: "var(--f-body)" }}>
			<Nav data={data} logoKind={site.logoKind} />
			<main>
				<Hero data={data} filled={site.filledImagery} />
				<Gallery data={data} filled={site.filledImagery} />
				<Services data={data} />
				{/* {data.menu && (
					<MenuSection
						data={data}
						variant={site.menuVariant}
						filled={site.filledImagery}
						menuItemsPictures={site.menuItemsPictures}
					/>
				)} */}
				<About data={data} filled={site.filledImagery} />
				<Testimonials data={data} filled={site.filledImagery} />
				<HoursContact data={data} />
			</main>
			<Footer data={data} logoKind={site.logoKind} />
		</div>
	);
}
