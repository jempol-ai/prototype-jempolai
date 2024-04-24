"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    LayoutDashboardIcon
} from "lucide-react";

import Link from "next/link";

import CustomBreadcrumb from "@/components/custom/page-title";


const breadcrumbItems = [
  { href: "/", label: "Jempol AI" },
  { href: "/dashboard", label: "Dashboard" },
  { label: "Dashboard" } // Current page, no link
];

import { dashboardRoutes } from "./constant";

const IndexPage = () => {
  return (
    <div className="bg-white shadow rounded-lg py-6 ml-12 px-8">
      <div className="flex">
        <LayoutDashboardIcon className="h-6 w-6 text-gray-500 mr-3" />
        <CustomBreadcrumb items={breadcrumbItems} />
      </div>
      
      <div className="gap-4 mb-4">
        <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text inline-block text-transparent text-6xl font-bold mb-3">
          Hello, [Olivia Rhye]
        </h1>

        <h1 className="bg-gradient-to-r from-slate-800 via-purple-500 to-gray-500 bg-clip-text text-transparent text-6xl font-bold text-3xl font-bold mb-8">
          How can I help you today?
        </h1>
      </div>
      <h2 className="text-xl text-indigo-500 font-extrabold mb-5">Let&apos;s try out Jempol AI</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
                {dashboardRoutes.map((item) => (
                    <Link key={item.description} href={item.link}>
                        <Card
                            key={item.description}
                            className="bg-zinc-100 border-[#192339] text-[#192339] h-72"
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center gap-x-2">
                                    <div> 
                                        <item.icon className="w-9 h-9 mb-5" />
                                        <p className="text-zinc-400 text-sm">{item.number}</p>
                                        <p className="text-[#192339] text-md font-bold mt-1">{item.title}</p>
                                    </div>
                                </CardTitle>
                                <CardContent className="pt-6 px-0">
                                    {item.description}
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </Link>

                ))}
            </div>
    </div>
  );
};

export default IndexPage;