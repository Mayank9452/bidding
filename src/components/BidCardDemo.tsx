import { Clock, Users, Zap, TrendingUp, Target, Gem, Award, DollarSign } from "lucide-react";

// Mock data for demonstration
const SAMPLE_BIDS = [
  {
    id: 1,
    title: "Bid 1",
    description: "Active Cycle 1",
    currentBid: 452,
    status: "Live"
  },
  {
    id: 2,
    title: "Bid 2",
    description: "Active Cycle 2",
    currentBid: 328,
    status: "Live"
  },
  {
    id: 3,
    title: "Bid 3",
    description: "Active Cycle 1",
    currentBid: 567,
    status: "Live"
  },
  {
    id: 4,
    title: "Bid 4",
    description: "Active Cycle 3",
    currentBid: 891,
    status: "Live"
  },
//   {
//     id: 5,
//     title: "Bid 5",
//     description: "Active Cycle 2",
//     currentBid: 234,
//     status: "Live"
//   },
//   {
//     id: 6,
//     title: "Bid 6",
//     description: "Active Cycle 1",
//     currentBid: 678,
//     status: "Live"
//   }
];

const gradientBackgrounds = [
  "from-violet-600 to-indigo-600",
  "from-fuchsia-600 to-pink-600", 
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-red-600",
  "from-purple-600 to-blue-600"
];

// Different icons for visual variety
const bidIcons = [Target, Gem, Award, TrendingUp, DollarSign, Zap];

function BidCard({ bid, background, index }: { bid: any; background: string; index: number }) {
  const BidIcon = bidIcons[index % bidIcons.length];
  
  return (
    <div className="w-full rounded-xl overflow-hidden bg-gradient-to-br from-violet-50 to-indigo-50 shadow-md active:scale-95 transition-transform duration-150 border border-gray-300">
      {/* Gradient Header with Icon - Compact for mobile */}
      <div className={`relative h-24 bg-gradient-to-br ${background} p-3 flex items-center justify-center overflow-hidden`}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl -translate-x-6 -translate-y-6"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-white rounded-full blur-xl translate-x-4 translate-y-4"></div>
        </div>
        
        {/* Main Icon */}
        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-white/30 shadow-lg">
            <BidIcon className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2.5} />
          </div>
          
          {/* Live Indicator - Smaller for mobile */}
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-[9px] font-bold text-gray-800">{bid.title}</span>
          </div>
        </div>
      </div>

      {/* Content Section - Optimized spacing for mobile */}
      <div className="p-1 space-y-2">
        {/* Title */}
        {/* <div className="text-center">
          <h3 className="text-base font-bold text-gray-800">
            {bid.title}
          </h3>
        </div> */}

        {/* Stats Grid - More compact */}
        <div className="space-y-2">
          {/* Cycle Info */}
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-100">
            <div className="w-7 h-7 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <p className="text-[11px] font-semibold text-gray-700">
              {bid.description}
            </p>
          </div>

          {/* Bidders Count */}
          <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[11px] font-semibold text-gray-700">Players</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 bg-white rounded-md shadow-sm">
              <Zap className="w-3 h-3 text-yellow-500" fill="currentColor" />
              <span className="font-bold text-sm text-gray-800">{bid.currentBid}</span>
            </div>
          </div>
        </div>

        {/* CTA Button - Touch optimized */}
        <button className="w-3/4 mx-auto bg-gradient-to-r from-pink-500 to-rose-500 active:from-pink-600 active:to-rose-600 text-white font-bold py-2.5 rounded-lg text-sm transition-colors duration-150 shadow-md active:shadow-lg flex items-center justify-center gap-2">
          <Target className="w-4 h-4" />
          Enter Bid
        </button>
      </div>
    </div>
  );
}

// Demo Component - Mobile viewport
export default function BidCardDemo() {
  return (
    <div className=" bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Mobile container simulation */}
      <div className="max-w-md mx-auto bg-white">
        {/* Header */}
        {/* <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 text-white">
          <h1 className="text-xl font-bold text-center">Live Auctions</h1>
        </div> */}

        {/* Content with padding */}
        <div className="p-1">
          {/* Grid - 2 columns for mobile */}
          <div className="grid grid-cols-2 gap-3">
            {SAMPLE_BIDS.map((bid, index) => (
              <BidCard 
                key={bid.id} 
                bid={bid} 
                background={gradientBackgrounds[index % gradientBackgrounds.length]}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Mobile optimization notes */}
        {/* <div className="m-3 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-xl p-4 border border-violet-100">
          <h2 className="text-sm font-bold text-gray-800 mb-2">📱 Mobile Optimizations</h2>
          <ul className="space-y-1 text-xs text-gray-600">
            <li>✓ Touch-friendly tap targets (44px min)</li>
            <li>✓ Compact spacing for small screens</li>
            <li>✓ Active states instead of hover</li>
            <li>✓ Optimized font sizes (11-16px)</li>
            <li>✓ Fast transitions (150ms)</li>
            <li>✓ 2-column grid layout</li>
            <li>✓ Reduced padding and margins</li>
            <li>✓ No unnecessary animations</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}