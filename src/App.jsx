import { useState } from "react";
import "./App.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Header } from "./components/Header";
import { ErrorPage } from "./components/ErrorPage";
import { Articles } from "./components/Articles";
import { Article } from "./components/Article";
import { Topic } from "./components/Topic";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<ErrorPage path={"path"} />}></Route>

        <Route path="/" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
        <Route path="/topic/:topic" element={<Topic />}></Route>
      </Routes>
    </>
  );
}

export default App;
