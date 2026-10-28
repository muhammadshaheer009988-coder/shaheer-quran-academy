import type { Metadata } from "next";
import { SITE, isPlaceholder } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.teacherName} about online Quran classes for children.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl text-brand-950">Contact</h1>
      <p className="mt-4 leading-7 text-ink-700">
        Teacher: {SITE.teacherName}. Phone, WhatsApp, and email below are placeholders until you
        add your real details.
      </p>
      <ul className="mt-8 space-y-3 text-ink-800">
        <li>
          <strong>Phone:</strong> {SITE.phone}
        </li>
        <li>
          <strong>WhatsApp:</strong> {SITE.whatsapp}
        </li>
        <li>
          <strong>Email:</strong> {SITE.email}
        </li>
      </ul>
      {isPlaceholder(SITE.whatsapp) ? (
        <p className="mt-6 text-sm text-ink-600">
          WhatsApp chat will use an international number (for example 92…) after you provide it.
          Do not put that number in this chat if you prefer to keep it only in the project files.
        </p>
      ) : null}
      <p className="mt-8 rounded-xl border border-gold-700/30 bg-cream-100 px-4 py-3 text-sm text-ink-700">
        The contact form will be connected to the backend in a later phase. It will not pretend
        to send messages until that is working.
      </p>
    </div>
  );
}
