"use client";
import ChatMain from "@/components/ChatMain";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import { useState } from "react";


export default function Home() {
  const [composerText, setComposerText] = useState("");
  return (
   <div className="flex h-screen max-h-screen overflow-hidden select-none bg-white font-sans text-gray-900">
      <SidebarLeft />
      <ChatMain composerText={composerText} setComposerText={setComposerText}/>
      <SidebarRight setComposerText={setComposerText}/>
    </div>
  );
}
