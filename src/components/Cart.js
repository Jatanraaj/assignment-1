import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, increaseQuantity } from "../actions/cartActions";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import Loader from "./Loader";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientProfession, setRecipientProfession] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleRemove = (itemId) => {
    const index = cartItems.findIndex((item) => item.id === itemId);

    if (index !== -1) {
      dispatch(removeFromCart(itemId, cartItems));
    }
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId, cartItems));
  };

  const handleClear = () => {
    dispatch(clearCart());
    setOrderPlaced(false);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);

  const handleSendEmail = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (!recipientEmail || !validateEmail(recipientEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!recipientName) {
      alert("Please enter your name.");
      return;
    }

    setLoading(true);

    fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems, recipientEmail, recipientName, recipientProfession }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setOrderPlaced(true);
        dispatch(clearCart());
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 carthead" id="prodhead">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2
          className="text-center"
          style={{ fontFamily: "cursive", backgroundColor: "Skyblue", padding: "20px" }}
        >
          Your cart is empty.
        </h2>
      ) : (
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => {
              if (item.count > 0) {
                return (
                  <tr key={`${index}-${item.id}`}>
                    <td>
                      <img src={item.image} alt={item.name} className="mr-3" />
                      {item.name}
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button
                          variant="outline-secondary"
                          className="btn-quantity"
                          onClick={() => handleRemove(item.id)}
                        >
                          -
                        </Button>
                        <span className="mx-2">{item.count}</span>
                        <Button
                          variant="outline-secondary"
                          className="btn-quantity"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td>${item.price * item.count}</td>
                    <td>
                      <Button
                        variant="outline-danger"
                        onClick={() => handleRemove(item.id)}
                      >
                        <RiDeleteBinLine />
                      </Button>
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </Table>
      )}

      <div className="text-right mt-5">
        <h5>Total: ${total}</h5>
        {loading ? (
          <Button variant="outline-secondary" disabled>
            <Loader />
          </Button>
        ) : orderPlaced ? (
          <>
            <h4 className="text-success">Order has been placed.</h4>
            <Button variant="outline-secondary" onClick={handleClear}>
              Clear Cart
            </Button>
          </>
        ) : (
          <div>
            <form style={{backgroundColor:'white' ,padding:'20px', borderRadius:'20px'}}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    type="email"
                    label="Email"

                    fullWidth
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    type="text"
                    label="Name"

                    fullWidth
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    type="textarea"
                    label="Address"

                    fullWidth
                    value={recipientProfession}
                    onChange={(e) => setRecipientProfession(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outline-secondary" onClick={handleSendEmail}>
                    Place Order
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
