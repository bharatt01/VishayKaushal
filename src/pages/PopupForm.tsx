import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Briefcase, GraduationCap } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormType = {
  name: string;
  email: string;
  phone: string;
  stream: string;
  qualification: string;
  city: string;
  message: string;
};

type ErrorType = Partial<Record<keyof FormType, string>>;

const streams: string[] = [
  "Engineering",
  "Law",
  "Business",
  "Design",
  "Science",
  "Arts",
  "Other",
];

const PopupForm = () => {
  const [show, setShow] = useState<boolean>(false);

  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
    stream: "",
    qualification: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorType>({});

  useEffect(() => {
   
  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [show]);

useEffect(() => {
    const alreadyShown = localStorage.getItem("popupShown");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("popupShown", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => setShow(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormType]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = (): boolean => {
    const e: ErrorType = {};

    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      e.email = "Enter a valid email";
    }
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
      e.phone = "Enter a valid phone number";
    }
    if (!form.stream) e.stream = "Please select a stream";
    if (!form.qualification.trim()) e.qualification = "Qualification is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.message.trim()) e.message = "Please enter your goal";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

 const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxsKWgfa9jNkujIa0NIhPil1L_yFusmRyiZiTuFeQmRs66ExfMVMKKwAr1TUvBMu-pu3w/exec";

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) {
    toast.error("Please fill all fields correctly");
    return;
  }

  const toastId = toast.loading("Submitting...");

  try {
    const query = new URLSearchParams(form).toString();

    const res = await fetch(`${SCRIPT_URL}?${query}`, {
      method: "GET",
    });

    const data = await res.json();

    if (data.success) {
      toast.update(toastId, {
        render: "Form submitted successfully 🚀",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });

      setShow(false);

      setForm({
        name: "",
        email: "",
        phone: "",
        stream: "",
        qualification: "",
        city: "",
        message: "",
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.update(toastId, {
      render: "Submission failed ❌",
      type: "error",
      isLoading: false,
      autoClose: 2500,
    });
  }
};
  return (
    <AnimatePresence>
      {show && (
        <motion.div
    
className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-28 pb-6 md:pt-32 lg:pt-36 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={closePopup}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative z-10 grid w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[28px] border border-white/10 bg-[#0b0b0f] shadow-2xl lg:grid-cols-[1.05fr_0.95fr]"    >
            {/* Close Button */}
            <button
              onClick={closePopup}
              aria-label="Close popup"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-black/80 backdrop-blur-md transition hover:scale-105 hover:bg-black/20 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Left Panel */}
            <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-rose-600 to-black p-8 text-white md:p-12 lg:p-14">
              <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-red-300/10 blur-3xl" />

              <div className="relative z-10 max-w-lg">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/90">
                  <Sparkles size={14} />
                  Limited Offer
                </div>

                <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
                  Start Your Career
                  <span className="block text-red-100">While Studying</span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/80 md:text-base">
                  Earn, learn, and work on real company projects while continuing
                  your studies with expert support.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                    <Briefcase className="mb-3 text-white" size={18} />
                    <p className="text-lg font-bold">₹10k+</p>
                    <p className="text-xs text-white/75">Monthly earning potential</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                    <GraduationCap className="mb-3 text-white" size={18} />
                    <p className="text-lg font-bold">Real Projects</p>
                    <p className="text-xs text-white/75">Hands-on company exposure</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                    <Sparkles className="mb-3 text-white" size={18} />
                    <p className="text-lg font-bold">5000+</p>
                    <p className="text-xs text-white/75">Students already trained</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="bg-white p-6 sm:p-8 md:p-10 overflow-y-auto">
              <div className="mx-auto w-full max-w-xl">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-red-500">
                  Free Consultation
                </p>
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Book your career guidance session
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Fill in your details. It takes less than 30 seconds.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        name="name"
                        placeholder="Full name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                          errors.name
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 bg-gray-50 focus:border-red-500 focus:bg-white"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <input
                        name="email"
                        placeholder="Email address"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                          errors.email
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 bg-gray-50 focus:border-red-500 focus:bg-white"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        name="phone"
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                          errors.phone
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 bg-gray-50 focus:border-red-500 focus:bg-white"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <select
                        name="stream"
                        value={form.stream}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                          errors.stream
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 bg-gray-50 focus:border-red-500 focus:bg-white"
                        }`}
                      >
                        <option value="">Select stream</option>
                        {streams.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.stream && (
                        <p className="mt-1 text-xs text-red-500">{errors.stream}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        name="qualification"
                        placeholder="Qualification"
                        value={form.qualification}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                          errors.qualification
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 bg-gray-50 focus:border-red-500 focus:bg-white"
                        }`}
                      />
                      {errors.qualification && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.qualification}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        name="city"
                        placeholder="City"
                        value={form.city}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                          errors.city
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 bg-gray-50 focus:border-red-500 focus:bg-white"
                        }`}
                      />
                      {errors.city && (
                        <p className="mt-1 text-xs text-red-500">{errors.city}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us your goal..."
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition ${
                        errors.message
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 bg-gray-50 focus:border-red-500 focus:bg-white"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Get Free Guidance
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;