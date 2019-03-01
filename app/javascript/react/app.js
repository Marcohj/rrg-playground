import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { client } from "./client";
import { AppContainer } from "./containers/app/index";
import { CustomersContainer } from "./containers/customers/index";
import { BasketContainer } from "./containers/basket/index";
import { ShippingContainer } from "./containers/shipping/index";
import { ConfirmationContainer } from "./containers/confirmation/index";

render(
  <ApolloProvider client={client}>
    <Router>
      <AppContainer>
        <Route path="/" exact component={CustomersContainer} />
        <Route path="/basket/:id" component={BasketContainer} />
        <Route path="/shipping/:id/:quantity" component={ShippingContainer} />
        <Route path="/confirmation/:id" component={ConfirmationContainer} />
      </AppContainer>
    </Router>
  </ApolloProvider>,
  document.getElementById("app")
);
