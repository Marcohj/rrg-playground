import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { CUSTOMER_QUERY, BEACON_TOTAL_PRICE_QUERY } from "./queries";

export const BasketContainer = ({ match }) => {
  const [quantity, setQuantity] = useState(0);
  const customer_id = parseInt(match.params.id);

  return (
    <Query query={CUSTOMER_QUERY} variables={{ customer_id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        const { customer } = data;
        return (
          <div>
            <h1>Create an order</h1>

            <div className="card mb-2">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <div>{customer.fullName}</div>
                  <div>
                    {customer.isSubscribed ? (
                      <span className="badge badge-success badge-pill">
                        Subscribed
                      </span>
                    ) : (
                      <span className="badge badge-warning badge-pill">
                        Not subscribed
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {customer.isSubscribed && (
                <Fragment>
                  {quantity > customer.subscriptionSeats && (
                    <div className="alert alert-warning text">
                      You are over your Subscription's limit!
                    </div>
                  )}
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-sm-4">
                        <strong>iBeacon 2019 limited edition</strong>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Quantity</span>
                          </div>
                          <input
                            name="quantity"
                            id="quantity"
                            className="form-control"
                            type="number"
                            value={quantity}
                            onChange={event =>
                              setQuantity(parseInt(event.target.value))
                            }
                          />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <Query
                          query={BEACON_TOTAL_PRICE_QUERY}
                          variables={{ quantity }}
                        >
                          {({ data }) => {
                            const { calculateBeaconTotalPrice } = data;

                            return (
                              <div className="text-right">
                                Total price:{" "}
                                {calculateBeaconTotalPrice &&
                                  calculateBeaconTotalPrice.totalPrice}{" "}
                                $
                              </div>
                            );
                          }}
                        </Query>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>

            {customer.isSubscribed ? (
              <div className="text-right">
                <Link to={`/shipping/${customer_id}/${quantity}`}>
                  <button
                    disabled={quantity < 1}
                    className="btn btn-lg btn-success"
                  >
                    Continue
                  </button>
                </Link>
              </div>
            ) : (
              <div className="alert alert-warning" role="alert">
                <h4 className="alert-heading">Sorry!</h4>
                <p>
                  You have to be a subscriber to order our awesome iBeacons.
                </p>
              </div>
            )}
          </div>
        );
      }}
    </Query>
  );
};
