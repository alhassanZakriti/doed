"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { useLocale } from "@/components/LocaleProvider";

export function ContactForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nameCompany = String(data.get("nameCompany") ?? "");
    const email = String(data.get("email") ?? "");
    const challenge = String(data.get("challenge") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Consultation request from ${nameCompany}`);
    const body = encodeURIComponent(
      `Name / Company: ${nameCompany}\nEmail: ${email}\nChallenge: ${challenge}\n\n${message}`,
    );
    window.location.href = `mailto:contact@doed.ma?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-card bg-surface p-5 shadow-[0_4px_16px_rgba(14,42,69,0.06)] sm:p-8 dark:shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
    >
      <label className="block text-start">
        <span className="text-sm font-bold text-navy-text">{t.form.nameCompany}</span>
        <input
          required
          type="text"
          name="nameCompany"
          autoComplete="name"
          className="field-control mt-2 min-h-11 w-full rounded-button border px-4 py-3 text-base outline-none transition-[border-color] duration-300 ease-out"
        />
      </label>
      <label className="block text-start">
        <span className="text-sm font-bold text-navy-text">{t.form.email}</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          className="field-control mt-2 min-h-11 w-full rounded-button border px-4 py-3 text-base outline-none transition-[border-color] duration-300 ease-out"
        />
      </label>
      <label className="block text-start">
        <span className="text-sm font-bold text-navy-text">{t.form.challenge}</span>
        <select
          required
          name="challenge"
          defaultValue=""
          className="field-control mt-2 min-h-11 w-full rounded-button border px-4 py-3 text-base outline-none transition-[border-color] duration-300 ease-out"
        >
          <option value="" disabled>
            {t.form.challengePlaceholder}
          </option>
          <option value={t.form.challenges.ai}>{t.form.challenges.ai}</option>
          <option value={t.form.challenges.data}>{t.form.challenges.data}</option>
          <option value={t.form.challenges.cloud}>{t.form.challenges.cloud}</option>
          <option value={t.form.challenges.security}>{t.form.challenges.security}</option>
        </select>
      </label>
      <label className="block text-start">
        <span className="text-sm font-bold text-navy-text">{t.form.message}</span>
        <textarea
          required
          name="message"
          rows={5}
          className="field-control mt-2 min-h-28 w-full resize-y rounded-button border px-4 py-3 text-base outline-none transition-[border-color] duration-300 ease-out"
        />
      </label>
      <Button type="submit" className="w-full sm:w-auto">
        {t.buttons.sendMessage}
      </Button>
      {status === "sent" ? <p className="text-sm text-gray-body">{t.contact.formSent}</p> : null}
    </form>
  );
}
