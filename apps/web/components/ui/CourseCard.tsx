import Link from "next/link";
import type { CourseSummary } from "@/lib/courses";

type Props = {
  course: CourseSummary;
};

export function CourseCard({ course }: Props) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-brand-800/10 bg-cream-50 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">
        {course.level}
      </p>
      <h3 className="mt-3 font-serif text-2xl text-brand-900">{course.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-ink-700">{course.summary}</p>
      <p className="mt-4 text-xs text-ink-500">
        Duration and fees are set in the teacher dashboard — not fixed on this page.
      </p>
      <Link
        href={`/courses/${course.slug}`}
        className="mt-5 inline-flex text-sm font-semibold text-brand-800 underline-offset-4 hover:underline"
      >
        View course
      </Link>
    </article>
  );
}
