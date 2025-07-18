import React from "react";
import {
  LayoutDashboard,
  BedDouble,
  IndianRupee,
  CreditCard,
  Info,
  Star,
  ImageIcon
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BedDouble, label: "Bookings" },
  { icon: IndianRupee, label: "Pricing" },
  { icon: CreditCard, label: "Payment Method" },
  { icon: Info, label: "Edit Stay Info" },
  { icon: Star, label: "Reviews" },
  { icon: ImageIcon, label: "Photos" },
];

export default function DashboardSidebar({ activeIndex, onSelect }: { activeIndex: number, onSelect: (idx: number) => void }) {
  return (
    <div className="bg-[#2D334F] w-64 rounded-l-xl flex flex-col mt-6 h-[30.5rem]">
      <h2 className="text-3xl font-semibold text-white px-6 py-3 mb-5">Control Panel</h2>
      {sidebarItems.map((item, idx) => (
        <div
          key={item.label}
          className={`flex items-center gap-3 text-white px-4 py-4 cursor-pointer transition-all duration-200
            ${activeIndex === idx ? "bg-[#1D2347] font-bold border-l-4 border-[#8D8DDA]" : "hover:bg-[#1D2347]"}`}
          onClick={() => onSelect(idx)}
        >
          <item.icon size={18} />
          <span className="text-md">{item.label}</span>
        </div>
      ))}
    </div>
  );
} 