import React, {Component} from 'react';
import './App.css';
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";
import HomeLayout from "./components/HomeLayout";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Callback from './components/Callback';

const client = new ApolloClient({uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path="/" component={HomeLayout}/>
            <Route path="/callback" component={Callback}/>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
