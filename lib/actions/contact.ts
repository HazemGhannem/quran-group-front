"use server";

// Types and initial state live in ./contact-state.
import type { ContactField, ContactFormState } from "./contact-state";

const MAX_MESSAGE = 5000;

/** Validates the contact form. TODO: send the message once a mail backend exists. */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const fieldErrors: Partial<Record<ContactField, string>> = {};

  if (!values.name) fieldErrors.name = "Please enter your full name.";

  if (!values.email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    fieldErrors.email = "Please enter a valid email address, like name@example.com.";
  }

  if (!values.subject) fieldErrors.subject = "Please add a subject.";

  if (!values.message) {
    fieldErrors.message = "Please write your message.";
  } else if (values.message.length < 10) {
    fieldErrors.message = "Please give us a little more detail (at least 10 characters).";
  } else if (values.message.length > MAX_MESSAGE) {
    fieldErrors.message = `Please keep your message under ${MAX_MESSAGE} characters.`;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  // TODO: deliver the message (email / CRM / ticket) once a backend exists.

  return {
    status: "success",
    message:
      "Thanks, your message is with us. We will try our best to get back to you within a couple of days.",
  };
}
