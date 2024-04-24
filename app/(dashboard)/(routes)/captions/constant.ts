

interface Option {
    id: number;
    value: string;
  }
  
  export const optionsForFirstSelect: Option[] = [
    { id: 1, value: 'Products' },
    { id: 2, value: 'Foods' }
  ];
  
  export const optionsMap: { [key: string]: Option[] } = {
    Products: [
      { id: 1, value: 'Product Name and Description' },
      { id: 2, value: 'Product Name and Specifications' },
      { id: 3, value: 'Product Name and Features' },
      { id: 4, value: 'Product Name and How-tos' },
    ],
    Foods: [
      { id: 5, value: 'Menu Name and Description' },
      { id: 6, value: 'Menu Name and Ingredients' },
      { id: 7, value: 'Menu Name and Recipes' },
      { id: 9, value: 'Menu Name and Nutrition Facts' },
      { id: 10, value: 'Menu Name and How-tos' },
    ]

  };


export const tones = [
    { label: "Polite", value: "polite" }, 
    { label: "Witty", value: "witty" },
    { label: "Enthusiastic", value: "enthusiastic" },
    { label: "Friendly", value: "friendly" },
    { label: "Creative", value: "creative" },
    { label: "Informative", value: "informative" },
    { label: "Funny", value: "funny" },
    { label: "Informal", value: "informal" },
    { label: "Serious", value: "serious" },
    { label: "Silly", value: "silly" },
    { label: "Sarcastic", value: "sarcastic" },
    { label: "Humorous", value: "humorous" },
    { label: "Casual", value: "casual" },
    { label: "Formal", value: "formal" },
    { label: "Professional", value: "professional" }

]

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