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
const gradientBackground = ["gradient-purple", "gradient-green", "gradient-pink-dark", "gradient-casino"];
export default function HomePage() {
  return (
    <>
      <TopBar />
      <div className="mobile-container px-4 py-4 pb-2  space-y-10">



        {/* LIVE AUCTIONS */}
        <section>
          {/* <h2 className="text-xl text-center font-extrabold text-gradient-casino mb-4">
            🔥 Live Auctions
          </h2> */}

          <h2 className="flex items-center justify-center gap-2 text-xl font-extrabold gradient-light-header custom-header mb-4">
            <Flame className="h-5 w-5 text-primary" />
            Live Auctions
          </h2>

          {/* TWO BIDS PER ROW */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {BIDS_DATA.map((bid, index) => (
              <BidCard key={bid.id} bid={bid} background={gradientBackground[(index) % gradientBackground.length]} />
            ))}
          </div>
        </section>

        {/* HERO VIDEO */}
        <section>
          {/* <h2 className="text-xl text-center font-extrabold text-gradient-casino mb-4">
            <PlayCircle className="h-5 w-5 text-primary" />
            ⚡ How to Play
          </h2> */}
          <h2 className="flex items-center justify-center gap-2 text-xl font-extrabold gradient-light-header custom-header mb-4">
            <PlayCircle className="h-5 w-5 text-primary" />
            How to Play
          </h2>
          <section className="rounded-2xl overflow-hidden  card-shadow transparent">

            <VideoSection />
          </section>

        </section>


        {/* ACTIVITY */}
        <section>
          {/* <h2 className="text-lg font-bold text-gradient-gold mb-3">
          ⚡ Live Activity
        </h2> */}

          {/* <h2 className="text-xl text-center font-extrabold text-gradient-casino mb-4">
            ⚡ Live Activity
          </h2> */}

          <h2 className="flex items-center justify-center gap-2 text-xl font-extrabold gradient-light-header custom-header mb-4">
            <Activity className="h-5 w-5 text-primary" />
            Live Activity
          </h2>


          <ActivitySlider activities={ACTIVITY_FEED} />
        </section>

        {/* LEADERBOARD */}
        <section>
          {/* <h2 className="text-xl text-center font-extrabold text-gradient-casino mb-4">
            ⚡ Leaderboard
          </h2> */}
          <h2 className="flex items-center justify-center gap-2 text-xl font-extrabold mb-4 gradient-light-header custom-header">
            <Trophy className="h-5 w-5 text-primary" />
            Leaderboard
          </h2>
          <Leaderboard weeklyUsers={LEADERBOARD_DATA} monthlyUsers={LEADERBOARD_DATA} />
        </section>

      </div>
      <BottomNavBar/>
    </>

  );
}
