import React, {Component} from 'react';
import './App.css';
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";
import RouteConfigs from "./RouteConfigs"
const client = new ApolloClient({uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RouteConfigs />
      </ApolloProvider>
    );
  }
}

export default App;
