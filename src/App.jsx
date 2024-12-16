import { useState } from "react";
import "./App.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Header } from "./components/Header";
import { Articles } from "./components/Articles";

function App() {
  return (
    <>
      <Header />
      <Articles />
    </>
  );
}

export default App;
