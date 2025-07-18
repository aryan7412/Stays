"use client"

import {
  ChevronDown,
  Plus,
  ChevronUp,
  Trash2
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type BedStatus = "Available" | "Occupied" | "Cleaning" | "Renovation"

interface Bed {
  id: string
  status: BedStatus | ""
}

interface Room {
  id: string
  beds: Bed[]
}

const SidebarItem = ({ icon: Icon, label, active }: any) => (
  <div
    className={cn(
      "flex items-center gap-3 text-white px-4 py-4 hover:bg-[#1D2347] transition cursor-pointer",
      active && "bg-[#1D2347]"
    )}
  >
    <Icon size={18} />
    <span className="text-md">{label}</span>
  </div>
)

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-[#2D334F] rounded-xl py-6 px-8 flex flex-col items-center text-white font-bold">
    <h1 className="text-3xl font-bolds">{value}</h1>
    <p className="text-sm text-gray-300 mt-1">{label}</p>
  </div>
)

export default function RoomManager() {
  const [rooms, setRooms] = useState<Room[]>([])
  const [expandedRoom, setExpandedRoom] = useState<string | null>(null)

  const handleAddRoom = () => {
    const roomName = prompt("Enter Room Name", `Room ${100 + rooms.length}`)?.trim()
    if (!roomName) return
    const newRoom: Room = {
      id: roomName,
      beds: []
    }
    setRooms([...rooms, newRoom])
  }

  const handleDeleteRoom = (roomId: string) => {
    if (confirm("Are you sure you want to delete this room?")) {
      setRooms(prev => prev.filter(room => room.id !== roomId))
      if (expandedRoom === roomId) setExpandedRoom(null)
    }
  }

  const handleToggleRoom = (roomId: string) => {
    setExpandedRoom(prev => (prev === roomId ? null : roomId))
  }

  const handleStatusChange = (roomId: string, bedIndex: number, status: BedStatus) => {
    setRooms(prev =>
      prev.map(room =>
        room.id === roomId
          ? {
              ...room,
              beds: room.beds.map((bed, idx) =>
                idx === bedIndex ? { ...bed, status } : bed
              )
            }
          : room
      )
    )
  }

  const handleAddBed = (roomId: string) => {
    const room = rooms.find(r => r.id === roomId)
    const bedName = prompt("Enter Bed Name", `Bed ${(room?.beds?.length ?? 0) + 1}`)?.trim();
    if (!room || !bedName) return
    const newBed: Bed = { id: bedName, status: "" }
    setRooms(prev =>
      prev.map(room =>
        room.id === roomId
          ? { ...room, beds: [...room.beds, newBed] }
          : room
      )
    )
  }

  const handleDeleteBed = (roomId: string, bedIndex: number) => {
    setRooms(prev =>
      prev.map(room =>
        room.id === roomId
          ? { ...room, beds: room.beds.filter((_, idx) => idx !== bedIndex) }
          : room
      )
    )
  }

  const getStatusSummary = (room: Room) => {
    const counts: Record<BedStatus, number> = {
      Available: 0,
      Occupied: 0,
      Cleaning: 0,
      Renovation: 0
    }

    room.beds.forEach((bed) => {
      if (bed.status && bed.status in counts) {
        counts[bed.status as BedStatus]++
      }
    })

    return Object.entries(counts)
      .filter(([_, val]) => val > 0)
      .map(([status, val]) => `${val} ${status}`)
      .join(", ")
  }

  const totalRooms = rooms.length
  const totalBeds = rooms.reduce((acc, room) => acc + room.beds.length, 0)
  const availableBeds = rooms.reduce(
    (acc, room) => acc + room.beds.filter((b) => b.status === "Available").length,
    0
  )
  const occupiedBeds = rooms.reduce(
    (acc, room) => acc + room.beds.filter((b) => b.status === "Occupied").length,
    0
  )

  return (
    <div className="w-full">
      <h1 className="text-white text-4xl font-bold text-center mb-6 bg-[#2D334F] h-14 py-2 rounded-tr-xl rounded-br-xl">
        Room And Bed Management
      </h1>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard value={`${totalRooms}`} label="Total Rooms" />
        <StatCard value={`${totalBeds}`} label="Total Beds" />
        <StatCard value={`${availableBeds}`} label="Available Beds" />
        <StatCard value={`${occupiedBeds}`} label="Occupied Beds" />
      </div>

      <div className="flex gap-4">
        {/* Room List */}
        <div className="bg-[#2D334F] rounded-xl text-white flex-1 min-w-[180px] h-[17.3rem] flex flex-col overflow-hidden">
          <div className="text-center border-b border-white/20 py-3 font-semibold flex-shrink-0">Rooms</div>
          <div className="flex-1 overflow-auto">
            <ul className="px-4 py-3 space-y-3 text-md">
              {rooms.map((room, i) => (
                <li key={i} className="flex justify-between items-center">
                  <div
                    className="flex-1 cursor-pointer"
                    onClick={() => handleToggleRoom(room.id)}
                  >
                    <span>{room.id}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => handleDeleteRoom(room.id)}>
                      <Trash2 size={14} className="text-red-400" />
                    </button>
                    {expandedRoom === room.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex items-center justify-center border-t border-white/10 py-2 text-sm text-gray-300 cursor-pointer flex-shrink-0"
            onClick={handleAddRoom}
          >
            <Plus size={14} className="mr-1" />
            Add Room
          </div>
        </div>

        {/* Beds List */}
        <div className="bg-[#2D334F] rounded-xl text-white flex-1 min-w-[180px] h-[17.3rem] flex flex-col overflow-hidden">
          <div className="text-center border-b border-white/20 py-3 font-semibold flex-shrink-0">Beds</div>
          <div className="flex-1 overflow-auto">
            <ul className="px-4 py-3 space-y-3 text-md">
              {expandedRoom &&
                rooms
                  .find(r => r.id === expandedRoom)
                  ?.beds.map((bed, idx) => (
                    <li key={idx} className="flex justify-between items-center gap-1">
                      <span>{bed.id}</span>
                      <Select
                        value={bed.status}
                        onValueChange={value => handleStatusChange(expandedRoom, idx, value as BedStatus)}
                      >
                        <SelectTrigger className="w-[120px] bg-[#1D2347] text-white text-xs border-none">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Available">Available</SelectItem>
                          <SelectItem value="Occupied">Occupied</SelectItem>
                          <SelectItem value="Cleaning">Cleaning</SelectItem>
                          <SelectItem value="Renovation">Renovation</SelectItem>
                        </SelectContent>
                      </Select>
                      <button onClick={() => handleDeleteBed(expandedRoom, idx)}>
                        <Trash2 size={14} className="text-red-400" />
                      </button>
                    </li>
                  ))}
            </ul>
          </div>
          {expandedRoom && (
            <div
              className="flex items-center justify-center border-t border-white/10 py-2 text-sm text-gray-300 cursor-pointer flex-shrink-0"
              onClick={() => handleAddBed(expandedRoom)}
            >
              <Plus size={14} className="mr-1" />
              Add Bed
            </div>
          )}
        </div>

        {/* Status Summary */}
        <div className="bg-[#2D334F] rounded-xl text-white flex-1 min-w-[180px] h-[17.3rem] flex flex-col overflow-hidden">
          <div className="text-center border-b border-white/20 py-3 font-semibold flex-shrink-0">Status</div>
          <div className="flex-1 overflow-auto">
            <ul className="px-4 py-3 space-y-3 text-md">
              {rooms.map((room, i) => (
                <li key={i} className="flex justify-between items-start">
                  <span>{room.id}</span>
                  <span className="text-xs text-gray-300 text-right max-w-[120px] break-words">
                    {getStatusSummary(room) || "No Data"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
