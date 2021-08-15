import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Servicos } from './Servicos';
import { Contato } from './Contato';
import { NossoID } from './NossoID';
import { Feedback } from './Feedback';
import { Layout } from './components/Layout';
import Navbar from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/NossoID" component={NossoID} />
              <Route path="/Contato" component={Contato} />
              <Route path="/servicos" component={Servicos} />
              <Route path="/Feedback" component={Feedback} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
