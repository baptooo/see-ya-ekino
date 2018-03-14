import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import './Universal.css';

const Iframe = styled.iframe`
  width: 1024px;
  height: 600px;
  border: 0;
`;

class Universal extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/projects')
    }, 23000)
  }

  render() {
    return (
      <section className="universal">
        <header>
          <Link to="/projects">Skip intro</Link>
        </header>
        <Iframe id="universal-player" src="https://www.youtube-nocookie.com/embed/9j8ssdqVrRA?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
      </section>
    )
  }
}

export default withRouter(Universal);