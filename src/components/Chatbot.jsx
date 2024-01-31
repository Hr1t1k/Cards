import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Clipboard from "./Clipboard";
import Subscription from "./Subscription";
import * as bootstrap from "bootstrap";
import LoremIpsum from "react-lorem-ipsum";

const Chatbot = () => {
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState("");
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [conversationCnt, setConversationCnt] = useState(0);
  const [show, setShow] = useState(false);

  const predefinedQuestion = [
    "What's the date today?",
    "What can you do?",
    "How to share cards",
  ];
  const [conversation, setConversation] = useState([
    { query: "", response: "" },
  ]);

  function getResponse(q) {
    setProcessing(true);
    setTimeout(() => {
      const newConversationItem = {
        query: q,
        response: <LoremIpsum p={1} avgWordsPerSentence={3} />,
      };
      if (conversation.length > 0) {
        setConversation((prevConversation) => {
          const updatedConversation = [...prevConversation];
          updatedConversation[updatedConversation.length - 1] =
            newConversationItem;
          return updatedConversation;
        });
      } else {
        // If there are no existing items, simply add the new conversation item
        setConversation([newConversationItem]);
      }
      setQuery("");
      setProcessing(false);
    }, 3000);
  }
  function startNewChat() {
    if (count == 4) {
      setShow(true);
      return;
    }
    setQuery("");
    setCount(count + 1);
    setConversationCnt(conversation.length);
    setConversation((prevConversation) => [
      ...prevConversation,
      { query: "", response: "" },
    ]);
  }
  const quotes = [
    "Life isn’t about getting and having, it’s about giving and being.",
    "Do what you can, where you are, with what you have.",
    "Dreaming, after all, is a form of planning.",
    "If you can dream it, you can achieve it.",
  ];
  const LoadingComponent = () => (
    <div className="loading-overlay text-center">
      <div className="loading-spinner"></div>
      <p className="loading-quote">
        {quotes[Math.floor(Math.random(quotes.length) * quotes.length)]}
      </p>
    </div>
  );
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (active) setHeight(ref.current.clientHeight);
  }, [active]);
  useLayoutEffect(() => {
    function updateHeight() {
      if (active) {
        setHeight(ref.current.clientHeight);
      }
    }
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [active]);
  return (
    <>
      <Subscription show={show} setShow={setShow} />
      {!active && (
        <div
          className="d-flex position-fixed chatbot-hidden rounded-circle justify-content-center align-items-center btn p-0 m-0"
          onClick={() => {
            setActive(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-chat-right-dots-fill "
            viewBox="0 0 16 16"
          >
            <title>Chatbot</title>
            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
          </svg>
        </div>
      )}
      {active && (
        <>
          <div
            className="card chatbot position-fixed active-div shadow-4 rounded-4"
            ref={ref}
          >
            <div
              className="card-header  d-flex justify-content-between align-items-center rounded-top-4"
              style={{ backgroundColor: "#F3D7CA" }}
            >
              <div className="d-flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-arrow-counterclockwise btn p-0 m-0"
                  onClick={() => {
                    conversationCnt > 0 &&
                      setConversationCnt((prev) => prev - 1);
                  }}
                  viewBox="0 0 16 16"
                >
                  <title>Prev</title>
                  <path
                    fill-rule="evenodd"
                    d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-arrow-clockwise btn p-0 m-0 "
                  onClick={() => {
                    conversationCnt < conversation.length - 1 &&
                      setConversationCnt((prev) => prev + 1);
                  }}
                  viewBox="0 0 16 16"
                >
                  <title>Next</title>
                  <path
                    fill-rule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                </svg>
              </div>
              <span
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Chatbot
              </span>
              <svg
                onClick={() => {
                  setActive(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-x btn  p-0 m-0 "
                viewBox="0 0 16 16"
              >
                <title>Close</title>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
            <div className="card-body m-0 p-0 your-component">
              <>
                <div
                  className={`p-3 overflow-y-scroll `}
                  style={{
                    height: `calc(${height}px - 120px)`,
                    overflowY: "scroll",
                  }}
                >
                  {processing ? (
                    <LoadingComponent />
                  ) : (
                    <>
                      {conversation[conversationCnt].query != "" && (
                        <div className="mb-3 mx-2 text-end d-flex justify-content-end ">
                          <p
                            className="rounded-4 p-2 px-4 mb-2 h-100"
                            style={{
                              backgroundColor: "#F3CCF3",
                              height: "fit-content",
                            }}
                          >
                            {conversation[conversationCnt].query}
                          </p>
                        </div>
                      )}
                      <div className="d-flex flex-row gap-2 h-100">
                        <div className="h-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-robot"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                          </svg>
                        </div>
                        <div
                          className={`${
                            conversation[conversationCnt].query != ""
                              ? "d-flex flex-row gap-2 h-100"
                              : ""
                          }`}
                        >
                          {conversation[conversationCnt].query == "" ? (
                            <>
                              <p
                                className="rounded-4 p-2 mb-2"
                                style={{ backgroundColor: "white" }}
                              >
                                Great to see you here!
                              </p>
                              <p
                                className="rounded-4 p-2"
                                style={{ backgroundColor: "white" }}
                              >
                                What information are you looking for? Please use
                                the navigation below or ask me anything.
                              </p>
                              <div className="predefined-questions d-flex flex-row flex-wrap justify-content-center gap-3">
                                {predefinedQuestion.map((q, index) => {
                                  return (
                                    <>
                                      <div
                                        className=" rounded-5 p-2 btn object-fit-contain text-nowrap"
                                        style={{
                                          backgroundColor: "#F3D7CA",
                                        }}
                                        key={index}
                                        onClick={() => {
                                          getResponse(q);
                                        }}
                                      >
                                        {q}
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            </>
                          ) : (
                            <>
                              <p
                                className="rounded-4 p-2 px-3 mb-2 "
                                style={{
                                  backgroundColor: "white",
                                  height: "fit-content",
                                }}
                              >
                                {conversation[conversationCnt].response}
                              </p>
                              <Clipboard
                                content={conversation[conversationCnt].response}
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {conversation[conversationCnt].query == "" ? (
                  <div
                    className="input-group  rounded-4 position-absolute bottom-0 shadow-none"
                    style={{ height: "50px" }}
                  >
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                      className="form-control rounded-0 rounded-bottom-4 shadow-none border-gray"
                      placeholder="Ask me anything"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="bi bi-send position-absolute btn p-0 m-0 "
                      onClick={() => {
                        getResponse(query);
                      }}
                      style={{
                        right: "15px",
                        bottom: "15px",
                        zIndex: "5",
                        opacity: query == "" ? 0.5 : 1,
                        transition: "opacity 0.5s ease",
                      }}
                      viewBox="0 0 512 512"
                    >
                      <title>Send</title>
                      <path d="M16,464,496,256,16,48V208l320,48L16,304Z" />
                    </svg>
                  </div>
                ) : (
                  <div
                    className="rounded-0 rounded-bottom-3 position-absolute bottom-0 btn btn-primary shadow-none text-center w-100 d-flex justify-content-center align-items-center"
                    style={{ height: "50px" }}
                    onClick={() => {
                      startNewChat();
                    }}
                  >
                    <h6 className="">Start the chat again</h6>
                  </div>
                )}
              </>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Chatbot;
