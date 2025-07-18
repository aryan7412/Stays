"use client"

import React, { useState } from "react";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import RoomManager from "@/components/Dashboard/RoomManager";
import ManageBookings from "@/components/Dashboard/ManageBookings";
import SetPricing from "@/components/Dashboard/SetPricing";
import PaymentMethod from "@/components/Dashboard/PaymentMethod";
import EditStayInfo from "@/components/Dashboard/EditStayInfo";
import GuestFeedback from "@/components/Dashboard/GuestFeedback";
import ManagePhotos from "@/components/Dashboard/ManagePhotos";

const sections = [
  { label: "Dashboard", component: <RoomManager /> },
  { label: "Bookings", component: <ManageBookings /> },
  { label: "Pricing", component: <SetPricing /> },
  { label: "Payment Method", component: <PaymentMethod /> },
  { label: "Edit Stay Info", component: <EditStayInfo /> },
  { label: "Reviews", component: <GuestFeedback /> },
  { label: "Photos", component: <ManagePhotos /> },
];

export default function ControlPanelPage() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="flex bg-[#0C0F28] min-h-screen max-w-6xl mx-auto">
      <DashboardSidebar activeIndex={activeSection} onSelect={setActiveSection} />
      <main className="flex-1 p-6 overflow-auto">
        {sections[activeSection].component}
      </main>
    </div>
  );
}