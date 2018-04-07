import React, {Component} from 'react';
import './App.css';
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const client = new ApolloClient({uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact path="/" component={Home}/>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
