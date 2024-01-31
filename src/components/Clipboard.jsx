import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Clipboard = (props) => {
  const [isClipboard, setIsClipboard] = useState(true);

  return (
    <div
      className="btn p-0 m-0"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      data-bs-custom-class="custom-tooltip"
      data-bs-title="This top tooltip is themed via CSS variables."
      style={{ border: "none" }}
      onClick={() => {
        setIsClipboard((prev) => !prev);
        setTimeout(() => {
          setIsClipboard(true);
        }, 3000);
      }}
    >
      <CopyToClipboard text={props.content}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className={
            isClipboard ? "bi bi-clipboard-data btn m-0 p-0" : "bi bi-check-lg"
          }
          style={{ border: "none", cursor: "pointer" }}
          viewBox="0 7 20 7"
        >
          <title>{isClipboard ? "Copy to clipboard" : "Copied"}</title>
          {isClipboard ? (
            <>
              <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
            </>
          ) : (
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
          )}
        </svg>
      </CopyToClipboard>

      {!isClipboard && (
        <p className="position-absolute" style={{ right: "10px" }}>
          Copied
        </p>
      )}
    </div>
  );
};

export default Clipboard;
