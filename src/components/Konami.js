import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Konami extends Component {
  componentDidMount() {
    const konami = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
    ];

    let progress = konami.slice(0);

    window.onkeydown = ({key}) => {
      const [current] = progress;

      switch (true) {
        case key === current:
          progress.shift();
          break;
        case key !== current:
          (progress = konami.slice(0));
          break;
      }

      if (!progress.length) {
        this.props.history.push('/people');
        window.onkeydown = null;
      }
    };
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(Konami);