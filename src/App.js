import React from "react";

import Navbar from "./Navbar";
import "../node_modules/argon-dashboard-react/src/assets/css/argon-dashboard-react.min.css";

import Datatable from "./DataTable";
const App = () => {
  return (
    <div>
      <Navbar />
      <Datatable />
    </div>
  );
};

export default App;
