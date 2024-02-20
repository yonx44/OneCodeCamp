import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Part-time Video Editor and Programmer"
            subTitle="Freelance - (1/13/2024 - Present)"
            result="Remote"
            des="Creates video tutorials about setting up database servers that are designed to help users of all levels from beginners to experts to navigate the complex world of Linux and database servers. With step-by-step instructions and clear explanations to guide and show the process of setting up and configuring a system."
          />
          <ResumeCard
            title="Technical Support, Advisor I"
            subTitle="Concentrix - (11/09/2022 - 12/12/2023)"
            result="Cebu, Philippines"
            des="Answering incoming calls from customers. Provided technical support through chat and email. Ensuring that customers requests are managed in an appropriate and timely manner. Resolves customer's issues and provides technical
            support under Microsoft."
          />
          <ResumeCard
            title="Drive Test Engineer"
            subTitle="TELKHA - (10/11/2021 - 1/15/2022)"
            result="Cebu, Philippines"
            des="Performs data collection using the latest data collection
            systems like NEMO Outdoor and NEMO Handy. Test, identify and troubleshoot problems in the field with cellular networks as well as with data collection equipment in order to meet RF engineering standards. Also involves using navigation tools, and mapping software."
          />
          <ResumeCard
            title="Laboratory Assistant"
            subTitle="Special Applications Laboratory - (10/11/20217 - 5/15/2020)"
            result="University of San Carlos, Cebu, Philippines"
            des="Assists the professor during laboratory class hours. Also in charge of maintaining the laboratory room and equipment"
          />
        </div>
      </div>
      
      
    </motion.div>
  );
};

export default Experience;
