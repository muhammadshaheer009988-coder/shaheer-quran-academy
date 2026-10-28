export const SITE = {
  name: "Shaheer Quran Academy",
  shortName: "Hafiz Muhammad Shaheer",
  teacherName: "Hafiz Muhammad Shaheer",
  tagline: "Live online Quran classes for children",
  parentMessage:
    "A calm, parent-friendly place to enrol your child for live Quran learning — with clear courses, scheduled classes, and progress you can follow.",
  phone: "03312969666",
  whatsapp: "03312969666",
  email: "muhammadshaheer009988@gmail.com",
  timezone: "Asia/Karachi",
  classTimings: [
    {
      label: "Afternoon",
      start: "2:30 PM",
      end: "3:30 PM",
    },
    {
      label: "Night",
      start: "8:00 PM",
      end: "9:00 PM",
    },
  ],
  regionFocus: "Pakistan first, with room to welcome families abroad later",
} as const;

export function isPlaceholder(value: string) {
  return value.startsWith("ADD_YOUR_");
}

export function whatsappHref() {
  if (isPlaceholder(SITE.whatsapp)) {
    return "/contact";
  }

  const digits = SITE.whatsapp.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}
