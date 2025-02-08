import React from "react";
import WebRTCStream from "./WebRTCStream";
const CameraFeed = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
    <h2 className="text-xl font-bold mb-2">Camera Feed (4K)</h2>
    <WebRTCStream />
  </div>
  );
};

export default CameraFeed;
