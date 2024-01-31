import React from "react";
import Chatbot from "./Chatbot";
import Card from "./Card";
import Subscription from "./Subscription";
import { useParams } from "react-router-dom";

const Body = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7];
  const params = useParams();
  const cardId = params.cardId;
  return (
    <div
      className="position-relative p-3 px-2 px-sm-5 d-grid flex-row flex-wrap  justify-content-begin "
      style={{ minHeight: "calc(100vh - 175px)" }}
    >
      <Subscription />
      {cards.find((item) => item == cardId) && <Card id={cardId} />}
      {cards.map((card) => {
        if (card != cardId) return <Card key={card} id={card} />;
      })}
      <Chatbot />
    </div>
  );
};

export default Body;
