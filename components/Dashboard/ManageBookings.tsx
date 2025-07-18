"use client"

import React, { useState } from "react";
import { Search } from "lucide-react";

interface Booking {
  id: string;
  name: string;
  phone: string;
  room: string;
  bed: string;
  checkin: string;
  checkout: string;
}

const columns = [
  { key: "id", label: "Booking ID" },
  { key: "name", label: "Guest Name" },
  { key: "phone", label: "Phone Number" },
  { key: "room", label: "Room" },
  { key: "bed", label: "Bed No." },
  { key: "checkin", label: "Check-in" },
  { key: "checkout", label: "Check-out" },
  { key: "add", label: "" },
];

export default function ManageBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [form, setForm] = useState<Omit<Booking, "id">>({
    name: "",
    phone: "",
    room: "",
    bed: "",
    checkin: "",
    checkout: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (form.name && form.phone && form.room && form.bed && form.checkin && form.checkout) {
      setBookings([
        ...bookings,
        { id: `#${Math.floor(Math.random() * 1000)}`, ...form },
      ]);
      setForm({ name: "", phone: "", room: "", bed: "", checkin: "", checkout: "" });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="w-full">
      <h1 className="text-white text-4xl font-bold text-center mb-6 bg-[#2D334F] h-14 py-2 rounded-tr-xl rounded-br-xl">Manage Bookings</h1>
      <div className="flex gap-8 mb-6">
        <div className="flex-1 bg-[#2D334F] rounded-2xl flex items-center px-6 py-3 text-white text-lg">
          <Search className="mr-3 opacity-70" />
          <span className="opacity-70">Search For The&nbsp; Guest Name</span>
        </div>
        <div className="flex-1 bg-[#2D334F] rounded-2xl flex items-center px-6 py-3 text-white text-lg">
          <Search className="mr-3 opacity-70" />
          <span className="opacity-70">Search For The&nbsp; Date Of Booking</span>
        </div>
      </div>
      <div className="bg-[#2D334F] rounded-2xl pt-4 pb-2 w-full" style={{ height: "21rem", display: "flex", flexDirection: "column", width: "53rem" }}>
        <div className="w-full overflow-x-auto ">
          <table className="w-full text-white table-fixed border-separate border-spacing-0">
            <colgroup>
              {columns.map((col, i) => (
                <col key={col.key} style={{ width: `${100 / columns.length}%` }} />
              ))}
            </colgroup>
            <thead className="sticky top-0 bg-[#2D334F] z-10">
              <tr className="text-lg">
                {columns.map((col) => (
                  <th key={col.key} className="pb-3 font-semibold text-center whitespace-nowrap ml-20">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
        <div className="flex-1 overflow-auto w-full">
          <table className="w-full text-white table-fixed border-separate border-spacing-0">
            <colgroup>
              {columns.map((col, i) => (
                <col key={col.key} style={{ width: `${100 / columns.length}%` }} />
              ))}
            </colgroup>
            <tbody>
              {bookings.map((b, i) => (
                <tr key={i} className="border-t border-[#232846] text-base">
                  <td className="py-2 text-center">{b.id}</td>
                  <td className="py-2 text-center">{b.name}</td>
                  <td className="py-2 text-center">{b.phone}</td>
                  <td className="py-2 text-center">{b.room}</td>
                  <td className="py-2 text-center">{b.bed}</td>
                  <td className="py-2 text-center">{b.checkin}</td>
                  <td className="py-2 text-center">{b.checkout}</td>
                  <td className="py-2 text-center"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Add Row: use CSS grid for perfect alignment */}
        <div className="grid w-full border-t border-[#232846] opacity-70" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
          <div className="py-2 text-center"></div>
          <div className="py-2 text-center">
            <input
              name="name"
              value={form.name}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Add Name"
              className="bg-transparent outline-none text-white w-full text-center"
            />
          </div>
          <div className="py-2 text-center">
            <input
              name="phone"
              value={form.phone}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Add Number"
              className="bg-transparent outline-none text-white w-full text-center"
            />
          </div>
          <div className="py-2 text-center">
            <input
              name="room"
              value={form.room}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Add Room"
              className="bg-transparent outline-none text-white w-full text-center"
            />
          </div>
          <div className="py-2 text-center">
            <input
              name="bed"
              value={form.bed}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Add Bed"
              className="bg-transparent outline-none text-white w-full text-center"
            />
          </div>
          <div className="py-2 text-center">
            <input
              name="checkin"
              value={form.checkin}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Check-in"
              type="date"
              className="bg-transparent outline-none text-white w-full text-center"
            />
          </div>
          <div className="py-2 text-center">
            <input
              name="checkout"
              value={form.checkout}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Check-out"
              type="date"
              className="bg-transparent outline-none text-white w-full text-center"
            />
          </div>
          <div className="py-2 text-center">
            <button
              className="bg-[#8D8DDA] text-white px-3 py-1 rounded-full hover:bg-[#a89bfa]"
              onClick={handleAdd}
              type="button"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
