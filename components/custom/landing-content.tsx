"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    ImageIcon,
    ImagePlay,
    Share2,
    Megaphone,
    Soup,
    SearchCheck,
    TextCursorInput
} from "lucide-react";
import Link from "next/link";

const testimonials = [
    {
        icon: Share2,
        number: "01",
        title: "Social Media Content",
        description: "Generate captions, post, or any engaging text content for your most favorite social media platforms!",
        link: "/socialmedia",
    },
    {
        icon: Megaphone,
        number: "02",
        title: "Campaign Generation",
        description: "Plan and execute high performing ads with ease using AI-powered campaign generation!",
        link: "/campaign",
    },
    {
        icon: ImageIcon,
        number: "03",
        title: "AI Product Shots",
        description:
            "Create professional, stunning, high-resolution, and realistic product shots in just a few clicks!",
        link: "/product",
    },
    {
        icon: Soup,
        number: "04",
        title: "AI Professional Food Shot",
        description:
            "Generate mind-blowing and hyper-realistic food photography of your dishes without ever picking up a camera!",
        link: "/food",
    },
    {
        icon: TextCursorInput,
        number: "05",
        title: "Image to Captions Generation",
        description:
            "Craft AI-generated and engaging captions for your image of product or dish. No time for manual work and ideation anymore!",
        link: "/captions",
    },
    {
        icon: SearchCheck,
        number: "06",
        title: "AI SEO Expert Assistant",
        description:
            "Select and edit our curated SEO templates to create an optimized SEO strategy, contents, keywords, titles, and more to dominate the search engines.",
        link: "/seo",
    }
];

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Try Our AI-Powered Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {testimonials.map((item) => (
                    <Link key={item.description} href={item.link}>
                        <Card
                            key={item.description}
                            className="bg-[#192339] border-none text-white h-72"
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center gap-x-2">
                                    <div>
                                        <item.icon className="w-9 h-9 mb-5" />
                                        <p className="text-zinc-400 text-sm">{item.number}</p>
                                        <p className="text-zinc-200 text-md font-bold">{item.title}</p>
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
            <div className="text-center mt-6">
                <Link href="/dashboard">
                    <Button
                        variant="outline"
                        className="md:text-md p-4 md:p-6 rounded-full font-semibold"
                    >
                        More Tools
                    </Button>
                </Link>
            </div>
        </div>
    );
};

