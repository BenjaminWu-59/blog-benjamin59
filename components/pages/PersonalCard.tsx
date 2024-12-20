"use client";
import React, { useState } from "react";
import { useMotionValue, motion } from 'framer-motion'
import Icons from "@/components/SiteIcons";

const PersonalCard = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);


  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left; // X position within the element
    const yPos = e.clientY - rect.top; // Y position within the element

    // Calculate rotation based on the position
    const rotateXValue = ((yPos / rect.height) - 0.5) * 35; // Adjust 30 for sensitivity
    const rotateYValue = ((xPos / rect.width) - 0.5) * -35; // Adjust -30 for sensitivity

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const intoductionList = [
    "Full Stack Developer",
    "Reactjs Developer",
    "Nestjs Developer",
    "Nextjs Developer",
    "Fitness fan",
    "LOL fan"
  ]


  return (
    <>
      <div>
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex items-center justify-center cursor-pointer relative"
        >
          <div className="z-10 w-[300px] px-10 py-[20px] rounded-3xl gredientGray shadow-normal">
            <p className="text-xl font-bold">My name is:</p>
            <p className="p-5 text-center text-4xl font-extrabold hover:font-[1000] hover:text-sky-800">Benjamin59</p>
            <hr className="pt-5 border-t-3 border-black" />
            <p className="text-xl font-bold">I'm a:</p>
            <div className="flex flex-col items-end group">
              {intoductionList.map((item, index) => (
                <div
                  key={index}
                  className={`z-10 text-xl py-[2px] w-full text-right ${selectedIndex === index ? 'font-extrabold text-sky-800' : selectedIndex !== null ? 'opacity-50' : ''}`}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onMouseLeave={() => setSelectedIndex(null)}
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="z-10 rounded-full absolute w-[40px] h-[40px] left-[3%] bottom-[-12%] transform -translate-x-1/2 -translate-y-1/2">
            <Icons.vscode className="rounded-full bg-background" />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default PersonalCard


