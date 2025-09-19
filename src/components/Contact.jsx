import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Initialize EmailJS (helps in some environments)
  useEffect(() => {
    if (PUBLIC_KEY && emailjs?.init) {
      try {
        emailjs.init(PUBLIC_KEY);
      } catch (e) {
        // non-fatal
        console.debug("EmailJS init skipped", e);
      }
    }
  }, [PUBLIC_KEY]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env.local.",
      });
      return;
    }

    // Simple honeypot check (anti-spam). If filled, silently ignore.
    const honeypot = form.current?.querySelector('input[name="website"]')?.value;
    if (honeypot) {
      setStatus({ type: "success", message: "Message sent successfully!" });
      form.current.reset();
      return;
    }

    // Client-side validation
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || name.length < 2) {
      setStatus({ type: "error", message: "Please enter your name (min 2 characters)." });
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!message || message.length < 10) {
      setStatus({ type: "error", message: "Please enter a longer message (min 10 characters)." });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message sent successfully!" });
          form.current.reset();
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          // Show a more descriptive message if available
          const detail = error?.text || error?.message || "";
          setStatus({ type: "error", message: `Failed to send message. ${detail}`.trim() });
          console.error("EmailJSResponseStatus", error);
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4" noValidate>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-3 rounded border dark:bg-gray-700 dark:text-white"
          value={formData.name}
          onChange={(e) => setFormData((s) => ({ ...s, name: e.target.value }))}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 rounded border dark:bg-gray-700 dark:text-white"
          value={formData.email}
          onChange={(e) => setFormData((s) => ({ ...s, email: e.target.value }))}
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          className="w-full p-3 rounded border dark:bg-gray-700 dark:text-white"
          value={formData.message}
          onChange={(e) => setFormData((s) => ({ ...s, message: e.target.value }))}
          required
        ></textarea>
        {/* Hidden mirrors for common EmailJS param names */}
        <input type="hidden" name="from_name" value={formData.name} readOnly />
        <input type="hidden" name="from_email" value={formData.email} readOnly />
        <input type="hidden" name="reply_to" value={formData.email} readOnly />

        {/* Honeypot field - should stay hidden from users */}
        <input
          type="text"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        {status.message && (
          <p
            className={`${
              status.type === "success"
                ? "text-green-600"
                : status.type === "error"
                ? "text-red-600"
                : ""
            } text-sm`}
            role={status.type === "error" ? "alert" : undefined}
          >
            {status.message}
          </p>
        )}
        <button
          type="submit"
          className={`bg-blue-600 text-white py-2 px-6 rounded ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}
