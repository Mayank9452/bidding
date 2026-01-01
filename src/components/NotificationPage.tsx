import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Trophy, Calendar, Clock, Gift, TrendingUp, Zap, X, ChevronRight } from "lucide-react";
import { TopBar } from "./TopBar";
import { BottomNavBar } from "./BottomNavBar";

// Mock notifications data
const NOTIFICATIONS = [
  {
    id: 1,
    bidName: "Bid Daily",
    startDate: "2025-01-01",
    startTime: "10:00 AM",
    endDate: "2025-01-01",
    endTime: "11:00 PM",
    won: true,
    prize: "4,350 Data Pack (MB)",
    status: "completed",
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    bidName: "Bid Weekly",
    startDate: "2024-12-28",
    startTime: "09:00 AM",
    endDate: "2024-12-31",
    endTime: "11:59 PM",
    won: false,
    prize: null,
    status: "completed",
    timestamp: "5 hours ago"
  },
  {
    id: 3,
    bidName: "Bid Daily",
    startDate: "2024-12-30",
    startTime: "02:00 PM",
    endDate: "2024-12-31",
    endTime: "08:00 PM",
    won: true,
    prize: "10,000 Data Pack (MB)",
    status: "completed",
    timestamp: "1 day ago"
  },
  {
    id: 4,
    bidName: "Bid Daily",
    startDate: "2024-12-29",
    startTime: "12:00 PM",
    endDate: "2024-12-29",
    endTime: "06:00 PM",
    won: false,
    prize: null,
    status: "completed",
    timestamp: "2 days ago"
  },
  {
    id: 5,
    bidName: "Bid Daily",
    startDate: "2024-12-28",
    startTime: "08:00 AM",
    endDate: "2024-12-28",
    endTime: "10:00 PM",
    won: true,
    prize: "25,000 Data Pack (MB)",
    status: "completed",
    timestamp: "3 days ago"
  },
  {
    id: 6,
    bidName: "Bid Daily",
    startDate: "2024-12-27",
    startTime: "10:00 AM",
    endDate: "2024-12-27",
    endTime: "11:00 PM",
    won: false,
    prize: null,
    status: "completed",
    timestamp: "4 days ago"
  }
];

export default function NotificationPage() {
  const [filter, setFilter] = useState<"all" | "won" | "lost">("all");
  const [selectedNotif, setSelectedNotif] = useState<number | null>(null);

  const filteredNotifications = NOTIFICATIONS.filter(notif => {
    if (filter === "won") return notif.won;
    if (filter === "lost") return !notif.won;
    return true;
  });

  const wonCount = NOTIFICATIONS.filter(n => n.won).length;
  const lostCount = NOTIFICATIONS.filter(n => !n.won).length;

  return (
    <>
    <TopBar />
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 p-2">
      {/* Header Section */}
      {/* <div className="rounded-xl relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 pt-6 pb-16 px-3 overflow-hidden"> */}
      <div className="rounded-xl relative bg-gradient-to-r from-pink-600 to-rose-600 pt-6 pb-16 px-3 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl" />
        
        <div className="relative z-10 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-black text-white tracking-tight">Notifications</h1>
            </div>
            
            {/* Unread Badge */}
            <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-xs font-bold text-white">{NOTIFICATIONS.length} New</span>
            </div>
          </div>
          
          <p className="text-center text-white/80 text-xs font-medium mb-4">
            Your bid results and updates
          </p>

          {/* Filter Tabs */}
          <div className="flex bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/20 shadow-xl gap-1">
            <button
              onClick={() => setFilter("all")}
              className={`flex-1 px-3 py-2 text-[11px] font-bold rounded-lg transition-all duration-200 ${
                filter === "all" ? "bg-white text-violet-700 shadow-md" : "text-white/70"
              }`}
            >
              All ({NOTIFICATIONS.length})
            </button>
            <button
              onClick={() => setFilter("won")}
              className={`flex-1 px-3 py-2 text-[11px] font-bold rounded-lg transition-all duration-200 ${
                filter === "won" ? "bg-white text-emerald-600 shadow-md" : "text-white/70"
              }`}
            >
              Won ({wonCount})
            </button>
            <button
              onClick={() => setFilter("lost")}
              className={`flex-1 px-3 py-2 text-[11px] font-bold rounded-lg transition-all duration-200 ${
                filter === "lost" ? "bg-white text-gray-600 shadow-md" : "text-white/70"
              }`}
            >
              Lost ({lostCount})
            </button>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="relative z-10 -mt-12 px-3 max-w-md mx-auto pb-4">
        <div className="space-y-2.5">
          <AnimatePresence mode="popLayout">
            {filteredNotifications.map((notif, index) => (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                layout
              >
                <NotificationCard 
                  notification={notif}
                  // isExpanded={selectedNotif === notif.id}
                  onToggle={() => setSelectedNotif(selectedNotif === notif.id ? null : notif.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredNotifications.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Bell className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">No notifications found</p>
            </div>
          )}
        </div>
      </div>
    </div>
    <BottomNavBar/>
    </>
  );
}

function NotificationCard({ notification, isExpanded, onToggle }: any) {
  const { bidName, startDate, startTime, endDate, endTime, won, prize, timestamp } = notification;

  return (
    <motion.button
      onClick={onToggle}
      className="w-full text-left"
      whileTap={{ scale: 0.98 }}
    >
      <div className={`relative bg-white rounded-xl shadow-md border-2 overflow-hidden transition-all duration-150 ${
        won 
          ? 'border-emerald-400/40 bg-gradient-to-br from-emerald-50/50 to-white' 
          : 'border-gray-200 active:border-violet-200'
      }`}>
        {/* Status Strip */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${
          won ? 'bg-gradient-to-r from-emerald-400 to-green-500' : 'bg-gradient-to-r from-gray-300 to-gray-400'
        }`} />

        <div className="p-3.5">
          {/* Header */}
          <div className="flex items-start justify-between mb-2.5">
            <div className="flex items-center gap-2.5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                won 
                  ? 'bg-gradient-to-br from-emerald-400 to-green-500' 
                  : 'bg-gradient-to-br from-gray-300 to-gray-400'
              }`}>
                {won ? (
                  <Trophy className="w-5 h-5 text-white" fill="currentColor" />
                ) : (
                  <X className="w-5 h-5 text-white" strokeWidth={3} />
                )}
              </div>
              
              <div>
                <h3 className="text-base font-bold text-gray-800">{bidName}</h3>
                <p className="text-[10px] text-gray-500 font-medium">{timestamp}</p>
              </div>
            </div>

            {/* Win/Loss Badge */}
            <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
              won 
                ? 'bg-emerald-100 text-emerald-700' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {won ? '🎉 WON' : '❌ LOST'}
            </div>
          </div>

          {/* Prize Info */}
          {won ? (
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg p-2.5 mb-2.5">
              <div className="flex items-center gap-2 mb-1">
                <Gift className="w-4 h-4 text-white" />
                <p className="text-[10px] font-bold text-white/90 uppercase tracking-wider">
                  Your Prize
                </p>
              </div>
              <p className="text-white text-sm font-black">
                {prize}
              </p>
            </div>
          ) : (
            <div className="bg-gray-100 rounded-lg p-2.5 mb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-300 rounded-lg flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-gray-600" strokeWidth={3} />
                </div>
                <p className="text-sm font-bold text-gray-600">
                  No Prize Won
                </p>
              </div>
            </div>
          )}

          {/* Time Details */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg p-2 border border-violet-100">
              <div className="flex items-center gap-1 mb-0.5">
                <Calendar className="w-3 h-3 text-violet-600" />
                <span className="text-[9px] font-bold text-violet-600 uppercase">Start</span>
              </div>
              <p className="text-[10px] font-bold text-gray-800">{startDate}</p>
              <p className="text-[9px] text-gray-600 font-medium">{startTime}</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-2 border border-indigo-100">
              <div className="flex items-center gap-1 mb-0.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span className="text-[9px] font-bold text-indigo-600 uppercase">End</span>
              </div>
              <p className="text-[10px] font-bold text-gray-800">{endDate}</p>
              <p className="text-[9px] text-gray-600 font-medium">{endTime}</p>
            </div>
          </div>

          {/* Expandable Stats */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-2">
                    <StatBox icon={<Zap className="w-3.5 h-3.5" />} label="Bids" value="24" />
                    <StatBox icon={<TrendingUp className="w-3.5 h-3.5" />} label="Rank" value="#12" />
                    <StatBox icon={<Trophy className="w-3.5 h-3.5" />} label="Points" value="1.2k" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand Indicator */}
          {/* <div className="flex justify-center mt-2">
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
            </motion.div>
          </div> */}
        </div>
      </div>
    </motion.button>
  );
}

function StatBox({ icon, label, value }: any) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-2 text-center border border-gray-100">
      <div className="flex justify-center text-violet-600 mb-1">
        {icon}
      </div>
      <p className="text-[9px] text-gray-500 font-medium uppercase">{label}</p>
      <p className="text-xs font-bold text-gray-800">{value}</p>
    </div>
  );
}