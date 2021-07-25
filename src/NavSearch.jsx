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
          <a className="Clients">
            <span>Clients</span>
          </a>
          <div className="form-group">
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

          <div>
            <button
              onClick={props.onSearch}
              className="btn btn-primary"
              type="button"
            >
              Search
            </button>
          </div>

          <div>
            <button className="btn btn-primary" type="button">
              Add New Customer
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavSearch;
