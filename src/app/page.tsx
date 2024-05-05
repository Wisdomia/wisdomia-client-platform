'use client'

import Topbar from "@/components/topbar/Topbar";
import WisdomsContainer from "@/components/wisdoms-container/WisdomsContainer";

export default function Home() {
  return (
   <div className={"home"}>
    <Topbar/>
    <WisdomsContainer/>
   </div>
  );
}
