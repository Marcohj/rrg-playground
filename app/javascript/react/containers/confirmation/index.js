import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { ORDER_QUERY } from "./queries";

export const ConfirmationContainer = ({ match }) => {
  const orderId = parseInt(match.params.id);

  return (
    <Query query={ORDER_QUERY} variables={{ orderId }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        const { order } = data;

        return (
          <div>
            <h1>Your order</h1>

            <div className="card mb-2">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <div>{order.fullName}</div>
                </div>
              </div>

              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-sm-4">
                    <strong>iBeacon 2019 limited edition</strong>
                  </div>
                  <div className="col-sm-4">{order.quantity}</div>
                  <div className="col-sm-4">
                    <div className="text-right">
                      Total price: {order.totalPrice} $
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-body">
                <h2>{order.fullName}</h2>
                <div className="row">
                  <div className="col-sm-4">
                    {order.address1}
                    {order.address2 && `, ${order.address2}`}
                  </div>
                  <div className="col-sm-4">
                    {order.postalCode}, {order.city}
                  </div>
                  <div className="col-sm-4">{order.country}</div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};
