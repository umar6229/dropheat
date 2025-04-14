import React from "react";
import LiveDrops from "./LiveDrops/LiveDrops";
import FeaturedBoxes from "./FeaturedBoxes/FeaturedBoxes";
import LatestBattles from "./LatestBattles/LatestBattles";
import FreshDeliveries from "./FreshDeliveries/FreshDeliveries";
import Promotion from "./PromotionalBox/Promotion";
import ChatLayout from "./ChatContainer/ChatLayout";
import Sidebar from "./Sidebar/Sidebar";

function Dashboard() {
  return (
    // <div class="container">
    <div style={{display:"flex",paddingInline:"10px",gap:10}}>
      <div className="sidebar-container" id="sidebar-container">
      <Sidebar />
      </div>
      <div style={{overflow:"hidden"}}>
      <LiveDrops />
      <Promotion />
      <div style={{overflow:"auto"}}>
      <FeaturedBoxes />
      </div>
      <div style={{overflow:"auto"}}>
      <LatestBattles />
      </div>
      <div style={{overflow:"auto"}}>
      <FreshDeliveries />
      </div>
      </div>
      <div className="chat-container" id="chat-container">
      <ChatLayout />
      </div>
    </div>
  );
}

export default Dashboard;
