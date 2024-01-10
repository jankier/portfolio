import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import { useForm } from "react-hook-form";
import "./Contact.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div id="contact" className="contact">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        className="contact-section"
      >
        <div className="contact-text">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Get In Touch
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Contact Me
          </motion.span>
        </div>
        <div className="contact-elements">
          <motion.div
            className="contact-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              className="form"
              target="_self"
              onSubmit={onSubmit}
              action="https://formsubmit.co/c415157c30e0f9220f114942ba57e73a"
              method="POST"
            >
              <input
                className="form-input"
                type="text"
                placeholder="Name"
                autoComplete="off"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="form-error">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length exceeded."}
                </p>
              )}
              <input
                className="form-input"
                type="text"
                placeholder="Email"
                autoComplete="off"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors.email && (
                <p className="form-error">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email adress."}
                </p>
              )}
              <textarea
                className="form-input-message"
                rows={4}
                cols={150}
                placeholder="Message"
                autoComplete="off"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="form-error">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length exceeded."}
                </p>
              )}
              <button className="form-button" type="submit">
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
