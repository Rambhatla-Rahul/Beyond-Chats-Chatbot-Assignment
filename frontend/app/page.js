import ChatMain from "@/components/ChatMain";
import InboxUI from "@/components/InboxUI";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex h-screen max-h-screen overflow-hidden select-none bg-white font-sans text-gray-900">
      <SidebarLeft />
      <ChatMain />
      <SidebarRight />
    </div>
  );
}
