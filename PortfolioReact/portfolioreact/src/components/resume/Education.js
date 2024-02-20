import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Background</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Science in Electronics and Communications Engineering"
            subTitle="University of San Carlos (2015 - 2020)"
            result="100%"
            des="Electrical and Computer Engineering (ECE) involves studying the design and optimization of electrical systems, electronics, and computer technology."
          />
          <ResumeCard
            title="Highschool Education"
            subTitle="Rosemont Hills Montessori College  (2011 - 2015)"
            result="100%"
            des="Studied in this school from Grade 8 until Grade 12."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Rosemont Hills Montessori Academy (2007 - 2011)"
            result="100%"
            des="Studied in this school from Grade 3 until Grade 6."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Programming Bootcamp"
            subTitle="OneCodeCamp - (1/15/2024 - 2/9/2024)"
            result="Online"
            des="One month coding bootcamp of MERN Stack Development, providing a thorough understanding of HTML, CSS, Bootstrap, JavaScript, NodeJS, ReactJS, MongoDB and etc."
          />
          <ResumeCard
            title="Introduction to Web Development - Online Course"
            subTitle="Coursera - (Nov. 2020 - Dec. 2020)"
            result="Online"
            des="Studied Website Structure and Web Hosting with JavaScript, CSS, and HTML."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education