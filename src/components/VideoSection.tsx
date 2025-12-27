import { Card } from "@/components/ui/card";

export default function VideoSection() {
  return (
    <Card className="overflow-hidden flex  justify-center bg-transparent">
      <div className="w-full"
        style={{ width: '90%' }}>
        <video
          className="w-full h-full object-cover"
          src="https://bidblast.club/assets/frontend/img/introduction.mp4"
          autoPlay
          muted
          loop
        />
      </div>

      <div className="w-full  p-3 flex flex-col justify-center items-center gap-3">

        <h3 className="text-lg font-extrabold gradient-green custom-heading leading-tight pt-3 pb-3 px-1">
          About BidBlast
        </h3>

        <p className="text-xs text-black text-center leading-relaxed font-semibold">
          Welcome to BidBlast, the exciting daily bidding game.
        </p>

        <p className="text-xs text-center text-gradient-pink font-semibold">
          To Know More, click below button.
        </p>

        <div className="flex justify-center">
          <button className="pushable w-fit mt-2">
          {/* <span className="cs-shadow" />
          <span className="edge gradient-light" /> */}
          <span className="front gradient-light text-black px-6 py-2 rounded-xl text-sm font-semibold">
            Get Details
          </span>
        </button>
        </div>

      </div>

    </Card>
  );
}
