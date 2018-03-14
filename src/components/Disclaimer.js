import React from 'react';
import { Link } from 'react-router-dom';
import './Disclaimer.css';

const thanks = <a target="_blank" href="https://rickrolled.fr/" rel="noopener noreferrer">Thank you ekino !</a>;

export default () => (
  <section className="disclaimer layout">
    <h1>
      Turn up the volume <span role="img" aria-label="speaker emoji">🔊</span>
    </h1>
    <article className="article" lang="fr">
      <p>Cette interface est destinée à remercier toutes les personnes avec qui j’ai pu travailler
        durant mes 4 années chez ekino.
        Si nous n’avons jamais travaillé ensemble ou que vous ne souhaitez pas visualiser
        ce contenu, en voici un qui vous sera certainement plus approprié : {thanks}
      </p>
    </article>
    <hr className="separator" />
    <article className="article" lang="en">
      <p>This interface aims to thanks every coworker I've been working with during my 4 years
        at ekino. If we have never worked together or you don't want to view this content, here
        is a more appropriated one for you: {thanks}
      </p>
    </article>

    <h2 className="start">
      <Link to="/universal">Start !</Link>
    </h2>
  </section>
)