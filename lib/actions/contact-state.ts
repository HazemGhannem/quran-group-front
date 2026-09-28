/** Contact form state. Kept out of contact.ts because "use server" files may only export async functions. */
export type ContactStatus = "idle" | "success" | "error";

export interface ContactFormState {
  status: ContactStatus;
  message: string;
}

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
};
