"use client"

import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { Coins } from "lucide-react"
import { store } from "@/config/config"
// import { useAppSelector } from "@/app/hooks"

export function TopBar({ comingFrom = "spin-the-wheel", remainingJackpot = 0 }: { comingFrom?: string, remainingJackpot?: Number } ) {
  // const dashboard = useAppSelector((state) => state?.dashboard);
  // const auth = useAppSelector((state) => state?.auth);
  // const coins = comingFrom === 'jackpot' ? ( auth?.data?.phone !== "8054228278" ? remainingJackpot : 0 ) : dashboard?.data?.data?.balance?.spin ?? 0;
  // const coins = comingFrom === 'jackpot' ? remainingJackpot : dashboard?.data?.data?.balance?.spin ?? 0;

  return (
    <div className="sticky -top-[1px] z-[999] w-full">
      <div className="glass-card-light border-primary/20 px-4 py-2 rounded-b-2xl" style={{border: "none", borderBottom: "1px solid hsl(240 6% 20%)"}}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="p-1 rounded-lg gradient-magic">
              {/* <img src={store.logo} className="h-12 w-16 object-cover" alt="BidBlast" loading="lazy" /> */}
            </div>
            <div className="flex items-center h-16">
              <h1 className="text-2xl font-bold bg-gradient-to-br from-[#054D8C] via-[#4EBFE2] to-[#054D8C] bg-clip-text text-transparent text-white">
                BidBlast
              </h1>
            </div>
          </div>
          
          {/* <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/20 bg-card/50 dark:bg-card/10 backdrop-blur-sm hover:bg-card/10 hover:dark:bg-card/20 transition-smooth"
            >
              
              <Coins className="h-4 w-4 mr-2 text-primary" />

              <span className="font-bold text-primary">{"0"}</span>
            </Button>
            
            {<ThemeToggle /> }
          </div> */}
          <div className="flex gap-3">

            {/* COINS BUTTON */}
            <Button
              variant="outline"
              className="flex flex-col items-center px-3 py-2
                         border-primary/20 bg-card/50 dark:bg-card/10 backdrop-blur-sm
                         hover:bg-card/10 hover:dark:bg-card/20 transition-smooth"
            >
              {/* <span className="text-[10px] font-medium text-white-foreground">
                Coins
              </span> */}
              <div className="flex items-center gap-1 mt-1">
                <Coins className="h-4 w-4 text-primary" />
                <span className="font-bold text-primary">0</span>
              </div>
            </Button>

            {/* REWARD COINS BUTTON */}
            <Button
              variant="outline"
              className="flex flex-col items-center px-3 py-2
                         border-primary/20 bg-card/50 dark:bg-card/10 backdrop-blur-sm
                         hover:bg-card/10 hover:dark:bg-card/20 transition-smooth"
            >
              {/* <span className="text-[10px] font-medium text-white-foreground">
                Reward Coins
              </span> */}
              <div className="flex items-center gap-1 mt-1">
                <Coins className="h-4 w-4 text-yellow-400" />
                <span className="font-bold text-yellow-400">500</span>
              </div>
            </Button>

          </div>
        </div>
      </div>
    </div>
  )
}