import React, { useState } from "react";
import Title from "../layout/Title";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg("Sent Successfully!");
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <section id="contact" className="w-full py-20 bordr-b-[1px] border-b-black">
      <div className="flex flex-col justify-center text-center items-center">
        <Title title="lets talk" desc="contact me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-gray-300 to-gray-200 p-8 rounded-lg lgl:p-8 shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
              className="w-full h-64 object-cover rounded-lg mb-2"
              src={contactImg}
              alt="contactImg"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-gray-600">
                Thomas Githuku
              </h3>
              <p className="text-lg font-normal text-gray-600">
                Frontend Developer
              </p>
              <p className="text-base text-gray-600 tracking-wide">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis ipsam autem cumque, accusantium dicta odio.
              </p>
              <p className="text-base text-gray-600 flex items-center gap-2">
                Phone: <span className="text-lightText">+254 708 366 961</span>
              </p>
              <p className="text-base text-gray-600 flex items-center gap-2">
                Email:{" "}
                <span className="text-lightText">
                  thomasngangagithuku@gmail.com
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
              </h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaFacebookF />
                </span>
                <span className="bannerIcon">
                  <FaTwitter />
                </span>
                <span className="bannerIcon">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lgl:w-[60%] h-full py-10  flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-800 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-800 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-800 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-800 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-800 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full flex justify-end">
                <button
                  onClick={handleSend}
                  className="w-[50%] h-12 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg text-base text-black tracking-wider uppercase hover:text-gray-500 duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              <div className="flex items-center justify-center">
                {successMsg && (
                  <p className="w-[150px] rounded-xl py-3 bg-gradient-to-r from-gray-700 to-gray-600 shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}
                {errMsg && (
                  <p className="w-[220px] rounded-xl py-3 bg-gradient-to-r from-gray-900 to-gray-700 shadow-shadowOne text-center text-red-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
