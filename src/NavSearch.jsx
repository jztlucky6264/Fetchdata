import React, { useState, useEffect, useRef } from "react";
const NavSearch = (props) => {
  const inputE1 = useRef("");

  function handleInput(e) {
    props.Searchkeyword(e.target.value);
  }

  return (
    <>
      <nav className="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-white">
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-4">
              <a className="Clients">
                <span>Clients</span>
              </a>
            </div>
            <div className="form-group col-12 col-md-4">
              <div className="input-group">
                <input
                  ref={inputE1}
                  value={props.input}
                  type="text"
                  className="form-control w-100   "
                  placeholder="Search by customer name/email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <button className="btn btn-primary" type="button">
                Add New Customer
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavSearch;
