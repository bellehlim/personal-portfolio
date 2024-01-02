import * as React from "react"
import "../css/main.css"
import projects from "../content/projects"
import minorProjects from "../content/minor-projects"
import experiences from "../content/experiences"
import ProjectCard from "../components/project-card"
import ProjectListItem from "../components/project-list-item"
import headshot from "../images/headshot.jpeg"

const IndexPage = () => {
  return (
    <main>
      <nav>
        <div class="container">
          <ul>
            <li class="about"><a href="#about">About</a></li>
            <li class="experience"><a href="#experience">Experience</a></li>
            <li class="projects"><a href="#projects">Projects</a></li>
          </ul>
        </div>
      </nav>
      <section id="about">
        <img class="about-photo" src={headshot}/>
        <div class="about-blurb"> 
          <p class="headline"> Hi, I'm <b>Belle Lim</b> 👩🏻‍💻 </p>
          <img src="https://cdn1.iconfinder.com/data/icons/hand-drawn-marker/512/line_marker23-512.png"class="underline"/>
          <p>
            I am a user-driven software developer and product strategist passionate about bringing elegant designs to life.
            <br/><br/>
            {/* If you want to work together, connect with me! <a href="mailto:bellehlim@gmail.com">bellehlim@gmail.com</a> */}
          </p>
        </div>
      </section>

      <section>
      <div class="title" id="background"> Background</div>
      <div class="blurb">
        I'm currently a student at Northeastern University studying computer science with a concentration in human-centered computing and a 
        minor in experience design graduating in May 2024. I am passionate about building polished products end-to-end that prioritize the user and have true, 
        measurable impact. 
        <br/><br/>
        I have 2 years of industry experience developing impactful software where I worked closely alongside other teams to understand 
        the big picture of the what and why of exciting new features. I am always ready to dive in and figure out the best solution from multiple angles to drive the best result! 
        <br/><br/>
        When I'm not in front of my laptop, you can find me wandering around Boston or New York exploring the cities, bouldering, hanging out 
        with my dog, or cooking! (Check out my food IG <a href="https://www.instagram.com/yummyinmybelley">@yummyinmybelley</a>)
        </div>
      </section>

      <section>
        <div class="title" id="experience"> Experience</div>
        <div class="blurb">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-entry">
            <div className="experience-text">
              <a href={experience.link}><h3 className="experience-title">{experience.icon} &nbsp; {experience.title}</h3></a>
              <p className="experience-subtitle">{experience.subtitle}</p>
            </div>
            <p className="experience-date">{experience.date}</p>
          </div>
        ))}
        </div>
      </section>

      <section>
        <div class="title" id="projects"> Featured Projects</div>
        <div class="blurb">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div class="title"> Other Projects</div>
        <div class="blurb">
          {minorProjects.map((project, index) => (
            <ProjectListItem key={index} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Belle Lim</title>