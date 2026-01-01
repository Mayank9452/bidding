import DetailsPage from "@/components/DetailsPage";
import LeaderboardPageNew from "@/components/LeaderboardPageNew";
import NotificationPage from "@/components/NotificationPage";
import ProfilePage from "@/components/ProfilePage";
import HomePage from "@/pages/HomePage";


const routes = [
  { path: "/", element: <HomePage /> },
  {
    path: "/details",
    element: <DetailsPage />,
  },
  {
    path: "/leaderboard",
    element: <LeaderboardPageNew />,
  },
  {
    path: "/notification",
    element: <NotificationPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  }
  // { path: "/dashboard", element: <Index /> },
  // { path: "/games", element: <Games /> },
  // { path: "/games/:category", element: <CategoryWiseGames /> },
  // { path: "/games/:category/:game", element: <PlayGamesUpdated /> },
  // { path: "/rewards", element: <Rewards /> },
  // { path: "/profile", element: <Profile /> },
  // { path: "/update-profile", element: <UpdateProfile /> },

  // { path: "/spin", element: <SpinWheel /> },
  // { path: "/spinner", element: <SpinWheel /> },
  // { path: "/spinner/:handle", element: <SpinWheelUpdated /> },
  // { path: "/prospinner/:handle", element: <JackpotSpinWheel /> },

  // { path: "/triple777", element: <Triple777 /> },
  // { path: "/slot", element: <Triple777 /> },
  // { path: "/slot/:handle", element: <Triple777 /> },
  
  // { path: "/dice", element: <RollDice /> },
  // { path: "/dice/:handle", element: <RollDice /> },

  // { path: "/jackpot", element: <SpinJackpot /> },
  
];

export { routes };
