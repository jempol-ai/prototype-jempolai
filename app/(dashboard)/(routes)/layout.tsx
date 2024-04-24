import React from "react";
import Sidebar from "@/components/custom/sidebar-v0";
import SidebarNav from "@/components/custom/sidebar";


const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
 

  return (
    // <div className="h-full relative">
    //   <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
    //     <Sidebar />
        
    //   </div>
    //   <main className="md:pl-72 pb-10">
    //     {children}
    //   </main>
    // </div>
    <div className="grid h-screen w-full">
        <SidebarNav />
        <div className="flex flex-col">
            {children}
        </div>
    </div>
  );
};

export default DashboardLayout;
