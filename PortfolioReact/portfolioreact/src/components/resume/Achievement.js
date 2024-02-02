import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Top Chat Advocate of 1H 2023"
            subTitle="Concentrix (2023)"
            result="1st"
            des="Awarded as the Top Chat Advocate for having highest average metrics score in the whole LOB for the first half of the year."
          />
          <ResumeCard
            title="Electronics Technician License Holder"
            subTitle="2022 ECT Exam"
            result="80%"
            des="Passed the 2022 Electronics Technician Licensure Exam conducted by PRC(Professional Regulation Commision) of the Philippines"
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
