"use client"; // Ensures it's a client-side component

import { useEffect, useRef, useState } from "react";

const WebRTCStream = ({ onStreamReady }) => {
  const videoRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const startCamera = async () => {
    try {
      const constraints = {
        video: {
            width: { ideal: 1920 }, // Change from 3840 (4K) to 1920 (Full HD)
            height: { ideal: 1080 }, 
            frameRate: { ideal: 30 }, // Reduce FPS if necessary
            facingMode: "environment", // Back Camera
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraOn(true);
        if (onStreamReady) onStreamReady(stream);
      }
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      let stream = videoRef.current.srcObject;
      let tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraOn(false);
    }
  };

  return (
    <div className="w-full">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full h-auto rounded-lg border"
      />
      <button
        onClick={isCameraOn ? stopCamera : startCamera}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        {isCameraOn ? "Stop Camera" : "Start Camera"}
      </button>
    </div>
  );
};

export default WebRTCStream;
