"use server";

// Only async functions may be exported from a "use server" module — the type
// and the initial value live in ./contact-state.
import type { ContactFormState } from "./contact-state";

/**
 * Handles the contact form submission.
 *
 * There is no mail backend wired up yet, so this validates the payload and
 * reports back. Replace the marked section with the real delivery call
 * (transactional email, CRM, ticketing) when that exists — the signature and
 * the client contract stay the same.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !subject || !message) {
    return { status: "error", message: "Please fill in every field." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (message.length < 10) {
    return {
      status: "error",
      message: "Please give us a little more detail (at least 10 characters).",
    };
  }

  // TODO: deliver the message (email / CRM / ticket) once a backend exists.

  return {
    status: "success",
    message: "Thanks — your message is with us. We reply within 24–48 hours.",
  };
}
