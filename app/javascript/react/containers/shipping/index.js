import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query, Mutation } from "react-apollo";
import { SHIPPING_QUERY, CREATE_ORDER } from "./queries";
import Input from "../../components/input/index";

export class ShippingContainer extends Component {
  getDefaultState = props => {
    return {
      customerId: parseInt(props.match.params.id),
      quantity: parseInt(props.match.params.quantity),
      customer: {}
    };
  };

  state = this.getDefaultState(this.props);

  loadCustomerData = customer => {
    this.setState({
      ...customer
    });
    return false;
  };

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event, createOrder) => {
    const { customer, quantity, customerId } = this.state;

    event.preventDefault();
    createOrder({ variables: { ...this.state } }).then(result => {
      if (result) {
        const { id } = result.data.createOrder;
        window.location = `/confirmation/${id}`;
      }
    });
  };

  render() {
    const {
      match: { params }
    } = this.props;

    const {
      customerId,
      quantity,
      fullName,
      address1,
      address2,
      postalCode,
      city,
      country
    } = this.state;

    return (
      <Mutation mutation={CREATE_ORDER}>
        {createOrder => (
          <Query query={SHIPPING_QUERY} variables={{ customerId, quantity }}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              const {
                customer,
                calculateBeaconTotalPrice: { totalPrice }
              } = data;

              return (
                <form
                  onSubmit={event => this.handleFormSubmit(event, createOrder)}
                >
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

                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <strong>iBeacon 2019 limited edition</strong>
                        </div>
                        <div className="col-sm-4">{quantity}</div>
                        <div className="col-sm-4">
                          <div className="text-right">
                            Total price: {totalPrice} $
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2">
                    <div className="card-body">
                      <h2 className="d-flex">
                        Shipping details
                        <button
                          type="button"
                          onClick={() => this.loadCustomerData(customer)}
                          className="btn btn-outline-primary btn-sm ml-auto"
                        >
                          Load your details
                        </button>
                      </h2>

                      <div className="form-group">
                        <label htmlFor="fullName">Full name</label>
                        <Input
                          name="fullName"
                          placeholder="Enter your full name"
                          value={fullName}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-group col-sm-6">
                          <label htmlFor="address">Address</label>
                          <Input
                            name="address1"
                            placeholder="Enter your address"
                            value={address1}
                            onChange={this.handleInputChange}
                            required
                          />
                        </div>

                        <div className="form-group col-sm-6">
                          <label htmlFor="address">Address details</label>
                          <Input
                            name="address2"
                            placeholder="Enter your floor etc."
                            value={address2}
                            onChange={this.handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-sm-6">
                          <label htmlFor="address">Postal code</label>
                          <Input
                            name="postalCode"
                            placeholder="Enter your postal code"
                            value={postalCode}
                            onChange={this.handleInputChange}
                            required
                          />
                        </div>

                        <div className="form-group col-sm-6">
                          <label htmlFor="address">City</label>
                          <Input
                            name="city"
                            placeholder="Enter your city"
                            value={city}
                            onChange={this.handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="address">Country</label>
                        <Input
                          name="country"
                          placeholder="Enter your country"
                          value={country}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-lg btn-success"
                    />
                  </div>
                </form>
              );
            }}
          </Query>
        )}
      </Mutation>
    );
  }
}
