import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  // Form Validation
  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name.trim() || name.length < 2) {
      showAlertMessage(
        "error",
        "Please enter a valid name (at least 2 characters)"
      );
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlertMessage("error", "Please enter a valid email address");
      return false;
    }

    if (!message.trim() || message.length < 10) {
      showAlertMessage(
        "error",
        "Please enter a message (at least 10 characters)"
      );
      return false;
    }

    return true;
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (showAlert) {
      setShowAlert(false);
    }
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    if (type === "success") {
      setTimeout(() => {
        setShowAlert(false);
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    } else {
      // Error messages stay visible until user interacts
      setTimeout(() => {
        setShowAlert(false);
      }, 6000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const now = new Date();
      const submissionDate = now.toLocaleDateString();
      const submissionTime = now.toLocaleTimeString();

      await emailjs.send(
        "service_xta8m6v",
        "template_nfpvwzm",
        {
          from_user: formData.name,
          to_user: "sushant",
          from_email: formData.email,
          to_email: "sushantnatani007@gmail.com",
          message: formData.message,
          submission_date: submissionDate,
          submission_time: submissionTime,
        },
        "W5CgalwxdXtONYcGE"
      );
      showAlertMessage(
        "success",
        "Message sent successfully! I'll get back to you within 24-48 hours."
      );
    } catch (error) {
      console.error("EmailJS Error:", error);

      // More specific error handling
      let errorMessage = "Failed to send message. ";
      if (error.status === 400) {
        errorMessage += "Please check your input and try again.";
      } else if (error.status === 401) {
        errorMessage += "Authentication failed. Please try again later.";
      } else if (error.status === 413) {
        errorMessage += "Message too large. Please shorten your message.";
      } else {
        errorMessage += "Please try again later or contact me directly.";
      }

      showAlertMessage("error", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="relative flex items-center c-space section-spacing"
      id="contact"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary ">
        <div className="flex flex-col items-center w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Connect!</h2>
          <p className="font-normal text-neutral-400">
            Have an idea in mind or just want to chat? I'd love to hear from
            you! Drop me a message and I'll get back to you soon.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit} noValidate>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              What should I call you? *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Jane Smith (or just Jane works too!)"
              autoComplete="name"
              value={formData.name}
              onChange={handleChanges}
              required
              minLength={2}
              maxLength={30}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Your email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="jane@company.com (I promise not to spam!)"
              autoComplete="email"
              value={formData.email}
              onChange={handleChanges}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              What's on your mind?
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Tell me about that exciting opportunity, project idea, or just say hi! I'm all ears (Fun fact: I respond faster to messages with emojis 😉)"
              autoComplete="message"
              value={formData.message}
              onChange={handleChanges}
              required
              minLength={10}
              maxLength={500}
            />
            <div className="text-xs text-neutral-500 mt-1 text-right">
              {formData.message.length}/500 characters
            </div>
          </div>
          <button
            className={`w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer transition-all duration-300 ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-radial from-lavender to-royal hover-animation hover:scale-[1.02]"
            }`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </span>
            ) : (
              "Send"
            )}
          </button>
        </form>
        <div className="mt-5 text-center">
          <p className="text-[10px] text-neutral-500">
            Prefer email? Reach me directly at <br />
            <a
              href="mailto:sushantnatani007@gmail.com"
              className="text-lavender hover:text-royal transition-colors underline"
            >
              sushantnatani007@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Contact;
