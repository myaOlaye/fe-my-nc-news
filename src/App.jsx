import "./App.css";
import { Header } from "./components/Header";
import { ErrorPage } from "./components/ErrorPage";
import { Articles } from "./components/Articles";
import { Article } from "./components/Article";
import { Login } from "./components/Login";
import { AccountPage } from "./components/AccountPage";
import { SignUp } from "./components/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<ErrorPage path={"path"} />}></Route>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
        <Route path="/topic/:topic" element={<Articles />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
