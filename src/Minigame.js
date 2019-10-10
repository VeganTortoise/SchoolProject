import React, { useContext } from "react";
import { Context } from "./store.js";
import YouTube from "react-youtube";
import "./Minigame.css";

function Minigame() {
  const { store } = useContext(Context);

  const opts = {
    playerVars: {
      autoplay: 1
    }
  };
  const optsnoop = {
    playerVars: {
      autoplay: 1,
      start: 20
    }
  };
  const optsyag = {
    playerVars: {
      autoplay: 1,
      start: 11
    }
  };

  return (
    <div className="Minigame">
      {store.easterString.toUpperCase() === "HC" && (
        <YouTube videoId={"8aWgT7dlAY0"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "SNOOPDOG" && (
        <YouTube videoId={"_CL6n0FJZpk"} opts={optsnoop} />
      )}
      {store.easterString.toUpperCase() === "CHINA" && (
        <YouTube videoId={"W8iOyJCNhTQ"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "BACON" && (
        <YouTube videoId={"kjR0AYf4pSM"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "CHOCOLATE" && (
        <YouTube videoId={"YUY9Y9RFiHY"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "CANDY" && (
        <YouTube videoId={"rsp35yn411A"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "TACO" && (
        <YouTube videoId={"Iz5v3qhOoLc"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "YARUGE" && (
        <YouTube videoId={"ooOELrGMn14"} opts={optsyag} />
      )}
      {store.easterString.toUpperCase() === "ARNI" && (
        <YouTube videoId={"_muVge9sJP4"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "PASTA" && (
        <YouTube videoId={"D6EmT8FwAgo"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "PUTIN" && (
        <YouTube videoId={"2RlTqFtdlH8"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "RASPUTIN" && (
        <YouTube videoId={"oTI5XL-k_1I"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "SCOOTER" && (
        <YouTube videoId={"-dn7FtPVvoA"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "SPOOKY" && (
        <YouTube videoId={"XTgFtxHhCQ0"} opts={opts} />
      )}
    </div>
  );
}

export default Minigame;
