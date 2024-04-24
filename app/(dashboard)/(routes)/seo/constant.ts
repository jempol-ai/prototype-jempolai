interface Option {
    id: number;
    label: string;
    value: string;
  }
  
  export const optionsForFirstSelect: Option[] = [
    { id: 1, label: 'Keyword Research', value: 'keyword research' },
    { id: 2, label: 'Content Outline', value: 'content outline' },
    { id: 3, label: 'Copywriting', value: ' copywriting' },
    { id: 4, label: 'Content Improvement', value: 'content improvement' },
    { id: 5, label: 'Technical SEO', value: 'technical seo' },
    { id: 6, label: 'Creating Titles', value: 'Creating Titles' },
    { id: 7, label: 'General SEO', value: 'general seo' },
  ];
  
  export const optionsMap: { [key: string]: Option[] } = {
    KeywordResearch: [
        { id: 2, label: 'Ecommerce Top Keywords', value: 'Identify the top keywords related to e-commerce that will drive the most relevant traffic to our website [Website] and increase search engine visibility. Gather data on search volume, competition, and related keywords. The keywords should be relevant to our target audience and align with our content marketing strategy.' },
        { id: 3, label: 'SEO Keywords as SEO Lead', value: 'Suppose you are an SEO lead; suggest some high-volume, low-difficulty keywords for [topic of interest].' },
        { id: 4, label: 'SEO Keywords as content marketer', value: 'Provide me with long-tail, high-volume, low-difficulty keywords for [topic of interest] as if you are a content marketer.'},
        { id: 5, label: 'Competitor Keywords', value: 'I need a table of the top competitors for [Topic] curated by a keyword strategist.'},
        { id: 6, label: 'Blog Keywords', value: 'Act like an SEO expert having accurate and detailed information about keywords and create a list of 5 SEO keywords related to the following blog post section [blog post section].'},
        { id: 7, label: 'SEO Strategy', value: 'Act as an SEO manager and research the top 10 SEO keyword strategies for [topic]. Organize the search intention (commercial, transactional, or informational) for the listed keywords in a table format'},
        { id: 8, label: 'FAQ for Audience', value: 'As a content strategist, create a compilation of [number] frequently asked questions about [topic], that are pertinent for the new [audience].'},
        { id: 9, label: 'Keyword Research', value: 'Suppose you are a keyword researcher, create a list of listicle content keywords for the [topic].'},
        { id: 10, label: 'Related Keywords', value: 'You are an online marketing manager, make a list of broad topics relevant to [topic] and expand each topic with a list of phrases you think your customers use.'}
        
    ],
    ContentOutline: [
        { id: 11, label: 'Blog Outline', value: ' As an experienced copywriter, generate a comprehensive, SEO-optimized blog post outline for the keyword [X], targeting an [X] audience with a conversational tone and a desired length of 1500-2000 words.'},
        { id: 12, label: 'Comparative SEO Guide', value: 'Suppose you are a content marketer; create an SEO-optimized blog post outline that compares and contrasts different products or services related to keyword [X], targeting consumers with a neutral tone and a desired length of 1000-1500 words.'},
        { id: 13, label: 'Product Highlights', value: 'As a freelance writer, generate a comprehensive blog post outline that showcases the unique features and benefits of [X], targeting [product] enthusiasts with a persuasive tone and a desired length of 1500-2000 words.'},
        { id: 14, label: 'Guide for Beginners', value: 'As a technical writer experienced in SEO, please create a detailed blog post outline that provides a step-by-step guide for using [X], targeting beginners with a friendly and helpful tone and a desired length of 800-1000 words.'},
        { id: 15, label: 'DIY Tips', value: 'Act as a content marketing specialist, create a comprehensive blog post outline focused on providing tips and tricks for [X], targeting DIY enthusiasts with a conversational tone and a desired length of 1200-1500 words.'},
        { id: 16, label: 'Subject Overview Table', value: 'List the main ideas for a blog post about [subject] and present them in a table.'},
        { id: 17, label: 'Essential Guide', value: 'To be used in a blog post, outline the critical elements of a detailed guide on [subject] as if you are an experienced content writer.'},
        { id: 18, label: 'Crafting Catchy Subheadings', value: 'Write seven subheadings for the blog article with the title [title]; the titles should be catchy and 60 characters max.'},
        { id: 19, label: 'Structured Blog Outline', value: 'Suppose you are a content marketing specialist, write a thorough outline using a two-level heading structure for a blog article titled [title].'},
        { id: 20, label: 'Optimizing Blog Content', value: 'Act as a social media content writer, analyze this outline [outline], and remove/add parts if necessary to make the blog post more engaging and informative.'}
    ],
    Copywriting: [
        { id: 21, label:'Sustainability Ad Script', value: 'As a copywriter, write a script for a video advertisement emphasizing the benefits of reducing waste and promoting sustainability using a knowledgeable and appealing tone for eco-conscious customers. Make sure the tone is informative and persuasive.'},
        { id: 22, label: 'Fashion Forward Ad Script', value: 'As a web content specialist, draft a script for an Instagram advertisement that exudes confidence and appeals to fashion-conscious customers. The advertisement should highlight how the product keeps individuals updated with the latest fashion trends and helps them look their best.'},
        { id: 23, label: 'Pet Care Ad Script', value: 'As a web content manager, create a script for a YouTube video ad with a friendly tone for pet owners. The advertisement should highlight the benefits of using the product in providing comfort and better care for furry friends.'},
        { id: 24, label: 'Productivity Boost Email', value: 'As a blogger, write a professional and persuasive email template for a lead-generation campaign targeting business-oriented customers. The email should highlight how the product [X] helps improve productivity and efficiency in the workplace.'},
        { id: 25, label: 'Time Management Sales Pitch', value: 'As a digital content creator, draft an approachable sales letter to potential customers emphasizing the time management benefits of the product [X], as busy customers are the target audience.'},
        { id: 26, label: 'Wellness Benefits Story', value: 'As a copy editor experienced in SEO, craft an inspiring short story highlighting features of the product [X] aimed at wellness-focused customers, emphasizing how it promotes a healthy balance and enhances overall happiness.'},
        { id: 27, label: 'Family Time Enhancer', value: 'As a content creator, write a friendly headline for a blog article targeting family-oriented customers, highlighting the benefits of product [X] in enabling them to spend more quality time with their loved ones.'},
        { id: 28, label: 'Tech Trendsetter Sale', value: 'As a content marketer, draft a confident social media post for a sale event targeting tech-savvy customers, emphasizing the ability of product [X] to help them stay ahead of the latest technological trends.'},
        { id: 29, label: 'Unleash Creativity CTA', value: 'As an experienced content writer, write an inspiring call-to-action for a landing page, targeting creative customers, highlighting the ability of product [X] to bring their imaginative ideas to life.'},
        { id: 30, label: 'Secure Event Invitation', value: 'As a social media content creator, craft a trustworthy script for a virtual event invitation, targeting security-conscious customers, emphasizing the ability of product [X] to provide a sense of safety and security in their daily lives.'},
        { id: 31, label: 'Life Simplified Ad Script', value: ' As a copywriter, draft a script for a Facebook advertisement with a fun and energetic tone targeting young adults. The advertisement should highlight how the product simplifies and improves their daily lives, making it easier for them to focus on the things that matter most.'},
        { id: 32, label: 'Family Safety Commercial', value: 'As a content creator, write a script for a TV commercial that appeals to families with young children. The advertisement should highlight the benefits of the product in providing a safe and secure environment for kids to play and learn.'},
        { id: 33, label: 'Fitness Boost Collaboration', value: 'As a social media manager, create a script for an influencer collaboration aimed at fitness-conscious customers. The advertisement should highlight how the product enhances their workouts, improves their health, and helps them reach their fitness goals.'},
        { id: 34, label: 'Time-Saving Radio Ad', value: 'As a marketer, write a script for a radio advertisement targeting busy professionals. The advertisement should highlight how the product saves time and provides convenience in their fast-paced lives, allowing them to focus on the things that matter most.'},
        { id: 35, label: 'Campus Life Simplified Ad', value: 'As a content strategist, write a script for a Snapchat advertisement aimed at college students. The advertisement should highlight how the product provides affordable and practical solutions for their everyday needs, making it easier for them to manage their finances and live stress-free lives on campus.'}
    ],
    ContentImprovement: [
      { id: 36, label: 'Content Optimization', value: 'Improve [text] to ensure the content is relevant and informative for the [target audience].'},
      { id: 37, label: 'Structured Keyword Content', value: 'Rewrite [text] and use headings and subheadings to break up the content and make it easier to read using the keyword [keyword].'},
      { id: 38, label: 'Readable Keyword Content', value: 'Paraphrase this [text] and use active voice and short sentences to make the content more readable for [target audience] in the context of [keyword].'},
      { id: 39, label: 'Text with CTA', value: ' Improve this [text] by adding a call-to-action (CTA) to encourage readers to take a specific action, such as signing up for a newsletter or purchasing a product.'},
      { id: 40, label: 'Evidence-Based Content', value: 'Rewrite this [text] by including relevant quotes and statistics to support your arguments and make the content more trustworthy.'},
      { id: 41, label: 'Engaging Storytelling Content', value: 'Paraphrase this [text] using anecdotes and storytelling techniques to make the content more engaging and memorable.'},
      { id: 42, label: 'Humorous Content Optimization', value: 'Improve this [text] and consider using humor, if appropriate, to make the content more enjoyable to read.'},
      { id: 43, label: 'Proofreading and Editing', value: 'Improve this [text] by proofreading the content to eliminate any typos, grammatical errors, or other mistakes.'},
      { id: 44, label: 'Scannable Content Structure', value: 'Rewrite this [text] by making sure the content is easy to scan using bullet points, numbered lists, and bold or italicized text.'},
      { id: 45, label: 'Engaging Interactive Content', value: 'Rewrite this [text] by encouraging reader engagement by asking questions and inviting comments at the end of the content.'},
      { id: 46, label: 'Keyword-Optimized Content', value: 'Rewrite the [text] below using [keyword 1, keyword 2, keyword 3] as SEO keywords.'},
      { id: 47, label: 'Playful Keyword Content', value: 'Rephrase the [text] below in a playful tone of voice, making it easier to read by the audience and including [keywords].'},
      { id: 48, label: 'Keyword Summary for SaaS', value: 'Act as a copywriter working in SaaS business to generate a [X] words summary of the following content while keeping the most important information and include the keyword [X] in the summary where possible'},
      { id: 49, label: 'Content Style Harmonization', value: 'Act as a content specialist and paraphrase this blog section [blog section] to align with this blog section [blog section] in terms of tone, language, and overall style.'},
      { id: 50, label: 'Punny YouTube Description', value: 'As an old comedian now working in the content marketing industry, improve this YouTube video description to make it fun and engaging; use wordplay and puns to make it more relatable as well.'}
    ],
    TechnicalSEO: [
      { id: 51, label: 'FAQs Page Schema', value: 'Create the FAQs Page Schema markup for the following questions and answers:[text]'},
      { id: 52, label: 'Multilingual Hreflang Tags', value: 'Generate the hreflang tags to feature in pages targeted to the [country] in [language], [country] in [language], and [country] in [language]'},
      { id: 53, label: 'URL Redirection Rules', value: 'Create the .htaccess rewrite rules to 301-redirect [source location] to [location destination] …'},
      { id: 54, label: 'Crawling Rules for Robots.txt', value: 'Generate robots.txt rules to block the crawl [location to block] but allow the crawling of [location to crawl] within the domain [domain]'},
      { id: 55, label: 'XML Sitemap Generation', value: 'Create a valid XML sitemap containing the following URLs: [URLs]'},
      { id: 56, label: 'Website Technical SEO Audit', value: 'Act as an SEO specialist, analyze [website URL], and make improvement suggestions regarding technical SEO with the ways to make those improvements listed in a table.'}
    ],
    CreatingTitles: [
      { id: 57, label: 'Crafting Effective Titles', value: 'Create [X] distinct title tags with a maximum of 60 characters for the text below. They must be descriptive and contain the word [keyword1, keyword2, ...].'},
      { id: 58, label: 'Fancy Title Generator', value: 'I want you to act as a fancy title generator. I will type keywords via comma, and you will reply with fancy titles. My first keywords are [keyword1, keyword2, keyword3, ...].'},
      { id: 59, label: 'Headline Hunt', value: 'Provide catchy blog post titles relating to the list of SEO keywords below: [keyword1, keyword2, keyword3, ...]'},
      { id: 70, label: 'Blog Title', value: 'Make the blog title of article: [X], more appealing'},
      { id: 71, label: 'High CTR Title', value: 'Write three samples of different blog post titles with higher click-through rates for the given topic: [X]'}
    ],
    GeneralSEO: [
      { id: 60, label: 'Company SEO Expert', value: 'I want you to act as an SEO expert. My first request is, "I need help developing an SEO strategy for [my company]. [my company description]."'},
      { id: 61, label: 'Learn SEO', value: 'I want you to act as an SEO expert. My first request is, "I need help understanding how to create an effective SEO guide."'},
      { id: 62, label: 'Engaging Content Creation', value: 'I want you to act as a social media influencer. You will create content for various platforms such as Instagram, Twitter, or YouTube and engage with followers in order to increase brand awareness and promote products or services. My first suggestion request is, "I need help creating an engaging campaign on Instagram to promote a [product or service]."'},
      { id: 63, label: 'Social Media Manager', value: 'I want you to act as a social media manager. You will be responsible for developing and executing campaigns across all relevant platforms, engaging with the audience by responding to questions and comments, monitoring conversations through community management tools, using analytics to measure success, creating engaging content, and updating regularly. My first suggestion is, "I need help managing the presence of an organization on [social media platform] to increase brand awareness."'},
      { id: 64, label: 'Email Paraphraser', value: 'Paraphrase the following email as an SEO specialist; keep it fun and professional while paying great attention to grammar rules:[email subject and body]'},
      { id: 65, label: 'Popular Blog Research', value: ' Recommend [number] popular blogs about [niche] that cover [topic] and their URLs in a table.'},
      { id: 66, label: 'Tech-savvy Copywriter', value: 'I need you to serve as a copywriter and create a script for a webinar with an informative tone that appeals to tech-savvy individuals. The content should emphasize the benefits of staying up-to-date with the latest technology and having smooth connectivity.'},
      { id: 67, label: 'Campaign Hashtag', value: 'Act as a copywriter and craft a hashtag campaign for a [product and description]. The tone should be informative and target customers who value getting the most for their money. The focus should be on how the product helps them maximize their investments and get the most bang for their buck.'},
      { id: 68, label: 'Blog Meta Description', value: 'As a content marketer, write a catchy meta description for a blog post with the keyword [X] while ensuring that the meta description is [X] characters max.'},
      { id: 69, label: 'Search Engine Ranking', value: 'As an SEO expert, I would like you to develop a strategy to improve the search engine ranking of [URL] for the keywords: "[keyword 1]," "[keyword 2]," and "[keyword 3]."'}
    ]
    
  };






export const languages = [
    { label: "English", value: "english" },
    { label: "Bahasa Indonesia", value: "bahasa" }, 
    { label: "Chinese", value: "chinese" },
    { label: "Japanese", value: "japanese" },
    { label: "Hindi", value: "hindi" },
    { label: "Spanish", value: "spanish" },
    { label: "French", value: "french" },
    { label: "German", value: "german" },
    { label: "Italian", value: "italian" },
    { label: "Portuguese", value: "portuguese" }
]