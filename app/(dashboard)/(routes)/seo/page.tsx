'use client';

import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
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
import { optionsForFirstSelect, optionsMap, languages } from './constant';
import CustomBreadcrumb from "@/components/custom/page-title";

// breadcrumb
const breadcrumbItems = [
    { href: "/", label: "Jempol AI" },
    { href: "/dashboard", label: "Dashboard" },
    { label: "AI SEO Expert Assistant" } // Current page, no link
];

// option interface
interface Option {
    id: number;
    label: string;
    value: string;
}

// API response interface
interface APIResponse {
    message: string;
}

const SEOPage = () => {
    const [selectedFirstKey, setSelectedFirstKey] = useState<string>('');
    const [selectedSecondValue, setSelectedSecondValue] = useState<string>('');
    const [languageClass, setLanguageClass] = useState<string>('english');
    const [typedMessage, setTypedMessage] = useState<string>(''); // Typed message by the AI
    const [maxWords, setMaxWords] = useState<number>(1000);
    const [response, setResponse] = useState<APIResponse | null>(null);
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const prompt = `${text}. Return the response in the language : ${languageClass}.`;

    const handleFirstSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedFirstKey(event.target.value);
        // Reset second select when first select changes
        setSelectedSecondValue('');
    };

    const handleSecondSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedSecondValue(event.target.value);
        setText(event.target.value);
    };

    // Handle changes in the language select element
    const handleLanguageChange = (newLanguageClass: string) => {
        setLanguageClass(newLanguageClass);
    };

    // Handle changes in the textarea
    const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);  // Update state with the current textarea content
    };

    // Dynamically determine the options for the second select based on the first select
    const getOptionsForSecondSelect = (): Option[] => {
        const key = selectedFirstKey.replace(' ', '');
        return optionsMap[key] || [];
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
        <div className='bg-white shadow py-6 ml-12 px-8 h-screen'>
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
                            {/* Category Options */}
                            <div className="grid gap-3">
                                <Label htmlFor="category">Select a category</Label>
                                <select
                                    id="category" 
                                    onChange={handleFirstSelectChange} 
                                    value={selectedFirstKey}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    <option value="">Select an option</option>
                                    {optionsForFirstSelect.map(option => (
                                        <option key={option.id} value={option.label}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* Selected options */}
                            <div className="grid gap-3">
                                <Label htmlFor="options">Select a prompt template</Label>
                                <select 
                                    id="options"
                                    onChange={handleSecondSelectChange} 
                                    value={selectedSecondValue}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    <option value="">Select a sub-option</option>
                                    {getOptionsForSecondSelect().map(option => (
                                        <option key={option.id} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Languages */}
                                <div className="grid gap-3">
                                    <Label htmlFor="language">Language</Label>
                                    <select
                                        id="language"
                                        value={languageClass}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleLanguageChange(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    >
                                        {languages.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* Words Length */}
                                <div className="grid gap-3">
                                    <Label htmlFor="maxwords">Words Length</Label>
                                    <Input id="temperature" type="number" placeholder="50" value={maxWords} onChange={(e) => setMaxWords(parseInt(e.target.value, 10))} />
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
                            placeholder="Type your additional instructions here..."
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
    );
};

export default SEOPage;


//   <select onChange={handleFirstSelectChange} value={selectedFirstKey}>
//           <option value="">Select an option</option>
//           {optionsForFirstSelect.map(option => (
//             <option key={option.id} value={option.label}>
//               {option.label}
//             </option>
//           ))}
//         </select>

//         <p>{selectedSecondValue}</p>