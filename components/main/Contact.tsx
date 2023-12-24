"use client";

import React, { createRef, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import variables from "@/env";
// @ts-ignore

const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [nameHasValue, setNameHasValue] = useState(false);
  const [emailHasValue, setEmailHasValue] = useState(false);
  const [messageHasValue, setMessageHasValue] = useState(false);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "name") {
      if (event.target.value !== "") {
        setNameHasValue(true);
      } else {
        setNameHasValue(false);
      }
    }

    if (event.target.name === "email") {
      if (event.target.value !== "") {
        setEmailHasValue(true);
      } else {
        setEmailHasValue(false);
      }
    }

    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.name === "message") {
      if (event.target.value !== "") {
        setMessageHasValue(true);
      } else {
        setMessageHasValue(false);
      }
    }
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onSubmit = async (event: any) => {
    event.preventDefault();
    await callback(event);
  };

  // return values
  return {
    onInputChange,
    onTextAreaChange,
    onSubmit,
    nameHasValue,
    messageHasValue,
    emailHasValue,
    values,
  };
};

const Contact = () => {
  const formState = {
    name: "",
    email: "",
    message: "",
  };

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [sendingMessage, setSendingMessage] = useState(false);

  const {
    onInputChange,
    onTextAreaChange,
    onSubmit,
    nameHasValue,
    emailHasValue,
    messageHasValue,
    values,
  } = useForm(formCallback, formState);

  async function formCallback(event: any) {
    const formData = formRef.current;

    if (formData === null) return;

    setSendingMessage(true);
    // send email
    const publicKey = process.env.EMAILJS_PUBLIC_KEY as string;
    const serviceId = process.env.EMAILJS_SERVICE_ID as string;
    const templateId = process.env.EMAILJS_TEMPLATE_ID as string;

    if (
      nameRef.current === null ||
      emailRef.current == null ||
      messageRef.current == null
    ) {
      return;
    }

    await emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: nameRef.current.value,
          message: messageRef.current.value,
          email_sender: emailRef.current.value,
        },
        publicKey
      )
      .then(() => {
        //show success
        toast.success("Message sent!");
      })
      .catch((error) => {
        //show error
        toast.error("An error occurred.");
      })
      .finally(() => {
        setSendingMessage(false);
        event.target.reset();
      });
  }

  return (
    <section
      className="flex flex-col items-center justify-center pb-10 z-[45] md:px-[12rem] px-4 "
      id="contact"
    >
      <div className="w-full h-full">
        <h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Contact Me
        </h1>

        <div className="flex md:flex-row flex-wrap w-full flex-col-reverse  md:gap-[2rem] lg:gap-[10rem]">
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="py-10 border border-slate-500 flex flex-col  rounded-lg w-full lg:w-1/2 gap-7 px-4"
          >
            <input
              type="text"
              name="name"
              ref={nameRef}
              className={
                "textarea py-2 px-2 rounded-md  border text-white border-[#2a0e61] shadow-lg " +
                (nameHasValue ? "contact-input-bg-active" : "contact-input-bg")
              }
              placeholder="Name"
              required
              onChange={onInputChange}
            />
            <input
              ref={emailRef}
              type="email"
              name="email"
              className={
                "textarea py-2 px-2 rounded-md  border text-white border-[#2a0e61] shadow-lg " +
                (emailHasValue ? "contact-input-bg-active" : "contact-input-bg")
              }
              required
              placeholder="Email"
              onChange={onInputChange}
            />
            <textarea
              rows={8}
              ref={messageRef}
              name="message"
              className={
                "textarea py-2 px-2 rounded-md  border text-white border-[#2a0e61] shadow-lg " +
                (messageHasValue
                  ? "contact-input-bg-active"
                  : "contact-input-bg")
              }
              placeholder="Message"
              required
              onChange={onTextAreaChange}
            />

            <div className="w-full h-full">
              <button
                type="submit"
                className="button-primary w-[15rem] float-start py-3
              px-2 rounded-lg text-white"
              >
                {sendingMessage ? "Sending" : "Send Message"}
              </button>
            </div>
          </form>

          <div className="flex flex-col text-white md:pb-0 pb-5">
            <div>
              <span className="text-[1.75rem] Welcome-text">Call </span>

              <div className="flex gap-5 my-3 items-center">
                <span className="purple-">
                  <FaPhoneAlt />
                </span>
                <a href="tel:+19073429233" type="tel">
                  907-342-9233
                </a>
              </div>

              <div className="mt-10">
                <span className="text-[1.75rem] Welcome-text">Email </span>

                <div className="flex gap-5 my-3 items-center">
                  <MdEmail />
                  <a href="mailto:demetrice_williams@hotmail.com" type="email">
                    demetrice_williams@hotmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;
