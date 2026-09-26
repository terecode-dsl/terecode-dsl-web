import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

// The locale proxy redirects "/" to the default locale before this renders;
// this exists so Next's root layout has a matching root page.
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
