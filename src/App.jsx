import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { Scrollbar } from "react-scrollbars-custom";

function App() {
  return (
    <>
      <Header />
      {/* <Scrollbar style={{ width: 250, height: 250 }}> */}
      <Body />
      {/* </Scrollbar> */}
      <Footer />
    </>
  );
}

export default App;
