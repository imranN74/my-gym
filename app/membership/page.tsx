"use client";

import { useState } from "react";

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    membershipType: "single",
    duration: "1 Month",
    trainer: "no",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Membership request submitted!");
  };

  return (
    <section className="relative py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Membership Form
          </p>
          <h2 className="text-4xl font-extrabold">
            Start Your <span className="text-yellow-400">Fitness Journey</span>
          </h2>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg outline-none focus:border-yellow-400 transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg outline-none focus:border-yellow-400 transition"
              placeholder="Enter phone number"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg outline-none focus:border-yellow-400 transition"
              placeholder="Enter email"
            />
          </div>

          {/* Membership Type */}
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Membership Type
            </label>
            <select
              title="mtype"
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg outline-none focus:border-yellow-400 transition"
            >
              <option value="single">Single</option>
              <option value="couple">Couple</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Plan Duration
            </label>
            <select
              title="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg outline-none focus:border-yellow-400 transition"
            >
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>12 Months</option>
            </select>
          </div>

          {/* Personal Trainer */}
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Personal Trainer
            </label>
            <select
              title="trainer"
              name="trainer"
              value={formData.trainer}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg outline-none focus:border-yellow-400 transition"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Message (Optional)
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg outline-none focus:border-yellow-400 transition"
              placeholder="Any specific requirement?"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-black rounded-lg transition shadow-lg shadow-yellow-400/40 uppercase tracking-wider"
          >
            Submit Membership Request
          </button>
        </form>
      </div>
    </section>
  );
}
