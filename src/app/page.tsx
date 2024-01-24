import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <div className="background">
      <div className="Container">
        <br />
        <br />
        <br />
        <h1 className="header">WeatherApp!</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p className="Paragraph">
          <span className="SpecialText">
            What's worse than rain? Forgetting your umbrella.. :(
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          Welcome to my WeatherApp Project. I'm an outdoorsy person, but I
          always seem to dress wrong for the weather. <br /><br />Whether I'm wrapped up too
          much for hikes or caught without my raincoat in a storm. <br /><br /> This app is
          my attempt to challenge myself technically while creating something
          genuinely useful. Join me in staying weather-ready!
        </p>
        <div className="LinkContainer">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link href="/main">Explore the WeatherApp</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
