"use client";
import React from "react";
import { useMotionValue, useTransform, motion } from 'framer-motion'

const PersonalCard = () => {
  // const x = useMotionValue(0)
  // const y = useMotionValue(0)
  // const rotateX = useTransform(y, [-100, 100], [30, -30])
  // const rotateY = useTransform(x, [-100, 100], [30, -30])
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left; // X position within the element
    const yPos = e.clientY - rect.top; // Y position within the element

    // Calculate rotation based on the position
    const rotateXValue = ((yPos / rect.height) - 0.5) * 40; // Adjust 30 for sensitivity
    const rotateYValue = ((xPos / rect.width) - 0.5) * -40; // Adjust -30 for sensitivity

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };


  return (
    <>
      <div style={{ perspective: 2000 }} >
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex items-center justify-center cursor-pointer relative"
        >
          <div className="z-10 p-10 rounded-3xl gray-gradient shadow-custom">
            <p className="text-xl font-bold">My name is:</p>
            <p className="p-5 text-3xl font-extrabold">Benjamin59</p>
            <hr className="pt-5 border-t-3" />
            <p className="w-80 text-xl font-bold">I'm a:</p>
            <div className="my-2 flex flex-col items-end">
              <p className="text-xl py-0.5">Full Stack Developer</p>
              <p className="text-xl py-0.5">Reactjs Developer</p>
              <p className="text-xl py-0.5">Nestjs Developer</p>
              <p className="text-xl py-0.5">Fitness fan</p>
              <p className="text-xl py-0.5">LOL fan</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default PersonalCard


