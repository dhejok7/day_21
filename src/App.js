import { useState } from "react";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Section from "./components/Section";
import * as React from "react";
// import Box from '@mui/material/Box';
import Rating from "@mui/material/Rating";
//import Typography from '@mui/material/Typography';

function App() {
  let [count, setCount] = useState(0);
  let [toggle, setToggle] = useState(true);
  let [toggle2, setToggle2] = useState(true);
  let [toggle3, setToggle3] = useState(true);
  const [value1, setValue1] = React.useState(2);
  const [value2, setValue2] = React.useState(2);
  const [value3, setValue3] = React.useState(2);

  return (
    <>
      <Navbar data={{ count, setCount }} />{" "}
      {/* imported from components folder */}
      {/* <Header /> */} {/* imported from components folder */}
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* card 1 */}
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Fancy Product</h5>
                    {/* <!-- Product price--> */}
                    $40.00
                  </div>
                  {/* rating component */}
                  <div className="text-center card-body p-4">
                    <Rating
                      name="simple-controlled"
                      value1={value1}
                      onChange={(event, newValue) => {
                        setValue1(newValue);
                      }}
                    />
                  </div>
                  {/* end of  rating component*/}
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {toggle ? (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {
                          setCount(++count);
                          setToggle(!toggle);
                        }}
                      >
                        Add to cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {
                          setCount(--count);
                          setToggle(!toggle);
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Fancy Product</h5>
                    {/* <!-- Product price--> */}
                    $40.00
                  </div>
                  {/* rating component */}
                  <div className="text-center card-body p-4">
                    <Rating
                      name="simple-controlled"
                      value2={value2}
                      onChange={(event, newValue) => {
                        setValue2(newValue);
                      }}
                    />
                  </div>
                  {/* end of  rating component*/}
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {toggle2 ? (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {
                          setCount(++count);
                          setToggle2(!toggle2);
                        }}
                      >
                        Add to cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {
                          setCount(--count);
                          setToggle2(!toggle2);
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Fancy Product</h5>
                    {/* <!-- Product price--> */}
                    $40.00
                  </div>
                  {/* rating component */}
                  <div className="text-center card-body p-4">
                    <Rating
                      name="simple-controlled"
                      value3={value3}
                      onChange={(event, newValue) => {
                        setValue3(newValue);
                      }}
                    />
                  </div>
                  {/* end of rating component*/}
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {toggle3 ? (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {
                          setCount(++count);
                          setToggle3(!toggle3);
                        }}
                      >
                        Add to cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {
                          setCount(--count);
                          setToggle3(!toggle3);
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
      {/* end of fragment */}
    </>
  );
}

export default App;
