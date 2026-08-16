"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Consultation request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
    );
    window.location.href = `mailto:contact@doed.ma?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-card bg-white p-5 shadow-[0_4px_16px_rgba(14,42,69,0.06)] sm:p-8">
      <label className="block text-left">
        <span className="text-sm font-bold text-navy-text">Name</span>
        <input
          required
          type="text"
          name="name"
          autoComplete="name"
          className="mt-2 min-h-11 w-full rounded-button border border-navy-900/15 px-4 py-3 text-base text-navy-text outline-none transition-[border-color] duration-300 ease-out focus:border-orange-500"
        />
      </label>
      <label className="block text-left">
        <span className="text-sm font-bold text-navy-text">Email</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          className="mt-2 min-h-11 w-full rounded-button border border-navy-900/15 px-4 py-3 text-base text-navy-text outline-none transition-[border-color] duration-300 ease-out focus:border-orange-500"
        />
      </label>
      <label className="block text-left">
        <span className="text-sm font-bold text-navy-text">Company</span>
        <input
          type="text"
          name="company"
          autoComplete="organization"
          className="mt-2 min-h-11 w-full rounded-button border border-navy-900/15 px-4 py-3 text-base text-navy-text outline-none transition-[border-color] duration-300 ease-out focus:border-orange-500"
        />
      </label>
      <label className="block text-left">
        <span className="text-sm font-bold text-navy-text">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 min-h-28 w-full resize-y rounded-button border border-navy-900/15 px-4 py-3 text-base text-navy-text outline-none transition-[border-color] duration-300 ease-out focus:border-orange-500"
        />
      </label>
      <Button type="submit" className="w-full sm:w-auto">
        Send Message
      </Button>
      {status === "sent" ? (
        <p className="text-sm text-gray-body">Your email client should open with your message to contact@doed.ma.</p>
      ) : null}
    </form>
  );
}
