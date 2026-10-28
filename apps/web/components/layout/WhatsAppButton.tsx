import { whatsappHref, isPlaceholder, SITE } from "@/lib/site";

export function WhatsAppButton() {
  const href = whatsappHref();
  const pending = isPlaceholder(SITE.whatsapp);

  return (
    <a
      href={href}
      className="fixed right-4 bottom-4 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#128C7E] px-4 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
      aria-label={
        pending
          ? "WhatsApp number not added yet. Open the contact page."
          : "Chat on WhatsApp"
      }
      {...(pending ? {} : { target: "_blank", rel: "noopener noreferrer" })}
    >
      <span aria-hidden>💬</span>
      WhatsApp
    </a>
  );
}
