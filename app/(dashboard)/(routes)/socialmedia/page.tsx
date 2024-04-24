'use client'
import { useState, FormEvent, ChangeEvent } from 'react';
import Select from "react-tailwindcss-select";
import ReactMarkdown from 'react-markdown';

import {
  GalleryHorizontalEnd,
  Paperclip,
  Mic,
  CornerDownLeft,
} from "lucide-react";

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

import { socialMedias, tones } from './constant';
import CustomBreadcrumb from "@/components/custom/page-title";

interface APIResponse {
  message: string;
}

const breadcrumbItems = [
  { href: "/", label: "Jempol AI" },
  { href: "/dashboard", label: "Dashboard" },
  { label: "Social Media" } // Current page, no link
];

const SocialMediaPage = () => {
  const [socialMediaClass, setSocialMediaClass] = useState<string>('instagram');
  const [toneClass, setToneClass] = useState([]);
  const [maxWords, setMaxWords] = useState<number>(100);
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<APIResponse | null>(null);
  const [typedMessage, setTypedMessage] = useState<string>('');

  const prompt = `Generate ${text} for ${socialMediaClass} with the tone of ${toneClass.map((option: any) => option.value).join(', ')}. The content should be ${maxWords} words long. Before responding, please use the following information as the context : ${text}. Add hashtags at the end.`;

  // Handle changes in the select element
  const handleSocialMediaChange = (newSocialMediaClass: string) => {
    setSocialMediaClass(newSocialMediaClass);
  };

  // Handle changes in the select element
  const handleToneChange = (selectedOptions: any) => {
    setToneClass(selectedOptions || []);
  };

  // Handle changes in the textarea
  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);  // Update state with the current textarea content
  };

  // Handle submitting the form to the API
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResponse(null);
    setTypedMessage('');  // Reset the typing animation
    setText('');

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
              {/* Social Media Options */}
              <div className="grid gap-3">
                <Label htmlFor="socialmedia">Social Media</Label>
                <select
                  id="socialmedia"
                  value={socialMediaClass}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSocialMediaChange(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  {socialMedias.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
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

        <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
          {/* Output */}
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
            <Label htmlFor="message" className="sr-only">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your content/topic/prompt here..."
              className="min-h-12 text-sm italic resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              value={text}
              onChange={handlePromptChange}
            />
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