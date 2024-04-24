'use client'
import { useState, FormEvent, ChangeEvent } from 'react';
import Select from "react-tailwindcss-select";
import ReactMarkdown from 'react-markdown';

// icons
import {
    GalleryHorizontalEnd,
    Paperclip,
    Mic,
    CornerDownLeft,
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
import { adsPlatforms, adsFormats, ctas, tones, campaignGoals, ages, genders, interests } from './constant';
import CustomBreadcrumb from "@/components/custom/page-title";

// breadcrumb
const breadcrumbItems = [
    { href: "/", label: "Jempol AI" },
    { href: "/dashboard", label: "Dashboard" },
    { label: "Campaign Generation" } // Current page, no link
];

// API response
interface APIResponse {
    message: string;
}

const SocialMediaPage = () => {
    // state
    const [adsPlatformsClass, setAdsPlatformsClass] = useState<string>('google ads');
    const [toneClass, setToneClass] = useState([]);
    const [adsFormatClass, setAdsFormatClass] = useState<string>('search');
    const [ctasClass, setCtasClass] = useState<string>('get started');
    const [campaignGoalsClass, setCampaignGoalsClass] = useState<string>('conversions');
    const [agesClass, setAgesClass] = useState<string>('18-24');
    const [gendersClass, setGendersClass] = useState<string>('male');
    const [interestsClass, setInterestsClass] = useState([]);
    const [maxWords, setMaxWords] = useState<number>(200);
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<APIResponse | null>(null);
    const [typedMessage, setTypedMessage] = useState<string>('');

    // final prompt
    const prompt = `Generate marketing campaign using the following information : ${text}. 
    The goal of the campaign is ${campaignGoalsClass} with the tone of ${toneClass.map((option: any) => option.value).join(', ')}.
    The ads platform should be ${adsPlatformsClass} and the format should be ${adsFormatClass}.
    The ctas should be ${ctasClass}.
    The campaign should be created for ${agesClass} and ${gendersClass} with interests of ${interestsClass.map((option: any) => option.value).join(', ')}.
    The content should be ${maxWords} words long.`;

    // Handle changes in the ads platforms
    const handleAdsPlatformsChange = (newAdsPlatformsClass: string) => {
        setAdsPlatformsClass(newAdsPlatformsClass);
    };

    // Handle changes in the ads format
    const handleAdsFormatChange = (newAdsFormatClass: string) => {
        setAdsFormatClass(newAdsFormatClass);
    };

    // Handle changes in the ctas
    const handleCtasChange = (newCtasClass: string) => {
        setCtasClass(newCtasClass);
    };

    // Handle changes in the campaign goals
        const handleCampaignGoalsChange = (newCampaignGoalsClass: string) => {
        setCampaignGoalsClass(newCampaignGoalsClass);
    };

    // Handle changes in the ages
    const handleAgesChange = (newAgesClass: string) => {
        setAgesClass(newAgesClass);
    };

    // Handle changes in the genders
    const handleGendersChange = (newGendersClass: string) => {
        setGendersClass(newGendersClass);
    };

    // Handle changes in the interests
    const handleInterestsChange = (selectedOptions: any) => {
        setInterestsClass(selectedOptions || []);
    };

    // Handle changes in the select element
    const handleToneChange = (selectedOptions: any) => {
        setToneClass(selectedOptions || []);
    };

    // Handle changes in the textarea
    const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);  // Update state with the current textarea content
    };

    // Handle form submission
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setResponse(null);
        setTypedMessage('');  // Reset the typing animation
        // setText(''); // Reset the textarea content if needed

        try {
            const response = await fetch('/api/text', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        role: 'user',
                        parts: [{ text: prompt }]
                    }],
                    max_output_tokens: Math.round(maxWords * 1.25) // length of words x 1.25 (1 token == 3/4 of a word)
                })
            });

            if (response.ok) {
                const data: APIResponse = await response.json();
                setResponse(data);
                typeText(data.message);
            } else {
                throw new Error('Failed to fetch');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponse({ message: 'Error fetching data.' });
        } finally {
            setLoading(false);
        }
    };

    // Handle typing animation
    const typeText = (message: string) => {
        const words = message.split(' ');
        let currentText = '';
        words.forEach((word, index) => {
            setTimeout(() => {
                currentText += word + ' ';
                setTypedMessage(currentText);
            }, 100 * index); // Each word appears every 100ms
        });
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
                            {/* Ads Platform Options */}
                            <div className="grid gap-3">
                                <Label htmlFor="socialmedia">Ads Platform</Label>
                                <select
                                    id="adsplatform"
                                    value={adsPlatformsClass}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => handleAdsPlatformsChange(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    {adsPlatforms.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* Campaign Goal options */}
                            <div className="grid gap-3">
                                <Label htmlFor="campaigngoal">Campaign Goal</Label>
                                <select
                                    id="campaigngoal"
                                    value={campaignGoalsClass}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => handleCampaignGoalsChange(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    {campaignGoals.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* Ads Format and Call-To-Action */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Ads Format */}
                                <div className="grid gap-3">
                                    <Label htmlFor="adsformat">Ads Format</Label>
                                    <select
                                        id="adsformat"
                                        value={adsFormatClass}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleAdsFormatChange(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    >
                                        {adsFormats.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* Call-To-Action */}
                                <div className="grid gap-3">
                                    <Label htmlFor="cta">Call-To-Action</Label>
                                    <select
                                        id="cta"
                                        value={ctasClass}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleCtasChange(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    >
                                        {ctas.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                             {/* Age and Gender */}
                             <div className="grid grid-cols-2 gap-4">
                                {/* Age */}
                                <div className="grid gap-3">
                                    <Label htmlFor="age">Audience&apos;s Age</Label>
                                    <select
                                        id="age"
                                        value={agesClass}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleAgesChange(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    >
                                        {ages.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* Gender */}
                                <div className="grid gap-3">
                                    <Label htmlFor="gender">Audience&apos;s Gender</Label>
                                    <select
                                        id="gender"
                                        value={gendersClass}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleGendersChange(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    >
                                        {genders.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {/* Interest Options */}
                            <div className="grid gap-3">
                                <Label htmlFor="interest">Audience&apos;s Interests</Label>
                                <Select
                                    primaryColor='teal'
                                    isMultiple
                                    value={interestsClass}
                                    onChange={handleInterestsChange}
                                    options={interests}
                                />
                            </div>
                            {/* Tone Options */}
                            <div className="grid gap-3">
                                <Label htmlFor="tone">Tones</Label>
                                <Select
                                    primaryColor='teal'
                                    isMultiple
                                    value={toneClass}
                                    onChange={handleToneChange}
                                    options={tones}
                                />
                            </div>
                            {/* Words Length */}
                            <div className="grid gap-3">
                                <Label htmlFor="maxwords">Words Length</Label>
                                <Input id="temperature" type="number" placeholder="50" value={maxWords} onChange={(e) => setMaxWords(parseInt(e.target.value, 10))} />
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
                        {typedMessage && (
                            <div>
                                <ReactMarkdown className="text-sm text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
                                    {typedMessage}
                                </ReactMarkdown>
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
                            placeholder="Type your product/service description, unique selling points, target location, keywords here..."
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

export default SocialMediaPage