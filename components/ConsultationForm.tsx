"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { useLocale } from "@/components/LocaleProvider";

const fieldClass =
  "field-control mt-2 min-h-11 w-full rounded-button border px-4 py-3 text-base outline-none transition-[border-color] duration-300 ease-out";

export function ConsultationForm() {
  const { t } = useLocale();
  const copy = t.bookConsultationPage;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      phone: String(data.get("phone") ?? ""),
      preferredTime: String(data.get("preferredTime") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-card bg-surface p-5 shadow-[0_4px_16px_rgba(14,42,69,0.06)] sm:p-8 dark:shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
      >
        <p className="text-base leading-relaxed text-gray-body">{copy.success}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-card bg-surface p-5 shadow-[0_4px_16px_rgba(14,42,69,0.06)] sm:p-8 dark:shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
    >
      <label className="block text-start">
        <span className="text-sm font-bold text-navy-text">{copy.name}</span>
        <input required type="text" name="name" autoComplete="name" className={fieldClass} />
      </label>
      <label className="block text-start">
        <span className="text-sm font-bold text-navy-text">{copy.email}</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          className={fieldClass}
        />
      </label>
      <label className="block text-start">
        <span className="text-sm font-bold text-navy-text">{copy.company}</span>
        <input required type="text" name="company" autoComplete="organization" className={fieldClass} />
      </label>
      <label className="block text-start">
        <span className="text-sm font-bold text-navy-text">
          {copy.phone} <span className="font-normal text-gray-body">({copy.phoneOptional})</span>
        </span>
        <input type="tel" name="phone" autoComplete="tel" className={fieldClass} />
      </label>
      <label className="block text-start">
        <span className="text-sm font-bold text-navy-text">{copy.preferredTime}</span>
        <input type="text" name="preferredTime" className={fieldClass} />
      </label>
      <label className="block text-start">
        <span className="text-sm font-bold text-navy-text">{t.form.message}</span>
        <textarea required name="message" rows={5} className={`${fieldClass} min-h-28 resize-y`} />
      </label>
      <Button type="submit" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? copy.submitting : copy.submit}
      </Button>
      {status === "error" ? <p className="text-sm text-red-600 dark:text-red-400">{copy.error}</p> : null}
    </form>
  );
}
