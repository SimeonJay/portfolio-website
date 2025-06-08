import React, { useRef } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Swal from 'sweetalert2'

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0cc982b5-42ba-458b-bbe1-264c317ef36d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am a Frontend Developer with 2 years experience in creating
                responsive, user-friendly web applications. Deep expertise with
                HTML, CSS, JavaScript and a modern framework like React
                Converting UI/UX designs into high-quality code that works on
                all major platforms and optimizations in terms of speed.
                Analytical problem solver with a keen eye for attention to
                detail and ultimately tries every way possible to create the
                ultimate user experience.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  5
                  <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  2<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>years of experience</span>
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit}
            className=" max-w-6xl p-5 md:p-12"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            required/>
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required/>
            <textarea
              name="message"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required/>
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
              value="Send"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};
