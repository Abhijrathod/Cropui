"use client";

import React, { useRef, useEffect } from "react";
import CropDetection from "./CropDetection";

const CameraFeed = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720 }, // HD resolution
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center bg-white shadow-lg p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Camera Feed (4K)</h2>
      <div className="relative w-full max-w-3xl">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <CropDetection videoRef={videoRef} />
      </div>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => videoRef.current.srcObject.getTracks().forEach((track) => track.stop())}
      >
        Stop Camera
      </button>
    </div>
  );
};

export default CameraFeed;
