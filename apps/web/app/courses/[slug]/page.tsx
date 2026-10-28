
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { COURSES } from "@/lib/courses";

export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((item) => item.slug === slug);

  if (!course) {
    return { title: "Course" };
  }

  return {
    title: course.title,
    description: course.summary,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = COURSES.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-700">
        {course.level}
      </p>

      <h1 className="mt-3 font-serif text-4xl text-brand-950">
        {course.title}
      </h1>

      <p className="mt-5 leading-8 text-ink-700">{course.summary}</p>

      <dl className="mt-10 space-y-6">
        <div>
          <dt className="font-semibold text-brand-900">
            Intended student level
          </dt>
          <dd className="mt-1 text-ink-700">
            {course.level}. The teacher confirms fit after enrolment.
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-brand-900">
            Learning objectives
          </dt>
          <dd className="mt-1 text-ink-700">
            Live practice with the teacher, with progress notes written after
            class. Detailed objectives will be editable in the admin dashboard.
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-brand-900">
            Suggested duration
          </dt>
          <dd className="mt-1 text-ink-700">
            Configurable by the teacher — not hardcoded here.
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-brand-900">Class format</dt>
          <dd className="mt-1 text-ink-700">
            Live online class. Meeting links stay private.
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-brand-900">Fee</dt>
          <dd className="mt-1 text-ink-700">
            Set in the admin dashboard. Ask during enrolment or on the contact
            page.
          </dd>
        </div>
      </dl>

      <ButtonLink href="/register" className="mt-10">
        Enrol in this course
      </ButtonLink>
    </article>
  );
}
