import {
    Share2,
    SearchCheck,
    Soup,
    Megaphone,
    TextCursorInput,
    Library,
    ImageIcon,
    LibraryBig
} from "lucide-react";

export const dashboardRoutes = [
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
    },
    {
        icon: Library,
        number: "07",
        title: "Prompt Collection for AI Product Shots",
        description:
            "Select, edit, and save the prompts you need to generate professional, stunning, high-resolution, and realistic product shots.",
        link: "/producttemplate",
    },
    {
        icon: LibraryBig,
        number: "08",
        title: "Prompt Collection for AI Food Shots",
        description:
            "Impress your customers with our curated prompts for professional, mind-blowing, high-resolution, and mouth-watering food shots.",
        link: "/foodtemplate",
    }
]