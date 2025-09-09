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

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      alert(
        "Message sent! I'll get back to you faster than you can say 'JavaScript'!"
      );
      setFormData({ name: "", email: "", message: "" });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form Submitted", formData);
      await emailjs.send(
        "service_xta8m6v",
        "template_nfpvwzm",
        {
          from_user: formData.name,
          to_user: "sushant",
          from_email: formData.email,
          to_email: "sushantnatani007@gmail.com",
          message: formData.message,
        },
        "W5CgalwxdXtONYcGE"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("Success", "Your message has been sent!");
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert("failed");
      showAlertMessage("Danger", "Something went wrong");
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
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
        <form className="w-full" onSubmit={handleSubmit}>
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
            />
          </div>
          <button
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
            type="submit"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
