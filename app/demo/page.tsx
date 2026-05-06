import { redirect } from "next/navigation";
import { CLIENT_CONFIG } from "@/config/client.config";
import { DemoApp } from "./DemoApp";

export default function DemoPage() {
	if (!CLIENT_CONFIG.meta.isDemoMode) {
		redirect("/");
	}
	return <DemoApp />;
}
