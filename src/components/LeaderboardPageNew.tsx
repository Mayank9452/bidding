import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Crown, TrendingUp, Zap, Star, ChevronDown, Award } from "lucide-react";
import { BottomNavBar } from "./BottomNavBar";
import { TopBar } from "./TopBar";

// Mock data
const MOCK_USERS = [
  { id: 1, name: "Alex Johnson", score: 15420, bids: 234, avatar: "Alex", tier: "diamond", streak: 12 },
  { id: 2, name: "Sarah Chen", score: 14890, bids: 198, avatar: "Sarah", tier: "platinum", streak: 8 },
  { id: 3, name: "Mike Wilson", score: 13750, bids: 187, avatar: "Mike", tier: "gold", streak: 6 },
  { id: 4, name: "Emma Davis", score: 12340, bids: 165, avatar: "Emma", tier: "gold", streak: 5 },
  { id: 5, name: "James Brown", score: 11890, bids: 156, avatar: "James", tier: "silver", streak: 4 },
  { id: 6, name: "Lisa Anderson", score: 10560, bids: 142, avatar: "Lisa", tier: "silver", streak: 7 },
  { id: 7, name: "David Lee", score: 9870, bids: 134, avatar: "David", tier: "silver", streak: 3 },
  { id: 8, name: "Sophie Martin", score: 8920, bids: 128, avatar: "Sophie", tier: "bronze", streak: 2 },
  { id: 9, name: "Chris Taylor", score: 8450, bids: 119, avatar: "Chris", tier: "bronze", streak: 5 },
  { id: 10, name: "Anna White", score: 7890, bids: 112, avatar: "Anna", tier: "bronze", streak: 3 },
  { id: 11, name: "Tom Harris", score: 7340, bids: 105, avatar: "Tom", tier: "bronze", streak: 2 },
  { id: 12, name: "Kate Moore", score: 6890, bids: 98, avatar: "Kate", tier: "bronze", streak: 1 },
];

const getTierColor = (tier: string) => {
  const colors = {
    diamond: "from-cyan-400 to-blue-600",
    platinum: "from-gray-300 to-gray-500",
    gold: "from-amber-400 to-yellow-600",
    silver: "from-slate-300 to-slate-500",
    bronze: "from-orange-400 to-orange-600"
  };
  return colors[tier as keyof typeof colors] || colors.bronze;
};

const getTierBadge = (tier: string) => {
  const badges = {
    diamond: "💎",
    platinum: "⚪",
    gold: "🥇",
    silver: "🥈",
    bronze: "🥉"
  };
  return badges[tier as keyof typeof badges] || "🏅";
};

export default function LeaderboardPageNew() {
    
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly" | "allTime">("weekly");
  const [expandedUser, setExpandedUser] = useState<number | null>(null);

  const topThree = MOCK_USERS.slice(0, 3);
  const theRest = MOCK_USERS.slice(3);

  return (
    <>
    <TopBar />
    <div className="mt-2 p-2 min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 pb-16">
      {/* Header Section - Compact for mobile */}
      <div className="relative rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 active:from-pink-700 active:to-rose-700 text-white pt-8 pb-24 px-3 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl" />
        
        <div className="relative z-10 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Trophy className="w-6 h-6 text-yellow-300" fill="currentColor" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Leaderboard</h1>
          </div>
          
          <p className="text-center text-white/80 text-xs font-medium mb-4">
            Players and their rankings based on Reward Points
          </p>

          {/* Tab Switcher - Touch optimized */}
          <div className="flex bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/20 shadow-xl">
            {["weekly", "monthly"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`relative flex-1 px-3 py-2 text-[11px] font-bold capitalize transition-all duration-200 rounded-lg ${
                  activeTab === tab ? "text-violet-700" : "text-white/70"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-lg shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === "allTime" ? "All Time" : tab}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Top 3 Podium - Compact for mobile */}
      <div className="relative z-10 -mt-20 px-3 mb-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-1 border border-gray-100 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500">
          <div className="flex items-end justify-center gap-2  bg-white rounded-2xl">
            {/* 2nd Place */}
            {topThree[1] && (
              <PodiumCard user={topThree[1]} rank={2} />
            )}
            
            {/* 1st Place */}
            {topThree[0] && (
              <PodiumCard user={topThree[0]} rank={1} isFirst />
            )}
            
            {/* 3rd Place */}
            {topThree[2] && (
              <PodiumCard user={topThree[2]} rank={3} />
            )}
          </div>
        </div>
      </div>

      {/* Rest of Rankings - Mobile optimized */}
      <div className="max-w-md mx-auto px-3">
        <div className="bg-white rounded-2xl shadow-lg p-3 border border-gray-100 ">
          <h2 className="text-base font-bold text-gray-800 mb-3 text-center">Top Players</h2>

          <div className="space-y-2">
            <AnimatePresence>
              {theRest.map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <button
                    onClick={() => setExpandedUser(expandedUser === user.id ? null : user.id)}
                    className="w-full"
                  >
                    <div className="flex items-center gap-2.5 p-2.5 bg-gradient-to-r from-indigo-100 to-purple-100 active:from-violet-50 active:to-purple-50 rounded-xl border border-gray-100 transition-all active:scale-[0.98]">
                      {/* Rank */}
                      <div className="w-7 h-7 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-gray-700">
                          {index + 4}
                        </span>
                      </div>

                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-11 h-11 bg-gradient-to-br ${getTierColor(user.tier)} rounded-lg p-0.5`}>
                          <div className="w-full h-full bg-white rounded-lg overflow-hidden flex items-center justify-center">
                            <img 
                              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`}
                              alt={user.name}
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 text-xs">
                          {getTierBadge(user.tier)}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 text-left min-w-0">
                        <h3 className="text-sm font-bold text-gray-800 leading-tight truncate">
                          {user.name}
                        </h3>
                        <p className="text-[10px] text-gray-500 font-medium">
                          {user.bids} bids • {user.streak}🔥
                        </p>
                      </div>

                      {/* Score */}
                      <div className="text-right flex-shrink-0">
                        <div className="text-sm font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                          {user.score.toLocaleString()}
                        </div>
                        {/* <div className="flex items-center justify-end gap-0.5 text-[10px] text-emerald-600 font-bold">
                          <TrendingUp className="w-2.5 h-2.5" />
                          <span>+5%</span>
                        </div> */}
                      </div>

                      {/* Expand Icon */}
                      {/* <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${expandedUser === user.id ? 'rotate-180' : ''}`} /> */}
                    </div>
                  </button>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedUser === user.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <div className="px-3 py-2.5 bg-gradient-to-r from-violet-50 to-purple-50 rounded-b-xl border-x border-b border-gray-100 -mt-2 pt-3">
                          <div className="grid grid-cols-3 gap-2">
                            <StatCard icon={<Star className="w-3.5 h-3.5" />} label="Wins" value="28" />
                            <StatCard icon={<Zap className="w-3.5 h-3.5" />} label="Win Rate" value="64%" />
                            <StatCard icon={<Award className="w-3.5 h-3.5" />} label="Tier" value={user.tier.slice(0, 4)} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Your Rank Card - Sticky bottom */}
      <div className="fixed bottom-20 left-0 right-0 px-3 z-10">
        <div className="max-w-md mx-auto bg-gradient-to-r from-pink-600 to-rose-600 active:from-pink-700 active:to-rose-700 text-white rounded-xl p-3 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-base font-black text-white">#47</span>
              </div>
              <div>
                <p className="text-white/80 text-[10px] font-medium">Your Rank</p>
                <p className="text-white text-xs font-bold">Keep climbing!</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-black text-white">3,450</p>
              <p className="text-white/80 text-[10px] font-medium">points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomNavBar/>
    </>
  );
}

function PodiumCard({ user, rank, isFirst = false }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: rank * 0.08, type: "spring", bounce: 0.4 }}
      className="flex flex-col items-center flex-1"
    >
      {/* Crown for 1st place */}
      {isFirst && (
        <Crown className="w-6 h-6 text-yellow-500 mb-1.5 animate-bounce" fill="currentColor" />
      )}

      {/* Avatar */}
      <div className={`relative mb-2 ${isFirst ? 'scale-105' : ''}`}>
        <div className={`w-14 h-14 rounded-xl p-0.5 ${
          rank === 1 ? 'bg-gradient-to-tr from-yellow-400 to-amber-600' :
          rank === 2 ? 'bg-gradient-to-tr from-gray-300 to-gray-500' :
          'bg-gradient-to-tr from-orange-400 to-orange-600'
        } shadow-lg`}>
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex items-center justify-center">
            <img 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`}
              alt={user.name}
              className="w-full h-full"
            />
          </div>
        </div>
        
        {/* Rank Badge */}
        <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black shadow-md border-2 border-white ${
          rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-amber-600 text-white' :
          rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-500 text-gray-700' :
          'bg-gradient-to-r from-orange-400 to-orange-600 text-white'
        }`}>
          {rank}
        </div>
      </div>

      {/* Name & Score */}
      <div className="text-center mb-1.5 px-1">
        <p className="text-[11px] font-bold text-gray-800 truncate max-w-[80px]">
          {user.name.split(' ')[0]}
        </p>
        <p className="text-xs font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
          {user.score.toLocaleString()}
        </p>
      </div>

      {/* Podium Block */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isFirst ? 70 : rank === 2 ? 55 : 45 }}
        transition={{ delay: 0.25 + rank * 0.08 }}
        className={`w-full rounded-t-xl ${
          rank === 1 ? 'bg-gradient-to-b from-yellow-100 to-amber-200' :
          rank === 2 ? 'bg-gradient-to-b from-gray-100 to-gray-200' :
          'bg-gradient-to-b from-orange-100 to-orange-200'
        } border border-gray-200 shadow-inner`}
      />
    </motion.div>
  );
}

function StatCard({ icon, label, value }: any) {
  return (
    <div className="bg-white rounded-lg p-2 text-center">
      <div className="flex justify-center text-violet-600 mb-0.5">
        {icon}
      </div>
      <p className="text-[9px] text-gray-500 font-medium uppercase">{label}</p>
      <p className="text-xs font-bold text-gray-800">{value}</p>
    </div>
  );
}