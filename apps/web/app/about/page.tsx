import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the teacher",
  description: `Meet ${SITE.teacherName}, teacher at ${SITE.name}. Qualifications and experience are published only when provided.`,
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-700">
        Teacher profile
      </p>
      <h1 className="mt-3 font-serif text-4xl text-brand-950">{SITE.teacherName}</h1>
      <p className="mt-6 leading-8 text-ink-700">
        {SITE.teacherName} teaches the Quran online to children, with a calm pace, clear
        recitation practice, and regular notes for parents. The aim is a safe, parent-friendly
        classroom — not a crowded or noisy experience.
      </p>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-brand-900">Teaching philosophy</h2>
        <p className="mt-3 leading-7 text-ink-700">
          Children learn best with short live lessons, kind correction, and revision. Progress is
          recorded by the teacher. This site will not claim that a child has “mastered” a lesson
          unless the teacher has written that assessment.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-brand-900">Courses offered</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-700">
          <li>Noorani Qaida</li>
          <li>Nazra Quran</li>
          <li>Hifz-ul-Quran</li>
          <li>Basic Tajweed</li>
          <li>Quran revision</li>
          <li>Islamic learning for children, where appropriate</li>
        </ul>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-brand-800/10 bg-cream-50 p-5">
          <h2 className="font-semibold text-brand-900">Languages</h2>
          <p className="mt-2 text-sm text-ink-600">Placeholder: add languages you teach in.</p>
        </div>
        <div className="rounded-2xl border border-brand-800/10 bg-cream-50 p-5">
          <h2 className="font-semibold text-brand-900">Availability</h2>
          <p className="mt-2 text-sm text-ink-600">
            Placeholder: weekly hours. Timezone {SITE.timezone}.
          </p>
        </div>
        <div className="rounded-2xl border border-brand-800/10 bg-cream-50 p-5 sm:col-span-2">
          <h2 className="font-semibold text-brand-900">Qualifications and experience</h2>
          <p className="mt-2 text-sm text-ink-600">
            Placeholder: add your real qualifications here later. Nothing invented is shown.
          </p>
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/register">Enrol a child</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact
        </ButtonLink>
      </div>
    </article>
  );
}
