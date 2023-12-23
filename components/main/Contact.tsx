"use client";

import React, { createRef, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
      console.log(event.target.value);
      if (event.target.value !== "") {
        setNameHasValue(true);
      } else {
        setNameHasValue(false);
      }
    }

    if (event.target.name === "email") {
      console.log(event.target.value);
      if (event.target.value !== "") {
        setEmailHasValue(true);
      } else {
        setEmailHasValue(false);
      }
    }

    console.log(nameHasValue);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.name === "message") {
      console.log(event.target.value);
      if (event.target.value !== "") {
        setMessageHasValue(true);
      } else {
        setMessageHasValue(false);
      }
    }
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback(event); // triggering the callback
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

  async function formCallback() {
    setSendingMessage(true);
    // send email
    const publicKey = process.env.EMAILJS_PUBLIC_KEY as string;
    const serviceId = process.env.EMAILJS_SERVICE_ID as string;
    const templateId = process.env.EMAILJS_TEMPLATE_ID as string;
    console.log("public", publicKey);
    console.log("serviceId", serviceId);
    console.log("templateId", templateId);

    emailjs.init(publicKey);

    console.log(nameRef.current);
    console.log(emailRef.current);

    await emailjs
      .send(serviceId, templateId, {
        name: nameRef?.current?.value,
        recipient: emailRef?.current?.value,
      })
      .then(() => {
        //show success
      })
      .catch((error) => {
        //show error

        console.log(error);
      })
      .finally(() => {
        setSendingMessage(false);
      });

    // emailjs
    //   .send(
    //     process.env.VITE_APP_EMAILJS_SERVICE_ID as string,
    //     process.env.VITE_APP_EMAILJS_TEMPLATE_ID as string,
    //     {
    //       from_name: formState.name,
    //       to_name: "Demetrice",
    //       from_email: formState.email,
    //       to_email: "demetrice_williams@hotmail.com",
    //       message: formState.message,
    //     },
    //     this
    //   )
    //   .then(() => {
    //     // showAlert({
    //     //   show: true,
    //     //   text: "Message sent successfully!",
    //     //   type: "success",
    //     // });
    //     // setTimeout(() => {
    //     //   setForm({ name: "", email: "", message: "" });
    //     // }, 5000);
    //   })
    //   .catch((error) => {
    //     //show error
    //     // showAlert({
    //     //   show: true,
    //     //   text: "An Error has occurred.",
    //     //   type: "danger",
    //     // });
    //   });
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
    </section>
  );
};

export default Contact;
