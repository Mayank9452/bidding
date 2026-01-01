import BidCard from "@/components/BidCard";
import VideoSection from "@/components/VideoSection";
import ActivitySlider from "@/components/ActivitySlider";
import Leaderboard from "@/components/Leaderboard";
import { BIDS_DATA, ACTIVITY_FEED, LEADERBOARD_DATA } from "@/utils/mockData";
import { TopBar } from "@/components/TopBar";
import {
  Flame,
  PlayCircle,
  Activity,
  Trophy,
} from "lucide-react";
import { BottomNavBar } from "@/components/BottomNavBar";
import LeaderboardNew from "@/components/LeaderboardNew";
import BidCardDemo from "@/components/BidCardDemo";
const gradientBackground = ["gradient-casino", "gradient-dark", "gradient-purple", "gradient-green-dark", "gradient-pink-dark", "gradient-blue"];
export default function HomePage() {
  return (
    <>
      <TopBar />
      <div className="mobile-container py-2 pb-2  space-y-2">



        {/* LIVE AUCTIONS */}
        <section className="
  rounded-3xl
  p-2
  " style={{opacity: 1, transform: "none"}}>
          {/* <h2 className="text-xl text-center font-extrabold text-gradient-casino mb-4">
            🔥 Live Auctions
          </h2> */}

          <div className="py-2 mb-4 w-full mx-auto rounded-lg
    bg-[linear-gradient(135deg,#d4d4d4_0%,#e4e4e4_30%,#ffffff_55%,#e0e0e0_75%,#dcdcdc_100%)]
    shadow-[0_2px_6px_rgba(0,0,0,0.15)] ">
            <h2 className="flex items-center justify-center gap-2 text-xl font-extrabold gradient-pink-purple">
              <Flame className="h-5 w-5 text-primary" />
              Live Auctions
            </h2>
          </div>

          {/* TWO BIDS PER ROW */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {/* {BIDS_DATA.map((bid, index) => (
              <BidCard key={bid.id} bid={bid} background={gradientBackground[(index) % gradientBackground.length]} />
            ))} */}
            <BidCardDemo />
          </div>
        </section>

        {/* HERO VIDEO */}
        <section className="
  rounded-3xl
  p-2
" style={{opacity: 1, transform: "none"}}>
          {/* <h2 className="text-xl text-center font-extrabold text-gradient-casino mb-4">
            <PlayCircle className="h-5 w-5 text-primary" />
            ⚡ How to Play
          </h2> */}
          <div className="bg-pink-100 py-2 mb-4 w-full mx-auto rounded-lg bg-[linear-gradient(135deg,#d4d4d4_0%,#e4e4e4_30%,#ffffff_55%,#e0e0e0_75%,#dcdcdc_100%)]
    shadow-[0_2px_6px_rgba(0,0,0,0.15)] ">
            <h2 className="flex items-center justify-center gap-2 text-xl font-extrabold gradient-pink-purple">
              <PlayCircle className="h-5 w-5 text-primary" />
              How to Play
            </h2>
          </div>

          <section className="rounded-2xl overflow-hidden transparent">

            <VideoSection />
          </section>

        </section>


        {/* ACTIVITY */}
        <section className="
  rounded-3xl
  p-2
  " style={{opacity: 1, transform: "none"}}>
          {/* <h2 className="text-lg font-bold text-gradient-gold mb-3">
          ⚡ Live Activity
        </h2> */}

          {/* <h2 className="text-xl text-center font-extrabold text-gradient-casino mb-4">
            ⚡ Live Activity
          </h2> */}
          <div className="py-2 mb-4 w-full mx-auto rounded-lg bg-[linear-gradient(135deg,#d4d4d4_0%,#e4e4e4_30%,#ffffff_55%,#e0e0e0_75%,#dcdcdc_100%)]
    shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
            <h2 className="flex items-center justify-center gap-2 text-xl font-extrabold gradient-pink-purple">
              <Activity className="h-5 w-5 text-primary" />
              Live Activity
            </h2>
          </div>



          <ActivitySlider activities={ACTIVITY_FEED} />
        </section>

        {/* LEADERBOARD */}
        <section className="
  rounded-3xl
  p-2
  " style={{opacity: 1, transform: "none"}}>
          {/* <h2 className="text-xl text-center font-extrabold text-gradient-casino mb-4">
            ⚡ Leaderboard
          </h2> */}
          <div className="bg-pink-100 py-2 mb-4 w-full mx-auto rounded-lg bg-[linear-gradient(135deg,#d4d4d4_0%,#e4e4e4_30%,#ffffff_55%,#e0e0e0_75%,#dcdcdc_100%)]
    shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
            <h2 className="flex items-center justify-center gap-2 text-xl font-extrabold gradient-pink-purple">
              <Trophy className="h-5 w-5 text-primary" />
              Leaderboard
            </h2>
          </div>

          <LeaderboardNew weeklyUsers={LEADERBOARD_DATA} monthlyUsers={LEADERBOARD_DATA} />
        </section>

      </div>
      <BottomNavBar />
    </>

  );
}
