/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // Only for App Router

import { useState } from "react";

export default function SendEmailForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = async () => {
    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: email, subject, text: message }),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess("Email sent successfully!");
      } else {
        setSuccess(`Error: ${result.message}`);
      }
    } catch (error) {
      setSuccess("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <input
        type="email"
        placeholder="Recipient Email"
        className="border p-2 mb-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        className="border p-2 mb-2 w-full"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Message"
        className="border p-2 mb-2 w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendEmail} className="bg-blue-500 text-white p-2">
        {loading ? "Sending..." : "Send Email"}
      </button>
      {success && <p className="mt-2">{success}</p>}
    </div>
  );
}
