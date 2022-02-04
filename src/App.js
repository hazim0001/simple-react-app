import * as React from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Bookings from "./components/Bookings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="bookings" element={<Bookings />} />
        </Route>
      </Routes>

      <div className="mx-5"></div>
    </div>
  );
}

export default App;
