"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, CheckCircle2, CircleAlert } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  initialContactState,
  type ContactField,
  type ContactFormState,
} from "@/lib/actions/contact-state";
import { submitContactForm } from "@/lib/actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="default" size="lg" type="submit" disabled={pending}>
      {pending ? "Sending…" : "Send Message"}
      <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
    </Button>
  );
}

function FieldError({
  state,
  field,
}: {
  state: ContactFormState;
  field: ContactField;
}) {
  const error = state.fieldErrors?.[field];
  if (!error) return null;
  return (
    <p id={`${field}-error`} className="text-sm text-destructive">
      {error}
    </p>
  );
}

function fieldProps(state: ContactFormState, field: ContactField) {
  const invalid = Boolean(state.fieldErrors?.[field]);
  return {
    defaultValue: state.values?.[field] ?? "",
    "aria-invalid": invalid || undefined,
    "aria-describedby": invalid ? `${field}-error` : undefined,
    className: invalid ? "border-destructive!" : undefined,
  };
}

export default function ContactForm() {
  const [state, formAction] = useActionState(
    submitContactForm,
    initialContactState
  );
  return (
    <div className="p-6 sm:p-10 lg:p-12">
      <div className="max-w-xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-gold-ink">
          Send us a message
        </span>

        <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
          How can we help?
        </h2>

        <p className="mt-3 text-muted-foreground">
          Fill out the form below and our team will get back to you as soon as
          possible.
        </p>

        {/* Posts to a Server Action. */}
        <form
          key={JSON.stringify(state)}
          action={formAction}
          noValidate
          className="mt-8 space-y-5"
        >
          {/* Name + Email */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>

              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                required
                {...fieldProps(state, "name")}
              />
              <FieldError state={state} field="name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                autoComplete="email"
                required
                {...fieldProps(state, "email")}
              />
              <FieldError state={state} field="email" />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>

            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="How can we help?"
              required
              {...fieldProps(state, "subject")}
            />
            <FieldError state={state} field="subject" />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Write your message here..."
              required
              defaultValue={state.values?.message ?? ""}
              aria-invalid={Boolean(state.fieldErrors?.message) || undefined}
              aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
              className={`${state.fieldErrors?.message ? "border-destructive! " : ""}flex w-full resize-none rounded-md border border-input bg-background px-3 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
            />
            <FieldError state={state} field="message" />
          </div>

          <SubmitButton />

          {state.status !== "idle" && (
            <p
              role="status"
              aria-live="polite"
              className={`flex items-center gap-2 text-sm ${
                state.status === "success" ? "text-success" : "text-destructive"
              }`}
            >
              {state.status === "success" ? (
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0" />
              ) : (
                <CircleAlert aria-hidden="true" className="h-4 w-4 shrink-0" />
              )}
              {state.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
