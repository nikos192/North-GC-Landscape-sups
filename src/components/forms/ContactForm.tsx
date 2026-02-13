"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors: string[] = [];
    if (!formData.name.trim()) nextErrors.push("Name is required.");
    if (!formData.phone.trim()) nextErrors.push("Phone is required.");
    if (!formData.message.trim()) nextErrors.push("Message is required.");
    setErrors(nextErrors);
    return nextErrors.length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(
      `Quote request from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setFormData(initialState);
    setErrors([]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
    >
      <div className="space-y-4">
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="phone">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
          />
        </div>
        <div>
          <label
            className="text-sm font-semibold text-slate-800"
            htmlFor="message"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
            required
          />
        </div>
      </div>
      {errors.length > 0 && (
        <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-3 text-sm text-orange-900">
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-500"
      >
        {siteConfig.ctas.primary}
      </button>
      <p className="mt-3 text-xs text-slate-500">
        This form opens your email client. Ask about delivery, product advice, or
        stock.
      </p>
    </form>
  );
}
