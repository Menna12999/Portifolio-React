import React, { useState } from "react";
export default function Contact() {
  let [labelName, setLabelName] = useState(false);
  let [labelAge, setLabelAge] = useState(false);
  let [labelEmail, setLabelEmail] = useState(false);
  let [labelPass, setLabelPass] = useState(false);

  document.title = "Contact";
  function handle(e) {
    let key = e.target.value;
    let keyName = e.target["name"];
    if( keyName == "name"){
    if (key.length > 0) {
      setLabelName(true);
    } else if (key.length == 0) {
      setLabelName(false);
    }
  }
if(keyName == "age"){
    if (key.length > 0 ) {
      setLabelAge(true);
    } else if (key.length == 0) {
      setLabelAge(false);
    }
  }
  if(keyName == "email"){
    if (key.length > 0 ) {
      setLabelEmail(true);
    } else if (key.length == 0) {
      setLabelEmail(false);
    }
  }
  if(keyName == "password"){
    if (key.length > 0) {
      setLabelPass(true);
    } else if (key.length == 0) {
    
        setLabelPass(false);
   
      
    }
  }
  }
  return (
    <div>
      <h1 className="text-center mt-[2rem]  font-semibold">Contact</h1>
      <div className="flex items-center gap-4 justify-center mb-11">
        <div className="line"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line"></div>
      </div>

      <section className="pb-7">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 ">
          <div className="py-6 md:py-0 md:px-6 bg-contact">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <i className="fa-solid fa-location-dot me-4"></i>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <i className="fa-solid fa-phone me-4"></i>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <i className="fa-solid fa-envelope me-4"></i>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form className="flex flex-col py-6 space-y-6 md:py-0 ">
            <label className="relative">
              <span
                className={`ps-3 absolute top-[-1rem] ${
                  !labelName
                    ? "opacity-0 animate-move_down"
                    : "block animate-move_up"
                }`}
              >
                User Name
              </span>
              <input
                type="text"
                placeholder="User Name"
                name="name"
                required
                className="w-full shadow-dark shadow-lg focus:outline-none mt-3"
                onChange={handle}
              />
            </label>
            <label className="relative">
              <span
                className={`ps-3 absolute top-[-1rem] ${
                  !labelAge
                    ? "opacity-0 animate-move_down"
                    : "block animate-move_up"
                }`}
              >
                User Age
              </span>
              <input
                type="number"
                placeholder="User Age "
                name="age"
                required
                className="w-full  shadow-dark shadow-lg focus:outline-none mt-3"
                onChange={handle}
              />
            </label>
            <label className="relative">
              <span
                className={`ps-3 absolute top-[-1rem] ${
                  !labelEmail
                    ? "opacity-0 animate-move_down"
                    : "block animate-move_up"
                }`}
              >
                User Email
              </span>
              <input
                type="email"
                placeholder="User Email"
                name="email"
                className="w-full shadow-dark shadow-lg focus:outline-none mt-3"
                required
                onChange={handle}
              />
            </label>
            <label className="relative">
              <span
                className={`ps-3 absolute top-[-1rem] ${
                  !labelPass
                    ? "opacity-0 animate-move_down"
                    : "block animate-move_up"
                }`}
              >
                User Password
              </span>
              <input
                type="password"
                placeholder="User Password"
                name="password"
                className="w-full shadow-dark shadow-lg focus:outline-none mt-3"
                required
                onChange={handle}
              />
            </label>
            <button className="btn-custom w-fit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
