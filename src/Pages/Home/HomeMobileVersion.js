import GameCardMobileVersion from "component/GameCardMobileVersion";
import PosterCardMobile from "component/PosterCardMobile";
import React from "react";
import Phonix from "assets/Phoenix_mobile.png";
import ForniteCharacter from "assets/fornite_characer_mobile.png";
import BaalCharacter from "assets/baal_mobile.png";
import WarZoneCharacter from "assets/cod_warzone_character_mobile.png";
import TopSteamersMobile from "component/TopSteamersMobile";
import StreamersFelix from "assets/felix.png";
import StreamersNinja from "assets/ninja.png";
import StreamingThumbnailMobile from "component/StreamingThumbnailMobile";
import Bakreyon from "assets/bakreyon.png";
import NavbarMobile from "component/NavbarMobile";

function HomeMobileVersion() {
  return (
    <div className="relative h-full px-3 py-5 overflow-hidden bg-black-500">
      <NavbarMobile />
      <section>
        <h1 className="text-2xl font-bold text-white">Discover</h1>
        <input
          className="w-full px-5 py-2 mt-5 text-white "
          style={{
            backgroundColor: "#252630",
            borderWidth: ".1px",
            borderStyle: "solid",
            borderColor: "rgba(255,255,255,.5)",
          }}
          placeholder="Search your favorite games here ...."
        />
      </section>
      <section className="mt-12">
        <PosterCardMobile />
      </section>
      <section className="mt-12 ">
        <span className="font-bold text-white">Top Trend Games</span>
        <div className="grid grid-cols-2 gap-5 mt-10 gap-y-10">
          <GameCardMobileVersion
            imageBackground={"assets/poster.jpg"}
            image={Phonix}
            title={"Valorant"}
            slug="valorant"
            totalStream={"1.5k"}
            bgColor={"#EF9636"}
          />
          <GameCardMobileVersion
            imageBackground={"assets/fornite_bg.jpg"}
            image={ForniteCharacter}
            title={"Fornite"}
            slug="fornite"
            totalStream={"1k"}
            bgColor={"#2596BE"}
          />
          <GameCardMobileVersion
            imageBackground={"assets/geinshin_bg.jpg"}
            image={BaalCharacter}
            title={"Geinshin Impact"}
            slug="genshin-impact"
            totalStream={800}
            bgColor={"#4F3792"}
          />
          <GameCardMobileVersion
            imageBackground={"assets/warzone_bg.jpg"}
            image={WarZoneCharacter}
            title={"Warzone"}
            slug="warzone"
            totalStream={452}
            bgColor={"#866445"}
          />
        </div>
      </section>
      <section className="mt-12">
        <span className="font-bold text-white">Top streamers</span>
        <div className="grid grid-cols-2 gap-5">
          <TopSteamersMobile
            followersTotal={"10m"}
            profileImage={StreamersFelix}
            name="Felix Lyngel"
          />
          <TopSteamersMobile
            followersTotal={"5m"}
            profileImage={StreamersNinja}
            name="Ninja"
          />
        </div>
      </section>
      <section className="mt-12">
        <span className="font-bold text-white">Live Now</span>
        <div className="grid grid-cols-2 gap-5">
          <StreamingThumbnailMobile
            streamersPhoto={Bakreyon}
            imageBackground={"assets/thumbnail2.jpg"}
          />
        </div>
      </section>
    </div>
  );
}

export default HomeMobileVersion;
