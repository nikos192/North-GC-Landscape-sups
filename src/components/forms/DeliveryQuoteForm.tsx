"use client";

import { useState } from "react";

interface DeliveryFormState {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  category: string;
  quantity: string;
  date: string;
  notes: string;
}

const initialState: DeliveryFormState = {
  name: "",
  phone: "",
  email: "",
  suburb: "",
  category: "",
  quantity: "",
  date: "",
  notes: "",
};

export function DeliveryQuoteForm() {
  const [formData, setFormData] = useState<DeliveryFormState>(initialState);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors: string[] = [];
    if (!formData.name.trim()) nextErrors.push("Name is required.");
    if (!formData.phone.trim()) nextErrors.push("Phone is required.");
    if (!formData.suburb.trim()) nextErrors.push("Suburb is required.");
    if (!formData.category.trim())
      nextErrors.push("Product category is required.");
    if (!formData.quantity.trim()) nextErrors.push("Quantity is required.");
    if (!formData.date.trim()) nextErrors.push("Preferred date is required.");
    setErrors(nextErrors);
    return nextErrors.length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent("Delivery quote request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSuburb: ${formData.suburb}\nCategory: ${formData.category}\nQuantity: ${formData.quantity}\nPreferred date: ${formData.date}\n\nNotes:\n${formData.notes}`
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
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="dq-name">
            Name *
          </label>
          <input
            id="dq-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="dq-phone">
            Phone *
          </label>
          <input
            id="dq-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="dq-email">
            Email
          </label>
          <input
            id="dq-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="dq-suburb">
            Suburb *
          </label>
          <input
            id="dq-suburb"
            name="suburb"
            value={formData.suburb}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="dq-category">
            Product category *
          </label>
          <select
            id="dq-category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
            required
          >
            <option value="">Select a category</option>
            <option value="Decorative stone">Decorative stone</option>
            <option value="Sands, soils and loams">Sands, soils and loams</option>
            <option value="Gravels and road base">Gravels and road base</option>
            <option value="Mulch">Mulch</option>
            <option value="Pavers and blocks">Pavers and blocks</option>
            <option value="Garden supplies">Garden supplies</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="dq-quantity">
            Quantity *
          </label>
          <input
            id="dq-quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
            placeholder="e.g. 2m3 or 30 bags"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="dq-date">
            Preferred delivery date *
          </label>
          <input
            id="dq-date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm font-semibold text-slate-800" htmlFor="dq-notes">
          Notes
        </label>
        <textarea
          id="dq-notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
          placeholder="Access notes, preferred delivery window, or product details"
        />
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
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-orange-400"
      >
        Request delivery quote
      </button>
      <p className="mt-3 text-xs text-slate-500">
        This form opens your email client. Same-day delivery available (where
        possible).
      </p>
      {/*
      API route stub for later integration:
      POST /api/quote
      body: { name, phone, email, suburb, category, quantity, date, notes }
      */}
    </form>
  );
}
