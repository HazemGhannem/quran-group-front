/**
 * Shared shape + initial value for the contact form.
 *
 * Deliberately NOT in `contact.ts`: that file is a `"use server"` module, and
 * every export from one of those is compiled into a server-action reference —
 * including plain constants. Exporting `initialContactState` from there handed
 * the client a function instead of `{ status: "idle" }`, so `state.status` was
 * `undefined`, the `status !== "idle"` branch was always true, and the error
 * alert rendered on page load with no message.
 *
 * A `"use server"` file may only export async functions. Constants and types
 * belong in a normal module like this one.
 */
export type ContactStatus = "idle" | "success" | "error";

export interface ContactFormState {
  status: ContactStatus;
  message: string;
}

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
};
