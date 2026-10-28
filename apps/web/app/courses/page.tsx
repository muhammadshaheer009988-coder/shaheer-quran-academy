import type { Metadata } from "next";
import { CourseCard } from "@/components/ui/CourseCard";
import { COURSES } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Quran courses",
  description:
    "Noorani Qaida, Nazra Quran, Hifz-ul-Quran, Tajweed, revision, and Islamic learning for children.",
};

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl text-brand-950">Quran courses</h1>
      <p className="mt-4 max-w-2xl leading-7 text-ink-700">
        Choose a course that matches your child’s current level. Full lesson plans, fees, and
        suggested duration will be configurable from the admin dashboard.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
