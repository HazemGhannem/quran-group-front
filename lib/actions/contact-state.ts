/** Contact form state. Kept out of contact.ts because "use server" files may only export async functions. */
export type ContactStatus = "idle" | "success" | "error";

export type ContactField = "name" | "email" | "subject" | "message";

export interface ContactFormState {
  status: ContactStatus;
  message: string;
  /** One message per invalid field. */
  fieldErrors?: Partial<Record<ContactField, string>>;
  /** What the visitor typed, so it survives a failed submit. */
  values?: Partial<Record<ContactField, string>>;
}

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
};
