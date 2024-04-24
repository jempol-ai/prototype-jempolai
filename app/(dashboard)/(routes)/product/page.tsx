'use client'
import { useState, FormEvent, ChangeEvent } from 'react';


// icons
import {
    GalleryHorizontalEnd,
    Paperclip,
    Mic,
    CornerDownLeft,
    ImageDown
} from "lucide-react";

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"

// local and constants
import { styles, backgrounds, angles, focusTypes, aspectRatios } from './constant';
import CustomBreadcrumb from "@/components/custom/page-title";

// breadcrumb
const breadcrumbItems = [
    { href: "/", label: "Jempol AI" },
    { href: "/dashboard", label: "Dashboard" },
    { label: "AI Product Shot" } // Current page, no link
];



const ProductImagePage = () => {
    // state
    const [styleClass, setStyleClass] = useState<string>('professional');
    const [backgroundClass, setBackgroundClass] = useState<string>('elegant');
    const [angleClass, setAngleClass] = useState<string>('');
    const [focusTypeClass, setFocusTypeClass] = useState<string>('');
    const [aspectRatioClass, setAspectRatioClass] = useState<string>('aspect-[1/1]');
    const [imageCount, setImageCount] = useState<number>(1);
    const [images, setImages] = useState<{ mimeType: string, bytesBase64Encoded: string }[]>([]);
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // final prompt
    const prompt = `Photo realistic ${text}, ${styleClass} product photograph, ${backgroundClass} background, ${angleClass}, ${focusTypeClass}`; // Final prompt to be sent to the API


    // Handle changes in the styles class
    const handleStylesChange = (newStyleClass: string) => {
        setStyleClass(newStyleClass);
    };

    // Handle changes in the background class
    const handleBackgroundsChange = (newBackgroundClass: string) => {
        setBackgroundClass(newBackgroundClass);
    };

    // Handle changes in the angle class
    const handleAnglesChange = (newAngleClass: string) => {
        setAngleClass(newAngleClass);
    }

    // Handle changes in the focus type class
    const handleFocusTypesChange = (newFocusTypeClass: string) => {
        setFocusTypeClass(newFocusTypeClass);
    }

    // Handle changes in the aspect ratio class
    const handleAspectRatiosChange = (newAspectRatioClass: string) => {
        setAspectRatioClass(newAspectRatioClass);
    }

    // Handle changes in the textarea
    const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);  // Update state with the current textarea content
    };

    // Handle form submission
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setImages([]);

        const response = await fetch('/api/images', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                aspect_ratio: aspectRatioClass.split('[')[1].split(']')[0].replace('/', ':'),
                num_images: imageCount
            })
        });

        if (response.ok) {
            const data = await response.json();
            setImages(data.predictions);
        } else {
            console.error('Failed to load image');
        }
        setLoading(false);
    };

    // Handle download image
    const handleDownloadImage = (base64: string, mimeType: string) => {
        const link = document.createElement('a');
        link.href = `data:${mimeType};base64,${base64}`;
        link.download = 'download.png';  // You can give it a more descriptive filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className="bg-white shadow py-6 ml-12 px-8 h-screen">
            <div className="flex">
                <GalleryHorizontalEnd className="h-6 w-6 text-gray-500 mr-3" />
                <CustomBreadcrumb items={breadcrumbItems} />
            </div>
            <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
                <div
                    className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
                >
                    <form className="grid w-full items-start gap-6">
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-md font-semibold">
                                Settings
                            </legend>
                            {/* Style Options */}
                            <div className="grid gap-3">
                                <Label htmlFor="style">Style</Label>
                                <select
                                    id="style"
                                    value={styleClass}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => handleStylesChange(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    {styles.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* Background options */}
                            <div className="grid gap-3">
                                <Label htmlFor="background">Background</Label>
                                <select
                                    id="background"
                                    value={backgroundClass}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => handleBackgroundsChange(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    {backgrounds.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Angle options and focus type */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Angle options */}
                                <div className="grid gap-3">
                                    <Label htmlFor="angle">Angle</Label>
                                    <select
                                        id="angle"
                                        value={angleClass}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleAnglesChange(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    >
                                        {angles.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* Focus type */}
                                <div className="grid gap-3">
                                    <Label htmlFor="focus">Focus Type</Label>
                                    <select
                                        id="focus"
                                        value={focusTypeClass}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFocusTypesChange(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    >
                                        {focusTypes.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {/* Aspect ratio and image count */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Aspect ratio options */}
                                <div className="grid gap-3">
                                    <Label htmlFor="ratio">Aspect Ratio</Label>
                                    <select
                                        id="ratio"
                                        value={aspectRatioClass}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleAspectRatiosChange(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    >
                                        {aspectRatios.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* Number of images */}
                                <div className="grid gap-3">
                                    <Label htmlFor="images">Number of Images</Label>
                                    <Input id="images" type="number" placeholder="1" value={imageCount} onChange={(e) => setImageCount(parseInt(e.target.value, 10))} />
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                {/* Output */}
                <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                    <Badge variant="outline" className="absolute right-3 top-3">
                        Output
                    </Badge>
                    <div className="flex-1 mt-6">
                        {images.length > 0 && (
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {images.map((img, index) => (
                                    <div key={index} className="w-full relative group">
                                        <img src={`data:${img.mimeType};base64, ${img.bytesBase64Encoded}`} alt="Generated" className={`${aspectRatioClass} rounded-lg`} />
                                        <button
                                            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 flex justify-center items-center bg-black bg-opacity-50 transition-opacity"
                                            onClick={() => handleDownloadImage(img.bytesBase64Encoded, img.mimeType)}
                                            title="Download Image"
                                        >
                                            <ImageDown className="text-white w-12 h-12" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Input Text and Buttons */}
                    <form
                        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring mt-5" x-chunk="dashboard-03-chunk-1"
                        onSubmit={handleSubmit}
                    >
                        {/* Textarea */}
                        <Label htmlFor="message" className="sr-only">
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            placeholder="Type your product name and detail here..."
                            className="min-h-12 text-sm italic resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                            value={text}
                            onChange={handlePromptChange}
                        />
                        {/* Buttons */}
                        <div className="flex items-center p-3 pt-0">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" disabled>
                                            <Paperclip className="size-4" />
                                            <span className="sr-only">Attach file</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top">Attach File</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" disabled>
                                            <Mic className="size-4" />
                                            <span className="sr-only">Use Microphone</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top">Use Microphone</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <Button type="submit" size="sm" className="ml-auto gap-1.5 bg-[#192339]" disabled={loading}>
                                {loading ? 'Loading...' : 'Generate'}
                                <CornerDownLeft className="size-3.5" />
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default ProductImagePage