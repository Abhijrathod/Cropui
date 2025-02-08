import React from "react";
import CameraFeed from "./CameraFeed";
import PlantInfo from "./PlantInfo";
import PreventionInfo from "./PreventionInfo";
import ChatInterface from "./ChatInterface";
import ProductShowcase from "./ProductShowcase";
import "@/app/globals.css";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-6 bg-gray-200 min-h-screen">
      {/* Left Side */}
      <div className="flex flex-col gap-4">
        <CameraFeed />
        <PlantInfo plantName="Tomato" diseaseName="Leaf Spot" />
        <PreventionInfo prevention="Use copper-based fungicide and remove infected leaves." />
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-4">
        <ChatInterface />
        <ProductShowcase products={["Fungicide A", "Organic Spray", "Neem Oil"]} />
      </div>
    </div>
  );
};

export default MainLayout;
