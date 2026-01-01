"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Crown, TrendingUp, Sparkles, ChevronRight, Zap } from "lucide-react";
import type { LeaderboardUser } from "@/types";
import { useNavigate } from "react-router-dom";

interface LeaderboardProps {
  weeklyUsers: LeaderboardUser[];
  monthlyUsers: LeaderboardUser[];
}

export default function LeaderboardNew({ weeklyUsers, monthlyUsers }: LeaderboardProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly">("weekly");
  const users = activeTab === "weekly" ? weeklyUsers : monthlyUsers;

  const topThree = users.slice(0, 3);
  const theRest = users.slice(3);

  return (
    <div className="w-full max-w-md mx-auto relative group">
      {/* Outer Glow / Mesh Gradient Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.6rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      
      <div className="relative bg-white/90 backdrop-blur-2xl rounded-[2.5rem] px-2 py-4  overflow-hidden">
        
        {/* Decorative Animated Blobs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-200/50 rounded-full blur-3xl animate-pulse" />

        {/* Header Section */}
        <div className="relative z-10 flex flex-col gap-6 mb-8">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-600 fill-indigo-600" />
                <h2 className="text-xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                  Rankings
                </h2>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-7">Live</p>
            </div>
            
            {/* Custom Styled Switch */}
            <div className="flex bg-slate-100/80 p-1 rounded-2xl border border-slate-200 shadow-inner">
              {["weekly", "monthly"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`relative px-4 py-2 text-xs font-black capitalize transition-all duration-500 rounded-xl ${
                    activeTab === tab ? "text-white" : "text-slate-500"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="vibrantTab"
                      className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 active:from-pink-600 active:to-rose-600 text-white rounded-xl shadow-lg shadow-indigo-200"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3D-Style Podium */}
        <div className="relative z-10 flex items-end justify-center gap-3 mb-5 pt-3 h-54">
          {topThree[1] && <PodiumItem user={topThree[1]} rank={2} color="bg-slate-200" delay={0.1} height="h-24" />}
          {topThree[0] && <PodiumItem user={topThree[0]} rank={1} color="bg-amber-400" delay={0} isGold height="h-32" />}
          {topThree[2] && <PodiumItem user={topThree[2]} rank={3} color="bg-orange-200" delay={0.2} height="h-20" />}
        </div>

        {/* List Section with Gradient Accents */}
        <div className="relative z-10 space-y-3 mt-2">
          <AnimatePresence mode="popLayout">
            {theRest.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex items-center justify-between p-4 bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-300 hover:to-purple-300 rounded-[1.5rem] border border-slate-100 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 text-center font-black text-slate-300 group-hover:text-indigo-300 transition-colors">
                    {index + 4}
                  </div>
                  <div className="relative">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} 
                      className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-100 p-0.5" 
                      alt="avatar" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{user.name}</h4>
                    <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider">{user.bids} Bids</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-md font-black text-slate-900">{user.score.toLocaleString()}</div>
                  {/* <div className="text-[10px] font-bold text-emerald-500 flex items-center justify-end">
                    <TrendingUp className="w-3 h-3 mr-1" /> +12%
                  </div> */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Action Button - Neon Style */}
        <button className="relative z-10 w-full mt-2 py-4 bg-gradient-to-r from-pink-500 to-rose-500 active:from-pink-600 active:to-rose-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-purple-200 hover:shadow-purple-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        onClick={() => {
              navigate("/leaderboard");
            }}
        >
          SEE FULL RANKINGS <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function PodiumItem({ user, rank, color, delay, isGold, height }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      className="relative flex flex-col items-center flex-1 group"
    >
      <div className="relative mb-4">
        {/* Avatar with Ring */}
        <div className={`w-16 h-16 rounded-full p-1 ${isGold ? 'bg-gradient-to-tr from-yellow-400 to-amber-600' : 'bg-slate-200'} shadow-lg transition-transform duration-500 group-hover:scale-110`}>
          <div className="bg-white rounded-full w-full h-full flex items-center justify-center overflow-hidden">
             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="user" className="w-12 h-12" />
          </div>
        </div>
        
        {/* Rank Badge */}
        <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${color} ${isGold ? 'text-white' : 'text-slate-700'} text-[10px] font-black w-7 h-7 flex items-center justify-center rounded-xl shadow-lg border-2 border-white`}>
          {rank}
        </div>
        
        {isGold && <Crown className="absolute -top-7 left-1/2 -translate-x-1/2 text-amber-400 w-7 h-7 drop-shadow-lg animate-bounce" />}
      </div>

      <div className="text-center z-10 mb-2">
        <p className="text-[11px] font-black text-slate-800 truncate px-1">{user.name.split(' ')[0]}</p>
        <p className="text-xs font-bold text-indigo-600">{user.score.toLocaleString()}</p>
      </div>

      {/* The 3D Podium Block */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: isGold ? 100 : rank === 2 ? 70 : 50 }}
        className={`w-full rounded-t-[1.5rem] bg-gradient-to-b ${isGold ? 'from-amber-500/50 to-amber-500/50' : 'from-cyan-200/50 to-cyan-200'} border-x border-t border-slate-100 shadow-inner`}
      />
    </motion.div>
  );
}