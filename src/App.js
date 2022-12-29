import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CsvToJsonConvertor } from "./components/HomePage/CsvToJsonConvertor";
import { EmployeDetails } from "./components/HomePage/EmployeDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeDetails />} />
          <Route path="/csv" element={<CsvToJsonConvertor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
