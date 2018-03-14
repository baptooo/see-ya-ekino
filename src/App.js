import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Disclaimer from './components/Disclaimer';
import Universal from './components/Universal';
import Projects from './components/Projects';
import People from './components/People';
import Konami from './components/Konami';

class App extends Component {
  render() {
    return (
      <Router>
        <Konami>
          <Route exact path="/" component={Disclaimer} />
          <Route path="/universal" component={Universal} />
          <Route path="/projects" component={Projects} />
          <Route path="/people" component={People} />
        </Konami>
      </Router>
    );
  }
}

export default App;
