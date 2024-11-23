import Carousel from "@/components/Crousal";
import Infinite_Scroller from "@/components/Infinite_Scroller";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-500">
     <Carousel/>
     <Infinite_Scroller/>
     <Intro/>
    </div>
  );
}
