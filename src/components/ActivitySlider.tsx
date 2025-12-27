// import { Card } from "@/components/ui/card";

// import type { Activity } from "@/types";

// export default function ActivitySlider({
//   activities,
// }: {
//   activities: Activity[];
// }) {
//   return (
//     <div className="flex gap-4 overflow-x-auto pb-2">
//       {activities.map((activity) => (
//         <div
//           key={activity.id}
//           className="glass-card rounded-xl p-4 min-w-[240px] card-shadow"
//         >
//           <p className="text-xs font-medium leading-snug">
//             {activity.message}
//           </p>

//           <span className="text-[10px] text-muted-foreground mt-2 block">
//             {activity.time}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }

import type { Activity } from "@/types"
import { c } from "node_modules/framer-motion/dist/types.d-Cjd591yU"

export default function ActivitySlider({
  activities,
}: {
  activities: Activity[]
}) {
  // const gradientBackground = ["gradient-pink-yellow","gradient-pink-violet"];
  // const gradientBackground = ["bg-gradient-to-r from-pink-500 via-yellow-500 to-yellow-300","bg-gradient-to-r from-pink-500 via-violet-500 to-violet-300"];
  const gradientBackground = ["gradient-purple", "gradient-green", "gradient-pink-dark", "gradient-casino"];

  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-4 animate-slide-right">
        {[...activities, ...activities].map((activity, index) => (
          <div
            key={`${activity.id}-${index}`}
            className={` rounded-xl p-4 min-w-[240px] card-shadow ${gradientBackground[index % gradientBackground.length]}`}
          >
            {/* <p className="text-xs font-medium leading-snug">
              {activity.message}
            </p> */}

            <h3 className="text-sm font-bold ">
              {activity.message}
            </h3>

            <span className="text-[10px] text-white-foreground mt-2 block">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
