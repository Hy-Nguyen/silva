"use client";

import { ThemeProvider, useTheme } from "@/components/theme-context";
import { TweaksPanel } from "@/components/tweaks-panel";
import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { HoursContact } from "@/components/sections/hours-contact";
import { MenuSection } from "@/components/sections/menu-section";
import { Footer } from "@/components/sections/footer";
import { ARCHETYPES } from "@/config/archetypes";

function Site() {
	const { config, tokenVars } = useTheme();
	const data = ARCHETYPES[config.archetype];

	return (
		<div style={{ ...tokenVars, background: "var(--c-bg)", color: "var(--c-fg)", fontFamily: "var(--f-body)" }}>
			<Nav data={data} logoKind={config.logoKind} />
			<main>
				<Hero data={data} filled={config.filledImagery} />
				<About data={data} filled={config.filledImagery} />
				<Services data={data} filled={config.filledImagery} />
				{data.menu && (
					<MenuSection
						data={data}
						variant={config.menuVariant}
						filled={config.filledImagery}
						menuItemsPictures={config.menuItemsPictures}
					/>
				)}
				<Gallery data={data} filled={config.filledImagery} />
				<Testimonials data={data} filled={config.filledImagery} />
				<HoursContact data={data} />
			</main>
			<Footer data={data} logoKind={config.logoKind} />
			<TweaksPanel />
		</div>
	);
}

export function DemoApp() {
	return (
		<ThemeProvider>
			<Site />
		</ThemeProvider>
	);
}
