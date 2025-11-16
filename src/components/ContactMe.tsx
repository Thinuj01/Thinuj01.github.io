import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styling/ContactMe.css";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);

  // Yup Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Full name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  // Framer Motion animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const sendEmail = async (values: any, resetForm: () => void) => {
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      resetForm();
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contactMeContainer">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="contactForm"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }}
        viewport={{ once: true }}
      >
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            sendEmail(values, resetForm);
          }}
        >
          {() => (
            <Form>
              {/* Name */}
              <motion.div className="formGroup" variants={fadeInUp}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter the Full Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="formError"
                />
              </motion.div>

              {/* Email */}
              <motion.div className="formGroup" variants={fadeInUp}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="formError"
                />
              </motion.div>

              {/* Message */}
              <motion.div className="formGroup" variants={fadeInUp}>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Enter your message"
                  rows={4}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="formError"
                />
              </motion.div>

              {/* Button */}
              <motion.div className="sendMailBtn" variants={fadeInUp}>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? (
                    <span>
                      Sending <span className="spinner" />
                    </span>
                  ) : (
                    "Send"
                  )}
                </motion.button>
              </motion.div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
};

export default ContactMe;
