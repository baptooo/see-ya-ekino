import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './People.css';
import LazyImage from './LazyImage';
import peoples from '../data/peoples';

class People extends Component {
  state = {
    result: null
  };

  constructor(props) {
    super(props);

    this.index = Object
      .keys(peoples)
      .filter(name => name !== 'default');
  }

  search = (evt) => {
    evt.preventDefault();

    const {value = ''} = evt.target.term;
    const name = this.index.find(name => name.toLowerCase().indexOf(value.toLowerCase()) !== -1);

    switch (true) {
      case Boolean(value && name):
        this.setState({ result: peoples[name], name });
        break;
      case Boolean(value && !name):
        this.setState({ result: peoples.default, name: `Sorry ${value}...` });
        break;
      case !value:
      default:
        this.setState({ result: null });
        break;
    }
  };

  toggleSwag = (evt) => {
    this.setState({ swag: evt.target.checked });
  }

  render() {
    const { result, name, swag } = this.state;
    return (
      <section className={`people${swag ? ' swag' : ''}`}>
        <header className="people__header">
          <h1 className="people__title">People troller</h1>
          <Link to="/">Return home</Link>
          <span className="swag-action">
            <input id="swag" type="checkbox" name="swag" onChange={this.toggleSwag} />
            <label htmlFor="swag">swag</label>
          </span>
        </header>

        <form className="form" action="" onSubmit={this.search}>
          <input placeholder="Enter your name" className="field" name="term" type="text" />
          <button className="submit" type="submit">Go !</button>
        </form>

        {result ? (
          <article className="result">
            <h2 className="result__title">{name}</h2>
            <div className="flex">
              {result.punchlines ? (
                <div>
                  <p>Je n'oublierai pas:</p>
                  {result.punchlines ? (
                    <blockquote className="result__quotes">
                      {result.punchlines.map((value, idx) => (
                        <p key={`punchline-${name}-${idx}`}>{value}</p>
                      ))}
                    </blockquote>
                  ) : null}
                </div>
              ) : null}
              <LazyImage className="result__gif" src={result.gif} alt=""/>
            </div>
            {result.description ? (
              <p className="result__desc">
                {result.description}
              </p>
            ) : null}
          </article>
        ) : null}
      </section>
    )
  }
}

export default People;