import * as React from "react"
import "../css/main.css"
import projects from "../content/projects"
import minorProjects from "../content/minor-projects"
import experiences from "../content/experiences"
import ProjectCard from "../components/project-card"
import ProjectListItem from "../components/project-list-item"

      const IndexPage = () => {
        return (
          <main>
            <section id="about">
              <p>
                Hi! I'm <b>Belle Lim</b>! 👩🏻‍💻
                <br/><br/>
                I am a software engineer passionate about making elegant product designs come to life that push the bounds for the greater good! 
                <b> Tech is boundless</b>, and so is our ability to use it to help others.
                <br/><br/>
                If you want to work together, connect with me! <a href="mailto:bellehlim@gmail.com">bellehlim@gmail.com</a>
              </p>
            </section>

            <section id="background">
            <p class="title"> Background</p>
            <p class="blurb">
              I'm currently a student at Northeastern University studying computer science with a concentration in human-centered computing and a 
              minor in experience design. I am passionate about building polished products end-to-end that prioritize the user
              <br/><br/>
              When I'm not in front of my laptop, you can find me wandering around Boston or New York exploring the cities, bouldering, hanging out 
              with my dog, or cooking! (Check out my food IG @yummyinmybelley!)
              </p>
            </section>

            <section id="experience">
              <p class="title"> Experience</p>
              <div class="blurb">
              {experiences.map((experience, index) => (
                <div key={index} className="experience-entry">
                  <div className="experience-text">
                    <b className="experience-title">{experience.title}</b>
                    <p className="experience-subtitle">{experience.subtitle}</p>
                  </div>
                  <p className="experience-date">{experience.date}</p>
                </div>
              ))}
              </div>
            </section>

            <section id="projects">
            <p class="title"> Featured Projects</p>
            <div class="blurb">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
              <p class="title"> Other Projects</p>
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