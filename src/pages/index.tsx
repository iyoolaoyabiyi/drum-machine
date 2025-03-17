import Head from "next/head";
import React, { useCallback, useState } from "react";

import Layout from "@/components/Layout";
import DrumMachine from "@/components/DrumMachine";
import DrumPad from "@/components/DrumPad";

export default function Home() {
  const [activePad, setActivePad] = useState<string | null>(null);

  const drumKeys = [
    { id: "Q", keyTrigger: "Q", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", name: "Heater 1" },
    { id: "W", keyTrigger: "W", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", name: "Heater 2" },
    { id: "E", keyTrigger: "E", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", name: "Heater 3" },
    { id: "A", keyTrigger: "A", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", name: "Heater 4" },
    { id: "S", keyTrigger: "S", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", name: "Clap" },
    { id: "D", keyTrigger: "D", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", name: "Open-HH" },
    { id: "Z", keyTrigger: "Z", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", name: "Kick-n'-Hat" },
    { id: "X", keyTrigger: "X", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", name: "Kick" },
    { id: "C", keyTrigger: "C", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", name: "Closed-HH" }
  ];

  const displayClip = (clipName: string) => {
    const display = document.getElementById("display");
    if (display) {
      display.textContent = clipName;
    }
  };

  const playSound = (e: React.MouseEvent<HTMLDivElement>) => {
    const key = (e.target as HTMLDivElement).getAttribute("data-key") || "";
    const audio = (e.target as HTMLDivElement).querySelector("audio");
    setActivePad(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      displayClip(key);
    }
    setTimeout(() => setActivePad(null), 100); // Reset active pad after 100ms
  };

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    const key = e.key.toUpperCase();
    const drumPad = document.getElementById(key);
    if (drumPad) {
      drumPad.click();
      displayClip(drumPad.getAttribute("data-key") || "");
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <Head>
        <title>Drum Machine by Iyo</title>
      </Head>
      <Layout>
        <h1 className="text-center text-6xl font-bold my-4 mb-16  ">Drum Machine</h1>
        <DrumMachine>
          <div id="display" className="px-2 uppercase font-bold text-center py-4 mb-4 max-w-50 m-auto rounded mb-[50px] bg-gray-100 text-black">
            <p>Beat by Iyo...</p>
          </div>
          <div id="drumpads" className="grid grid-cols-3 gap-4 m-auto">
            {drumKeys.map((drumKey) => (
              <DrumPad
                key={drumKey.id}
                id={drumKey.id}
                keyTrigger={drumKey.keyTrigger}
                audioSrc={drumKey.audioSrc}
                clickFunc={playSound}
                keyName={drumKey.name}
                active={activePad === drumKey.name}
              />
            ))}
          </div>
        </DrumMachine>
      </Layout>
    </>
  );
}