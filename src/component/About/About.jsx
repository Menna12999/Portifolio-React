import React ,{useEffect}from 'react'
import avatar2 from '../../assets/avatar-2.svg'
import Progress from './Progress';
import Counter from './Counter';
export default function About() {
  document.title='About';
  const testData = [
    { bgcolor: "#FFD15C", completed: 85 },
    { bgcolor: "#FF4C60", completed: 95 },
    { bgcolor: "#6C6CE5", completed: 70 },
  ];
  return (
    <>
      <h1 className="text-center mt-[2rem]  font-semibold">About</h1>
      <div className="flex items-center gap-4 justify-center mb-11">
        <div className="line"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line"></div>
        </div>
      <div className="container about  mx-auto  grid lg:grid-cols-12 max-lg:grid-cols-1 gap-2 mb-[4rem] px-10">
      <div className="img-about mx-auto  max-sm:mx-auto content-center col-span-4">
       <img src={avatar2} className='max-lg:mb-10'/>
      </div>
      <div className="details grid lg:grid-cols-2 sm:grid-cols-1 mx-auto col-span-8 gap-4 bg-white p-10 rounded-lg shadow-2xl shadow-dark relative">
       <div className="content-center">
        <p className='mb-4'>I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and <br/>customization, also I am good at WordPress.</p>
        <button className='btn-custom'>Download CV</button>
       </div> 
    <div >
      <p className='flex justify-between'><span className='title'>Development</span><span>85%</span></p>
        <Progress bgcolor={testData[0].bgcolor} completed={testData[0].completed} />
        <p className='flex justify-between mt-3'><span className='title'>UI/UX design</span><span>95%</span></p>
        <Progress bgcolor={testData[1].bgcolor} completed={testData[1].completed} />
        <p className='flex justify-between mt-3'><span className='title'>Photography</span><span>70%</span></p>
        <Progress bgcolor={testData[2].bgcolor} completed={testData[2].completed} />
        </div>
      </div>
      </div>
      <div className=" py-8 mb-[5rem] counter pb-7 mx-auto grid lg:grid-cols-12 sm:grid-cols-6 gap-5 pl-[7rem]  max-sm:px-[1rem]">
       <div className='flex gap-2 items-center col-span-3'>
       <i class="fa-solid fa-fire fa-2x"></i>
          <div>
            <h2 className='font-bold'><Counter initialValue={180}
                    targetValue={198}/></h2>
            <p>Projects completed</p>
            </div> 
       </div>
       <div className='flex gap-2 items-center col-span-3'>
       <i class="fa-solid fa-mug-hot fa-2x"></i>          
       <div>
            <h2 className='font-bold'><Counter initialValue={500}
                    targetValue={580}/></h2>
            <p>Cup of coffee</p>
            </div> 
       </div>
       <div className='flex gap-2 items-center col-span-3'>
       <i class="fa-solid fa-users fa-2x"></i>
          <div>
            <h2 className='font-bold'><Counter initialValue={400}
                    targetValue={427}/></h2>
            <p>Satisfied clients</p>
            </div> 
       </div><div className='flex gap-2 items-center col-span-3'>
       <i class="fa-solid fa-certificate fa-2x"></i>          
       <div>
            <h2 className='font-bold'><Counter initialValue={30}
                    targetValue={35}/></h2>
            <p>Nominees winner</p>
            </div> 
       </div>
      </div>
    </>
  )
}
