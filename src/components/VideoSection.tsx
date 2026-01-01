import { Card } from "@/components/ui/card";
import { useLocation, useNavigate, useParams } from "react-router-dom"

export default function VideoSection() {
    const navigate = useNavigate();
  return (
    // <Card className="overflow-hidden flex  justify-center bg-transparent">
    //   <div className="w-full"
    //     style={{ width: '90%' }}>
    //     <video
    //       className="w-full h-full object-cover"
    //       src="https://bidblast.club/assets/frontend/img/introduction.mp4"
    //       autoPlay
    //       muted
    //       loop
    //     />
    //   </div>

    //   <div className="w-full  p-3 flex flex-col justify-center items-center gap-3">

    //     <h3 className="text-lg font-extrabold gradient-green custom-heading leading-tight pt-3 pb-3 px-1">
    //       About BidBlast
    //     </h3>

    //     <p className="text-xs text-black text-center leading-relaxed font-semibold">
    //       Welcome to BidBlast, the exciting daily bidding game.
    //     </p>

    //     <p className="text-xs text-center text-gradient-pink font-semibold">
    //       To Know More, click below button.
    //     </p>

    //     <div className="flex justify-center">
    //       <button className="pushable w-fit mt-2" onClick={() => {
    //         navigate("/details", {
    //           state: { videoUrl: "https://bidblast.club/assets/frontend/img/introduction.mp4" },
    //         });
    //       }}>
    //         {/* <span className="cs-shadow" />
    //       <span className="edge gradient-light" /> */}
    //         <span className="front gradient-light text-black px-6 py-2 rounded-xl text-sm font-semibold">
    //           Get Details
    //         </span>
    //       </button>
    //     </div>

    //   </div>

    // </Card>
    <Card className="overflow-hidden flex justify-center bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl shadow-lg">
      <div className="w-full" style={{ width: '90%' }}>
        <video
          className="w-full h-full object-cover rounded-lg"
          src="https://bidblast.club/assets/frontend/img/introduction.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="w-full p-3 flex flex-col justify-center items-center gap-3">
        <h3 className="text-lg font-extrabold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight pt-3 pb-3 px-1">
          About BidBlast
        </h3>

        <p className="text-xs text-gray-800 text-center leading-relaxed font-semibold">
          Welcome to BidBlast, the exciting daily bidding game.
        </p>

        <p className="text-xs text-center bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent font-semibold">
          To Know More, click below button.
        </p>

        <div className="flex justify-center">
          <button 
            className="pushable w-fit mt-2" 
            onClick={() => {
              navigate("/details", {
                state: { videoUrl: "https://bidblast.club/assets/frontend/img/introduction.mp4" },
              });
            }}
          >
            <span className="front bg-gradient-to-r from-pink-500 to-rose-500 active:from-pink-600 active:to-rose-600 text-white font-bold py-2.5 rounded-lg text-sm transition-colors duration-150 shadow-md active:shadow-lg flex px-6">
              Get Details
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
}
