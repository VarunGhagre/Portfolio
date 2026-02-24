import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Mail, User, MessageSquare, Send, CheckCircle } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...form,
          from_name: form.name,
          reply_to: form.email,
        },
        PUBLIC_KEY
      );

      setSuccess(true);
      toast.success("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 2500);
    } catch (err) {
      toast.error("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 relative">

      <ParticlesBackground />
      
      <div className="max-w-2xl mx-auto px-6 z-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-slate-400">
          Let’s Connect
        </h2>

        <div className="relative">
          {/* SUCCESS OVERLAY */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-10 flex flex-col
                           items-center justify-center
                           bg-slate-950/90 backdrop-blur rounded-xl"
              >
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <p className="text-lg font-semibold">
                  Message Sent Successfully!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-slate-950
                       border border-slate-800
                       rounded-2xl p-8"
          >
            {/* NAME */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full pl-12 py-3 bg-slate-900
                           border border-slate-800 rounded-lg text-blue-100"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full pl-12 py-3 bg-slate-900
                           border border-slate-800 rounded-lg text-blue-100"
              />
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-slate-500" />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full pl-12 py-3 bg-slate-900
                           border border-slate-800 rounded-lg resize-none text-blue-100"
              ></textarea>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2
                         py-3 bg-blue-600 rounded-lg font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={18} />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
