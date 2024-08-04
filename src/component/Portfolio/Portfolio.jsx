import { React, useState } from "react";
import img1 from "../../assets/gallery/1.svg";
import img2 from "../../assets/gallery/2.svg";
import img3 from "../../assets/gallery/3.svg";
import img4 from "../../assets/gallery/4.svg";
import img5 from "../../assets/gallery/5.svg";
import img6 from "../../assets/gallery/6.svg";

export default function Portfolio() {
  document.title='Portfolio';
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  return (
    <>
      <h1 className="text-center mt-[5rem]  font-semibold">Portfolio Component</h1>
      <div className="flex items-center gap-4 justify-center mb-11">
        <div className="line"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line"></div>
      </div>
      <div className="container  py-7 m-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-5 px-[1rem] max-sm:px-[1rem]">
        <div>
        <div className="relative image rounded-xl">
          <img
            src={img1}
            className="w-full  rounded-xl  cursor-pointer"
          />
          <div
            className="layer absolute top-0 right-0 bottom-0 left-0 rounded-xl"
            onClick={() => setShowModal(true)}
          >
            <span className="type">Art</span>
            <h2 className="font-semibold">
              Project Managment <br /> Illustration
            </h2>
            <i className="fa-solid fa-magnifying-glass-plus absolute bottom-4 left-5 flex items-center justify-center"></i>
          </div>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative md:w-auto max-md:w-[85%] my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative p-6 flex-auto">
                    <img src={img1} />
                  </div>
                  <i
                    className="fas fa-close absolute closeModel ease-linear transition-all duration-150 cursor-pointer fa-2x"
                    onClick={() => setShowModal(false)}
                  ></i>
                </div>
              </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        </div>
        <div>
        <div className="relative image rounded-xl">
          <img
            src={img2}
            className="w-full  rounded-xl cursor-pointer"
          />
          <div
            className="layer absolute top-0 right-0 bottom-0 left-0 rounded-xl"
            onClick={() => setShowModal2(true)}
          >
            <span className="type">creative</span>
            <h2 className="font-semibold">
            Guest App Walkthrough<br/>Screens
            </h2>
            <i className="fa-regular fa-image absolute bottom-4 left-5 flex items-center justify-center"></i>
          </div>
        </div>
        {showModal2 ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative md:w-auto max-md:w-[85%] my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative p-6 flex-auto">
                    <img src={img2} />
                  </div>
                  <i
                    className="fas fa-close absolute closeModel ease-linear transition-all duration-150 cursor-pointer fa-2x"
                    onClick={() => setShowModal2(false)}
                  ></i>
                </div>
              </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        </div>
        <div>
        <div className="relative image rounded-xl">
          <img
            src={img3}
            className="w-full  rounded-xl cursor-pointer"
          />
          <div
            className="layer absolute top-0 right-0 bottom-0 left-0 rounded-xl"
            onClick={() => setShowModal3(true)}
          >
            <span className="type">Art</span>
            <h2 className="font-semibold">
              Project Managment <br /> Illustration
            </h2>
            <i className="fa-solid fa-video absolute bottom-4 left-5 flex items-center justify-center"></i>
          </div>
        </div>
        {showModal3 ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative md:w-auto max-md:w-[85%] my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative p-6 flex-auto">
                    <img src={img3} />
                  </div>
                  <i
                    className="fas fa-close absolute closeModel ease-linear transition-all duration-150 cursor-pointer fa-2x"
                    onClick={() => setShowModal3(false)}
                  ></i>
                </div>
              </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        </div>
        <div>
        <div className="relative image rounded-xl">
          <img
            src={img4}
            className="w-full  rounded-xl  cursor-pointer"
          />
          <div
            className="layer absolute top-0 right-0 bottom-0 left-0 rounded-xl"
            onClick={() => setShowModal4(true)}
          >
            <span className="type">creative</span>
            <h2 className="font-semibold">
            Onboarding Motivation
            </h2>
            <i className="fa-solid fa-video absolute bottom-4 left-5 flex items-center justify-center"></i>
          </div>
        </div>
        {showModal4 ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative md:w-auto max-md:w-[85%] my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative p-6 flex-auto">
                    <img src={img4} />
                  </div>
                  <i
                    className="fas fa-close absolute closeModel ease-linear transition-all duration-150 cursor-pointer fa-2x"
                    onClick={() => setShowModal4(false)}
                  ></i>
                </div>
              </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        </div>
        <div>
        <div className="relative image rounded-xl">
          <img
            src={img5}
            className="w-full  rounded-xl  cursor-pointer"
          />
          <div
            className="layer absolute top-0 right-0 bottom-0 left-0 rounded-xl"
            onClick={() => setShowModal5(true)}
          >
            <span className="type">Art</span>
            <h2 className="font-semibold">
            iMac Mockup Design
            </h2>
            <i className="fa-solid fa-magnifying-glass-plus absolute bottom-4 left-5 flex items-center justify-center"></i>
          </div>
        </div>
        {showModal5 ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative md:w-auto max-md:w-[85%] my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative p-6 flex-auto">
                    <img src={img5} />
                  </div>
                  <i
                    className="fas fa-close absolute closeModel ease-linear transition-all duration-150 cursor-pointer fa-2x"
                    onClick={() => setShowModal5(false)}
                  ></i>
                </div>
              </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        </div>
        <div>
        <div className="relative image rounded-xl">
          <img
            src={img6}
            className="w-full  rounded-xl  cursor-pointer"
          />
          <div
            className="layer absolute top-0 right-0 bottom-0 left-0 rounded-xl"
            onClick={() => setShowModal6(true)}
          >
            <span className="type">Design</span>
            <h2 className="font-semibold">
            Game Store App Concept
            </h2>
            <i className="fa-solid fa-link absolute bottom-4 left-5 flex items-center justify-center"></i>
          </div>
        </div>
        {showModal6 ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative md:w-auto max-md:w-[85%] my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative p-6 flex-auto">
                    <img src={img6} />
                  </div>
                  <i
                    className="fas fa-close absolute closeModel ease-linear transition-all duration-150 cursor-pointer fa-2x"
                    onClick={() => setShowModal6(false)}
                  ></i>
                </div>
              </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        </div>
        
      </div>
    </>
  );
}
