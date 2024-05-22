// src/components/TabView.js
import { useState } from "react";

// components
import RederFaster from "../components/Tabview/RenderFaster";
import RealisticMaterial from "../components/Tabview/RealisticMaterial";
import LiveInteracion from "../components/Tabview/LiveInteracion";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Render faster");

  const tabs = [
    { name: "Render faster" },
    { name: "Realistic materials" },
    { name: "Live interaction" },
  ];

  return (
    <div className="container poppins-regular">
      <div className="flex bg-[#F5F6F7] rounded-lg md:mx-32">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex-1 py-2 text-center text-gray-600 border-b-2 ${
              activeTab === tab.name
                ? "bg-[#FCFDFE] font-medium text-black rounded-lg"
                : "border-transparent"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-4">
        {activeTab === "Render faster" && <div>{<RederFaster />}</div>}
        {activeTab === "Realistic materials" && (
          <div>{<RealisticMaterial />}</div>
        )}
        {activeTab === "Live interaction" && <div>{<LiveInteracion />}</div>}
      </div>
    </div>
  );
};

export default Tabs;
