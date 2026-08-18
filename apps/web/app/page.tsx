import { redirect } from "next/navigation";
import { defaultLocale } from "@gwm/shared";

export default function IndexPage() {
  redirect(`/${defaultLocale}`);
}
