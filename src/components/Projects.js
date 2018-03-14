import React, {Component, Fragment} from 'react';
import projects from '../data/projects';
import './Projects.css';

import baptooo from '../assets/baptooo.jpg';
import konami from '../assets/konami.png';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="fade" />
        <section className="star-wars">
          <div className="crawl">
            <header className="intro-header">
              <h1>2014 - 2018</h1>
              <p>TL;DR: Thank you</p>
            </header>
            {projects.map((project, index) => console.log(project) || (
              <article key={`project-${index}`}>
                <header className="title">
                  <p>Episode {project.episode}</p>
                  <h1>{project.title}</h1>
                </header>
                {project.content.map((paragraph, idx) => (
                  <p key={`${project.title}-content-${idx}`}>{paragraph}</p>
                ))}
                {project.team ? (
                  <Fragment>
                    <h3>{project.special ? 'Special Thanks' : 'Merci à l\'équipage :'}</h3>
                    <ul>
                      {project.team.map((member, idx) => (
                        <li key={`${project.title}-team-${idx}`}>{member}</li>
                      ))}
                    </ul>
                  </Fragment>
                ) : null}
              </article>
            ))}
            <h1>Bonne continuation à vous tous !</h1>

            <div className="pictures">
              <img className="picture" src={baptooo} alt=""/>

              <h1>To continue, do a konami code</h1>
              <img className="picture" src={konami} alt=""/>
            </div>
          </div>
        </section>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1636470&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
      </div>
    )
  }
}

export default Projects;