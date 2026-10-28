import { ButtonLink } from "@/components/ui/ButtonLink";
import { CourseCard } from "@/components/ui/CourseCard";
import { COURSES } from "@/lib/courses";
import { SITE } from "@/lib/site";

const benefits = [
  {
    title: "Live classes",
    body: "Lessons happen with a teacher in a live video class, not as an unattended recording.",
  },
  {
    title: "Parent oversight",
    body: "A parent or guardian holds the account. Children’s details stay private, not on public pages.",
  },
  {
    title: "Clear next steps",
    body: "Enrolment, class times, and progress are recorded so families know what comes next.",
  },
  {
    title: "Child-paced teaching",
    body: "Classes are planned for children: short, calm, and matched to the course you choose.",
  },
];

const steps = [
  {
    n: "1",
    title: "Enrol",
    body: "A parent shares the child’s first name, age range, course, and preferred times.",
  },
  {
    n: "2",
    title: "Review",
    body: "The teacher reviews the request and confirms whether a place and time are available.",
  },
  {
    n: "3",
    title: "Schedule",
    body: "Approved families see class times and the private meeting link in their dashboard.",
  },
  {
    n: "4",
    title: "Learn",
    body: "The child joins live classes. Attendance and progress are written by the teacher.",
  },
];

const faqs = [
  {
    q: "Who can enrol?",
    a: "A parent or guardian enrols the child. The child does not need a separate login at this stage.",
  },
  {
    q: "How are classes held?",
    a: "Live online video classes. Meeting links are added by the teacher and shown only to authorised parents.",
  },
  {
    q: "What are the fees?",
    a: "Course fees are configured by the teacher and are not printed as a fixed public price on this page.",
  },
  {
    q: "Which timezone do you use?",
    a: `Classes are planned around ${SITE.timezone}. Families can share their own timezone when they enrol.`,
  },
  {
    q: "Do you publish student reviews or class numbers?",
    a: "Not unless they are real and provided later. This site does not use invented testimonials.",
  },
];

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-900/10 bg-hero-pattern">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
              Online Quran classes for children
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-brand-950 sm:text-5xl">
              Learn the Quran online with {SITE.teacherName}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink-700">{SITE.parentMessage}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/register">Enrol a child</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact the teacher
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-ink-600">{SITE.regionFocus}.</p>
          </div>
          <aside className="rounded-3xl border border-brand-800/10 bg-cream-50/80 p-8 shadow-sm">
            <p className="font-serif text-2xl text-brand-900">For parents</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-ink-700">
              <li>Choose Qaida, Nazra, Hifz, Tajweed, or revision.</li>
              <li>Share preferred class times when you enrol.</li>
              <li>Follow progress from a private parent dashboard (next phases).</li>
              <li>Children’s personal details are not shown publicly.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="courses-heading">
        <div className="max-w-2xl">
          <h2 id="courses-heading" className="font-serif text-3xl text-brand-950">
            Quran courses
          </h2>
          <p className="mt-3 text-ink-700">
            Each course will have its own page. Durations and fees stay editable for the teacher.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section className="bg-brand-900 text-cream-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-3xl">Why learn online here</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/5 p-5">
                <h3 className="font-semibold text-gold-300">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cream-100/85">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="process-heading">
        <h2 id="process-heading" className="font-serif text-3xl text-brand-950">
          How learning works
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="rounded-2xl border border-brand-800/10 bg-cream-50 p-5">
              <span className="font-serif text-3xl text-gold-700">{step.n}</span>
              <h3 className="mt-2 text-lg font-semibold text-brand-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-700">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-brand-900/10 bg-cream-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-brand-950">About the teacher</h2>
            <p className="mt-4 text-lg font-medium text-brand-800">{SITE.teacherName}</p>
            <p className="mt-3 leading-7 text-ink-700">
              {SITE.teacherName} teaches children online, with patience, clear recitation
              practice, and regular feedback for parents. Qualifications, years of experience,
              and certifications are left as editable fields so only real details are published.
            </p>
            <p className="mt-3 text-sm text-ink-600">
              Placeholder: teaching qualifications and experience to be added by the teacher.
            </p>
            <ButtonLink href="/about" variant="secondary" className="mt-6">
              Read the full profile
            </ButtonLink>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-brand-950">Class times</h2>
            <p className="mt-4 leading-7 text-ink-700">
              Default timezone: {SITE.timezone}.
            </p>

            <div className="mt-4 space-y-4">
              {SITE.classTimings.map((timing) => (
                <div
                  key={timing.label}
                  className="rounded-xl border border-brand-800/10 bg-cream-50 p-4"
                >
                  <h3 className="font-semibold text-brand-900">{timing.label}</h3>
                  <p className="mt-1 text-ink-700">
                    {timing.start} - {timing.end}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-3 text-sm text-ink-600">
              Meeting links are never shown on public pages.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="font-serif text-3xl text-brand-950">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-brand-900/10 border-y border-brand-900/10">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-semibold text-brand-900 marker:content-none">
                {item.q}
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}