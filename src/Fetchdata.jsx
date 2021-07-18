import React, { useState, useEffect } from "react";
import axios from "axios";
const Fetchdata = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const init = async () => {
      const { data } = await axios.get(
        "https://run.mocky.io/v3/d53400a3-6126-495e-9d16-0b4414b537b3"
      );

      let result = `${data} }`;
      const newData = JSON.parse(result);
      setData(newData);
    };
    return init();
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div>
        {data.clients.map((client) => (
          <h1 key={client.id}>{client.name}</h1>
        ))}
      </div>
    </>
  );
};

export default Fetchdata;
