import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  TwitterShareButton,
  XIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
const Share = (props) => {
  const shareUrl = props.shareUrl;
  const title = props.title;
  const [isCopied, setIsCopied] = useState(false);
  const size = 24;
  return (
    <div className="share d-flex gap-3 align-items-center">
      <FacebookShareButton
        url={shareUrl}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={size} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className="Demo__some-network__share-button"
      >
        <XIcon size={size} round />
      </TwitterShareButton>
      <TelegramShareButton
        url={shareUrl}
        title={title}
        className="Demo__some-network__share-button"
      >
        <TelegramIcon size={size} round />
      </TelegramShareButton>
      <div>
        <CopyToClipboard text={props.shareUrl}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-link-45deg btn p-0 m-0"
            style={{ border: " none" }}
            onClick={() => {
              // navigator.clipboard.writeText(shareUrl);
              setIsCopied(true);

              // Reset the "Copied" message after 3 seconds
              setTimeout(() => {
                setIsCopied(false);
              }, 1000);
            }}
            viewBox="0 0 16 16"
          >
            <title>Copy link</title>
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
          </svg>
        </CopyToClipboard>
        {isCopied && (
          <span
            className="position-absolute"
            style={{ marginLeft: "8px", bottom: "40px", right: "0px" }}
          >
            Copied!
          </span>
        )}
      </div>
    </div>
  );
};

export default Share;
