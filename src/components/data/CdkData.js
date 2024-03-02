import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const iconStyle = (Icon) => <Icon size="2rem" color=" #3e6fda" />;

export const data = [
  {
    icon: iconStyle(AiFillCheckCircle),
    text: "Protocol",
    parag:
      " WalletConnect is not an app, but an open protocol to communicate securely between Wallets and Dapps (Web3 Apps).",
  },
  {
    icon: iconStyle(AiFillCheckCircle),
    text: "Secure Encryption",
    parag:
      "The protocol establishes a remote connection between two apps and/or devices. These payloads are symmetrically encrypted through a shared key between the two peers. ",
  },

  {
    icon: iconStyle(AiFillCheckCircle),
    text: "QR Codes & Deep Links",
    parag:
      " The connection is initiated by one peer displaying a QR Code or deep link with a standard WalletConnect URI and is established when the counter-party approves this connection request.",
  },
  {
    icon: iconStyle(AiFillCheckCircle),
    text: "Push Server",
    parag:
      "Also included is an optional Push server to allow native applications to notify the user of incoming payloads for established connections. ",
  },
];
