import React from "react";

interface DrumPadProps {
  id: string;
  keyTrigger: string;
  audioSrc: string;
  clickFunc: (e: React.MouseEvent<HTMLDivElement>) => void;
  keyName: string;
  active: boolean;
}
const style = "border-2 border-gray-300 rounded-lg p-4 text-center text-2xl font-bold cursor-pointer transition-transform transform hover:scale-105 shadow-md";

const DrumPad: React.FC<DrumPadProps> = ({ id, keyTrigger, audioSrc, clickFunc, keyName, active }) => {
  return (
    <div
      id={id}
      className={`drum-pad ${style} ${active ? "active" : ""}`}
      data-key={keyName}
      onClick={clickFunc}
    >
      {keyTrigger}
      <audio src={audioSrc} className="clip" id={keyTrigger}></audio>
    </div>
  );
};

export default DrumPad;
