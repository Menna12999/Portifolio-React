import React, { useState } from "react";
import avatar from "../../assets/avatar-1.svg";
import { ReactTyped } from "react-typed";

export default function Home() {
  document.title='Bolby.'
  return (
    <>
      <div className="h-[90vh] bg-home flex justify-center items-center flex-col">
        <img src={avatar} />
        <h1 className="mt-5 font-extrabold">Bolby Doe</h1>
        <div className="flex items-center gap-1 my-3">
          <div className="line"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line"></div>
        </div>
        <p className="mt-2">
          <ReactTyped
            strings={[
              "I'm a Web Designer",
              "I'm a Graphic Artist ",
              "I'm an Illustrator",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></ReactTyped>
        </p>
        <ul className="icon flex gap-7 my-4">
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-dribbble"></i>
          </li>
          <li>
            <i className="fa-brands fa-behance"></i>
          </li>
          <li>
            <i className="fa-brands fa-pinterest-p"></i>
          </li>
        </ul>
        <button className="btn-custom mt-2">Hire me</button>
      </div>
    </>
  );
}
