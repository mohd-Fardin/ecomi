import React from "react";
import { items } from "./data";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ items, cart, setCart }) => {

  
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };

    setCart([...cart, obj]);
    console.log("Cart element =", cart);
    toast.success("your item is added", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="container my-5">
        <div className="row">
          {items.map((Product) => {
            return (
              <>
                <div
                  // key={Product.id}
                  className="col-lg-4 col-md-6 my-3 text-center"
                >
                  <div className="card" style={{ widows: "18rem" }}>
                    <div>
                      <img
                        src={Product.imgSrc}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{Product.title}</h5>
                      <p className="card-text">{Product.description}</p>
                      <button href="#" class="btn btn-primary mx-3">
                        {Product.price} ₹
                      </button>
                      <button
                        onClick={() =>
                          addToCart(Product.id,Product.price,Product.title,Product.description,Product.imgSrc)
                        }
                        href="#"
                        class="btn btn-warning"
                      >
                        ADD To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
