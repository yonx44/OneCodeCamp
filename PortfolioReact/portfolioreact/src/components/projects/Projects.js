import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="Accomplished Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="HTML Pizza Form"
          des=" Simple pizza order form using the very basic language of programming, HTML. "
          src={projectOne}
          githubLink="https://github.com/yonx44"
          websiteLink=""
        />
        <ProjectsCard
          title="Responsive Web Design Block"
          des=" This activity utilzed the use of Media Queries in CSS in order to create webpages that can be viewed on muitipe devices. "
          src={projectTwo}
          githubLink="https://github.com/yonx44"
          websiteLink=""
        />
        <ProjectsCard
          title="Bootstrap Weather App"
          des=" Interactive weather app created using Boostrap Framework for CSS Design. "
          src={projectThree}
          githubLink="https://github.com/yonx44"
          websiteLink=""
        />
        <ProjectsCard
          title="Javascript Timer"
          des=" To create a website which plays Cartoon/Show songs' audio when user clicks on a particular cartoon image. Using HTML,CSS,JS,Bootstrap to bundle the songs we loved during our childhood!"
          src={projectFour}
          githubLink="https://github.com/yonx44"
          websiteLink=""
        />
        <ProjectsCard
          title="Click Counter"
          des=" This is a weather website created using HTML,CSS,Bootstrap,Node.js,Express.js and OpenWeather API ."
          src={projectFive}
          githubLink="https://github.com/yonx44"
          websiteLink=""
        />
        <ProjectsCard
          title="React Bootstrap Website"
          des=" This project uses various libraries like to detect human face from a given image, detect a face from a live -webcam video and to create an attendance system."
          src={projectSix}
          githubLink="https://github.com/yonx44"
          websiteLink=""
        />
      </div>
    </section>
  );
}

export default Projects