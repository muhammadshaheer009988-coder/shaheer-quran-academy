"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { SITE } from "@/lib/site";
import { COURSES } from "@/lib/courses";

function formatDateInput(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getAge(dateOfBirth: string) {
  if (!dateOfBirth) return null;

  const today = new Date();
  const birthDate = new Date(`${dateOfBirth}T00:00:00`);

  let years = today.getFullYear() - birthDate.getFullYear();

  const birthdayNotReached =
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate());

  if (birthdayNotReached) years--;

  return years;
}

function getDateLimits() {
  const today = new Date();

  const latestDOB = new Date(today);
  latestDOB.setFullYear(latestDOB.getFullYear() - 5);

  const earliestDOB = new Date(today);
  earliestDOB.setFullYear(earliestDOB.getFullYear() - 40);

  return {
    min: formatDateInput(earliestDOB),
    max: formatDateInput(latestDOB),
  };
}

export default function RegisterPage() {
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [dateLimits, setDateLimits] = useState<{
    min: string;
    max: string;
  } | null>(null);
  const [course, setCourse] = useState(COURSES[0]?.slug ?? "");
  const [level, setLevel] = useState("");
  const [timing, setTiming] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setAdmissionDate(formatDateInput(new Date()));
    setDateLimits(getDateLimits());
  }, []);

  const age = getAge(dateOfBirth);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (age === null || age < 5 || age > 40) {
      window.alert(
        "Date of birth se age 5 se 40 years ke darmiyan honi chahiye."
      );
      return;
    }

    const selectedCourse = COURSES.find(
      (item) => item.slug === course
    );

    const message = [
      "Assalam-o-Alaikum! I want to enrol at Shaheer Quran Academy.",
      "",
      `Parent name: ${parentName}`,
      `WhatsApp/Phone: ${phone}`,
      `Student name: ${childName}`,
      `Date of birth: ${dateOfBirth}`,
      `Student age: ${age} years`,
      `Admission date: ${admissionDate}`,
      `Course: ${selectedCourse?.title ?? course}`,
      `Current Quran level: ${level || "Not specified"}`,
      `Preferred class timing: ${timing}`,
      `Additional notes: ${notes || "None"}`,
      "",
      "Please guide me about fees and admission confirmation.",
    ].join("\n");

    const whatsappNumber = SITE.whatsapp.replace(/[^\d]/g, "");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl text-brand-950">
        Enrol a child
      </h1>

      <p className="mt-4 leading-7 text-ink-700">
        Fill in the details below. After submitting, WhatsApp will open
        with your enrolment message ready to send to the teacher.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-2xl border border-brand-800/10 bg-white p-5 sm:p-8"
      >
        <div>
          <label htmlFor="parentName" className="mb-2 block font-medium">
            Parent or guardian name *
          </label>
          <input
            id="parentName"
            required
            value={parentName}
            onChange={(event) => setParentName(event.target.value)}
            className="w-full rounded-lg border border-brand-800/20 px-4 py-3"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block font-medium">
            WhatsApp / phone number *
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="w-full rounded-lg border border-brand-800/20 px-4 py-3"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="childName" className="mb-2 block font-medium">
            Student&apos;s name *
          </label>
          <input
            id="childName"
            required
            value={childName}
            onChange={(event) => setChildName(event.target.value)}
            className="w-full rounded-lg border border-brand-800/20 px-4 py-3"
            placeholder="Enter student's name"
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth" className="mb-2 block font-medium">
            Student&apos;s date of birth *
          </label>
          <input
            id="dateOfBirth"
            required
            type="date"
            min={dateLimits?.min ?? ""}
            max={dateLimits?.max ?? ""}
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
            className="w-full rounded-lg border border-brand-800/20 px-4 py-3"
          />
          <p className="mt-2 text-sm text-ink-600">
            Select the date of birth from the calendar. Only ages 5 to 40 are allowed.
          </p>
          {age !== null && (
            <p className="mt-2 font-medium text-brand-900">
              Calculated age: {age} years
            </p>
          )}
        </div>

        <div>
          <label htmlFor="admissionDate" className="mb-2 block font-medium">
            Admission date *
          </label>
          <input
            id="admissionDate"
            required
            type="date"
            value={admissionDate}
            onChange={(event) => setAdmissionDate(event.target.value)}
            className="w-full rounded-lg border border-brand-800/20 px-4 py-3"
          />
        </div>

        <div>
          <label htmlFor="course" className="mb-2 block font-medium">
            Select Quran course *
          </label>
          <select
            id="course"
            required
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            className="w-full rounded-lg border border-brand-800/20 px-4 py-3"
          >
            {COURSES.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="level" className="mb-2 block font-medium">
            Current Quran learning level
          </label>
          <select
            id="level"
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            className="w-full rounded-lg border border-brand-800/20 px-4 py-3"
          >
            <option value="">Select if known</option>
            <option value="Beginner">Beginner / Arabic letters</option>
            <option value="Qaida">Learning Qaida</option>
            <option value="Reading Quran">Reading Quran</option>
            <option value="Memorisation">Memorisation / Hifz</option>
            <option value="Revision">Needs revision</option>
          </select>
        </div>

        <div>
          <label htmlFor="timing" className="mb-2 block font-medium">
            Preferred class timing *
          </label>
          <select
            id="timing"
            required
            value={timing}
            onChange={(event) => setTiming(event.target.value)}
            className="w-full rounded-lg border border-brand-800/20 px-4 py-3"
          >
            <option value="">Select a timing</option>
            {SITE.classTimings.map((item) => (
              <option
                key={item.label}
                value={`${item.label}: ${item.start} - ${item.end}`}
              >
                {item.label}: {item.start} - {item.end}
              </option>
            ))}
          </select>
          <p className="mt-2 text-sm text-ink-600">
            All timings are in Pakistan time ({SITE.timezone}).
          </p>
        </div>

        <div>
          <label htmlFor="notes" className="mb-2 block font-medium">
            Additional details (optional)
          </label>
          <textarea
            id="notes"
            rows={4}
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            className="w-full rounded-lg border border-brand-800/20 px-4 py-3"
            placeholder="Tell the teacher anything else about the student's learning needs."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-brand-900 px-5 py-3 font-semibold text-white transition hover:bg-brand-800"
        >
          Continue to WhatsApp
        </button>

        <p className="text-sm leading-6 text-ink-600">
          Your message will be prepared in WhatsApp. Please review it and
          press Send to contact the teacher. Fees and admission will be
          confirmed directly with the teacher.
        </p>
      </form>
    </div>
  );
}