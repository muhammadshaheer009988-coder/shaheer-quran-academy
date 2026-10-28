import Link from "next/link";
import { SITE, isPlaceholder } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-900/10 bg-brand-950 text-cream-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{SITE.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-cream-200/80">
            Live online Quran classes for children, taught by {SITE.teacherName}.{" "}
            {SITE.regionFocus}.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-400">
            Pages
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/courses" className="hover:underline">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About the teacher
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:underline">
                Enrol a child
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-400">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream-100/90">
            <li>Teacher: {SITE.teacherName}</li>
            <li>Phone: {isPlaceholder(SITE.phone) ? "To be added" : SITE.phone}</li>
            <li>
              WhatsApp: {isPlaceholder(SITE.whatsapp) ? "To be added" : SITE.whatsapp}
            </li>
            <li>Email: {isPlaceholder(SITE.email) ? "To be added" : SITE.email}</li>
            <li>Timezone: {SITE.timezone}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-cream-200/70">
        © {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
