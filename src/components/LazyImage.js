import React, { Component } from 'react';

export default class extends Component {
  state = {
    loaded: false,
    error: false
  };

  componentDidMount() {
    this.loader = new Image();

    this.loader.onload = () => {
      this.setState({ loaded: true, loading: false });
    };

    this.loader.onerror = () => {
      this.setState({ loaded: false, loading: false });
    };

    this.loader.src = this.props.src;
  }

  lazyLoad(src) {
    this.loader.src = src;

    this.setState({ loading: true });
  }

  componentWillReceiveProps({ src }) {
    if (src !== this.props.src) {
      this.setState({ loaded: false });
      this.lazyLoad(src);
    }
  }

  render() {
    return (
      this.state.loading ? (
        <marquee>loading...</marquee>
      ) : (
        <img {...this.props} alt=""/>
      )
    );
  }
}