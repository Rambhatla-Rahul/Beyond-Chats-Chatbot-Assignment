import ChatMain from "@/components/ChatMain";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";


export default function Home() {
  return (
   <div className="flex h-screen max-h-screen overflow-hidden select-none bg-white font-sans text-gray-900">
      <SidebarLeft />
      <ChatMain />
      <SidebarRight />
    </div>
  );
}
