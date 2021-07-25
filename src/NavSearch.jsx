import React, { useState, useEffect, useRef } from "react";
const NavSearch = (props) => {
  const inputE1 = useRef("");

  function handleInput(e) {
    props.Searchkeyword(e.target.value);
  }

  return (
    <>
      <nav class="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-white">
        <div class="container">
          <a className="Clients">
            <span>Clients</span>
          </a>
          <div class="form-group">
            <div class="input-group">
              <input
                ref={inputE1}
                value={props.input}
                type="text"
                class="form-control w-100   "
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
              class="btn btn-primary"
              type="button"
            >
              Search
            </button>
          </div>

          <div>
            <button class="btn btn-primary" type="button">
              Add New Customer
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavSearch;
