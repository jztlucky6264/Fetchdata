import React, { useState, useEffect } from "react";
import axios from "axios";
import NavSearch from "./NavSearch";
const DataTable = (props) => {
  const [data, setData] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const init = async () => {
      const { data } = await axios.get(
        "https://run.mocky.io/v3/d53400a3-6126-495e-9d16-0b4414b537b3"
      );
      let result = `${data} }`;
      const newData = JSON.parse(result);
      setData(newData);
      console.log(newData);
    };
    return init();
  }, []);

  if (!data) {
    return (
      <div>
        <NavSearch />
      </div>
    );
  }
  const searchHandler = (searchInput) => {
    setSearchInput(searchInput);
  };

  return (
    <>
      <NavSearch Searchkeyword={searchHandler} input={searchInput} />
      <div class="table-responsive">
        <div>
          <table class="table align-items-center">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="sort" data-sort="name">
                  CLIENT ID
                </th>
                <th scope="col" class="sort" data-sort="budget">
                  CLOSING AGENT
                </th>
                <th scope="col" class="sort" data-sort="status">
                  COMPANY
                </th>
                <th scope="col">ORDER</th>
                <th scope="col" class="sort" data-sort="completion">
                  INVOICE PAID
                </th>
                <th scope="col">INVOICE PENDING</th>
              </tr>
            </thead>
            <tbody>
              {data.clients
                .filter((val) => {
                  if (searchInput === "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchInput.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((client) => (
                  <tr key={client.id}>
                    <th>{client.id}</th>
                    <th>{client.name}</th>
                    <th>{client.company}</th>
                    <th>{client.orderId}</th>
                    <th>{client.invoicepaid}</th>
                    <th>{client.invoicePending}</th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
