import React, { useState } from "react";
import Clipboard from "./Clipboard";
import Subscription from "./Subscription";
import * as bootstrap from "bootstrap";

export default () => {
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState("");
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [show, setShow] = useState(false);
  const predefinedQuestion = [
    "What's the date today?",
    "What can you do?",
    "How to share cards",
  ];
  const [conversation, setConversation] = useState(null);
  function getResponse(q) {
    // setProcessing(true);
    setTimeout(() => {
      setConversation({
        query: q,
        response:
          "got the resultVestibulum pharetra dolor lorem, sit amet laoreet purus blandit et. Proin libero risus, fermentum et porttitor non, ornare ut leo. Nunc leo augue, euismod vitae sapien at, dignissim ornare eros. Curabitur ligula dui, egestas in rhoncus non, rutrum vel lectus. Sed mi ipsum, semper et diam ac, rutrum lacinia dui. Suspendisse leo enim, luctus sit amet cursus quis, bibendum et justo. Mauris malesuada pulvinar turpis pharetra hendrerit.",
      });
      setQuery("");
    }, 1000);
  }
  function startNewChat() {
    if (count == 1) {
      setShow(true);
      return;
    }
    setQuery("");
    setCount(count + 1);
    setConversation(null);
  }
  const LoadingComponent = () => (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p className="loading-quote">Loading...</p>
    </div>
  );
  return (
    <>
      <Subscription show={show} setShow={setShow} />
      {!active && (
        <div
          className="d-flex position-fixed rounded-circle justify-content-center align-items-center btn p-0 m-0"
          onClick={() => {
            setActive(true);
          }}
          style={{
            bottom: "40px",
            right: "60px",
            backgroundColor: "#F3D7CA",
            height: "70px",
            width: "70px",
            outline: "none !important",
            border: "none",
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
            className="card position-fixed active-div shadow-4 rounded-4"
            style={{
              width: "22rem",
              height: "32rem",
              bottom: "40px",
              right: "60px",
              backgroundColor: "#F5EEE6",
              maxHeight: "80%",
            }}
          >
            <div
              className="card-header  d-flex justify-content-between align-items-center rounded-top-4"
              style={{ backgroundColor: "#F3D7CA" }}
            >
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
                style={{ border: "none" }}
                viewBox="0 0 16 16"
              >
                <title>Close</title>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
            <div className="card-body m-0 p-0 your-component">
              {/* Default screen when conversation not started */}
              {conversation === null && (
                <div className=" ">
                  <div
                    className={`p-3 overflow-y-scroll `}
                    style={{ minHeight: "calc(100% - 45px)" }}
                  >
                    {processing ? (
                      <LoadingComponent />
                    ) : (
                      <>
                        <div className="d-flex flex-row gap-2">
                          <div>
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
                          <div className="">
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
                          </div>
                        </div>
                        <div className="predefined-questions d-flex flex-row flex-wrap justify-content-center gap-3">
                          {predefinedQuestion.map((q, index) => {
                            return (
                              <>
                                <div
                                  className=" rounded-5 p-2 btn object-fit-contain text-nowrap"
                                  style={{
                                    backgroundColor: "#F3D7CA",
                                    border: "none",
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
                    )}
                  </div>
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
                        border: "none",
                        opacity: query == "" ? 0.5 : 1, // Set initial opacity
                        transition: "opacity 0.5s ease", // Add transition for opacity
                      }}
                      viewBox="0 0 512 512"
                    >
                      <title>Send</title>
                      <path d="M16,464,496,256,16,48V208l320,48L16,304Z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* When received the response  */}
              {conversation != null && (
                <>
                  <div
                    className={`p-3 overflow-y-scroll `}
                    style={{
                      height: "calc(100% - 140px)",
                      overflowY: "scroll",
                    }}
                  >
                    {processing ? (
                      <LoadingComponent />
                    ) : (
                      <>
                        <div className="mb-3 mx-2 text-end d-flex justify-content-end ">
                          <p
                            className="rounded-4 p-2 px-4 mb-2 h-100"
                            style={{
                              backgroundColor: "#F3CCF3",
                              height: "fit-content",
                            }}
                          >
                            {conversation.query}
                          </p>
                        </div>
                        <div className="d-flex flex-row gap-2 h-100 ">
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
                          <div className="d-flex flex-row gap-2 h-100 ">
                            <p
                              className="rounded-4 p-2 px-3 mb-2 "
                              style={{
                                backgroundColor: "white",
                                height: "fit-content",
                              }}
                            >
                              {conversation.response}
                            </p>
                            <Clipboard content={conversation.response} />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div
                    className="rounded-0 rounded-bottom-3 position-absolute bottom-0 btn btn-primary shadow-none text-center w-100 d-flex justify-content-center align-items-center"
                    style={{ height: "50px" }}
                    onClick={() => {
                      startNewChat();
                    }}
                  >
                    <h6 className="">Start the chat again</h6>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
