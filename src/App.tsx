import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Title from "./components/Title";
import { Button } from "@mui/material";
import DataTable from "./components/Table";

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <DataTable></DataTable>
    </div>
  );
}

export default App;
