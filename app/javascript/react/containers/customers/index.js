import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { CUSTOMERS_QUERY } from "./queries";

export const CustomersContainer = () => (
  <div className="row">
    <div className="col">
      <h1>
        Beacon customers <small className="text-muted">Select one</small>
      </h1>
      <div className="list-group">
        <Query query={CUSTOMERS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.customers.edges.map(
              ({ node: { id, fullName, isSubscribed, orders } }) => (
                <Link
                  key={id}
                  to={`/basket/${id}`}
                  className="row list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <div className="col-12 col-sm">{fullName}</div>
                  <div className="col-12 col-sm text-right">
                    <span className="badge badge-primary badge-pill mr-2">
                      Id: {id}
                    </span>
                    <span className="badge badge-secondary badge-pill mr-2">
                      Orders: {orders.length}
                    </span>
                    {isSubscribed ? (
                      <span className="badge badge-success badge-pill">
                        Subscribed
                      </span>
                    ) : (
                      <span className="badge badge-warning badge-pill">
                        Not subscribed
                      </span>
                    )}
                  </div>
                </Link>
              )
            );
          }}
        </Query>
      </div>
    </div>
  </div>
);
