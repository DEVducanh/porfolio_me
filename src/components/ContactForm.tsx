"use client";

import type { FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const company = String(formData.get("company") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany / role: ${company}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span><Send size={14} /> Send a quick inquiry</span><small>Contact by email</small></div>
      <label htmlFor="inquiry-name">Your name / company</label>
      <input id="inquiry-name" name="name" placeholder="e.g. Talent Acquisition Lead" required />
      <label htmlFor="inquiry-email">Work email</label>
      <input id="inquiry-email" name="email" type="email" placeholder="you@company.com" required />
      <label htmlFor="inquiry-company">Role / message topic</label>
      <input id="inquiry-company" name="company" placeholder="Frontend Developer role" />
      <label htmlFor="inquiry-message">Message</label>
      <textarea id="inquiry-message" name="message" placeholder="Brief note about the opening or team requirements…" rows={4} required />
      <button type="submit">Send email <ArrowUpRight size={14} /></button>
      <p>Your email app will open with this inquiry ready to send.</p>
    </form>
  );
}
