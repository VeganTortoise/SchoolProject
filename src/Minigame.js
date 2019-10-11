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
        <YouTube videoId={"MXXRHpVed3M"} opts={opts} />
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
      {store.easterString.toUpperCase() === "SCOOTA" && (
        <YouTube videoId={"-dn7FtPVvoA"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "SPOOKY" && (
        <YouTube videoId={"WTWyosdkx44"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "BRBA" && (
        <YouTube videoId={"WzhW20hLp6M"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "ICEICE" && (
        <YouTube videoId={"rog8ou-ZepE"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "PREASURE" && (
        <YouTube videoId={"a01QQZyl-_I"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "ONII" && (
        <YouTube videoId={"S2FBKo_PxaA"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "PKMN" && (
        <YouTube videoId={"PIetiD0G6vQ"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "SENPAI" && (
        <YouTube videoId={"PIetiD0G6vQ"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "NEIN" && (
        <YouTube videoId={"22m5eU6uxeQ"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "OK" && (
        <YouTube videoId={"5vPlN6b7sWs"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "COW" && (
        <YouTube videoId={"ZiqRKlpsavA"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "HOLAND" && (
        <YouTube videoId={"_swivbEsD50"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "LIOVEU" && (
        <YouTube videoId={"s1ikwG0V2BQ"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "COCAINE" && (
        <YouTube videoId={"zVOuRQPPdoo"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "ALPACA" && (
        <YouTube videoId={"PLKyz2wtHQw"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "SCHOBA" && (
        <YouTube videoId={"szjdoVR5EKs"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "LABEOUF" && (
        <YouTube videoId={"o0u4M6vppCI"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "SCHOSCHONE" && (
        <YouTube videoId={"86vJcl5GXHA"} opts={opts} />
      )}
      {store.easterString.toUpperCase() === "PIRATE" && (
        <YouTube videoId={"SAp0xO-LwFs"} opts={opts} />
      )}
    </div>
  );
}

export default Minigame;
