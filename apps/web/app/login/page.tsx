import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent login",
  description: "Secure parent login will be added with the authentication phase.",
};

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl text-brand-950">Parent login</h1>
      <p className="mt-4 leading-7 text-ink-700">
        Login, cookies, and role-based access are not built yet. This page is only a marker so
        the navigation works.
      </p>
    </div>
  );
}
