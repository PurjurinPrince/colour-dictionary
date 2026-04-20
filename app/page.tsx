"use client";
import React, { useState } from 'react';
import { Search, Info, Triangle, Circle, Square } from 'lucide-react';

// --- DATA ---
const dictionaryData = [
  // Colour Systems & Models
  { term: "Additive Colour", definition: "Colours created by mixing coloured light together, where adding all colours produces white.", category: "Colour Systems & Models" },
  { term: "CMYK", definition: "Cyan, Magenta, Yellow, and Key (Black); the four inks used in the subtractive colour printing process.", category: "Colour Systems & Models" },
  { term: "Gamut", definition: "The entire range of colours that a specific device or medium is capable of reproducing.", category: "Colour Systems & Models" },
  { term: "Pantone", definition: "A proprietary, standardized colour-matching system widely used in the printing industry.", category: "Colour Systems & Models" },
  { term: "RGB", definition: "Red, Green, and Blue; the primary colours used in the additive digital display model.", category: "Colour Systems & Models" },
  { term: "Spot Colour", definition: "A specific, premixed ink applied in a single run on a printing press.", category: "Colour Systems & Models" },
  { term: "Subtractive Colour", definition: "Colours created by pigments absorbing light, where adding all colours produces dark brown or black.", category: "Colour Systems & Models" },
  { term: "Calibration", definition: "The process of adjusting a device to ensure colours display accurately and consistently.", category: "Colour Systems & Models" },

  // Colour Theory Fundamentals
  { term: "Colour Wheel", definition: "A circular diagram mapping out the relationships between different hues.", category: "Colour Theory Fundamentals" },
  { term: "Primary Colour", definition: "The base colours that cannot be created by mixing other colours together.", category: "Colour Theory Fundamentals" },
  { term: "Secondary Colour", definition: "A colour created by mixing equal parts of two primary colours.", category: "Colour Theory Fundamentals" },
  { term: "Tertiary Colour", definition: "The six colours formed by mixing a primary colour with an adjacent secondary colour.", category: "Colour Theory Fundamentals" },
  { term: "Hue", definition: "The pure state, basic identity, or literal name of a colour family.", category: "Colour Theory Fundamentals" },
  { term: "Saturation (or Chroma)", definition: "The intensity, purity, or vividness of a specific hue.", category: "Colour Theory Fundamentals" },
  { term: "Tone (or Value)", definition: "The relative lightness or darkness of a colour, regardless of its hue.", category: "Colour Theory Fundamentals" },
  { term: "Greyscale", definition: "A range of monochromatic shades progressing smoothly from pure white to pure black.", category: "Colour Theory Fundamentals" },

  // Perception & Optical Effects
  { term: "Advancing Colour", definition: "Warm colours that visually appear to move forward toward the viewer.", category: "Perception & Optical Effects" },
  { term: "Receding Colour", definition: "Cool colours that visually appear to push back or sink into the background.", category: "Perception & Optical Effects" },
  { term: "Contrast", definition: "The degree of difference between two colours, often referring to their lightness, darkness, or complementary nature.", category: "Perception & Optical Effects" },
  { term: "Simultaneous Contrast", definition: "The optical effect where the appearance of a colour shifts based on the colours surrounding it.", category: "Perception & Optical Effects" },
  { term: "Vibration", definition: "An optical illusion of flickering movement created when two highly contrasting colours are placed side by side.", category: "Perception & Optical Effects" },
  { term: "Colour Legibility", definition: "How easily text or visual elements can be distinguished from their background based on contrast.", category: "Perception & Optical Effects" },

  // Application & Psychology
  { term: "Analogous Colour", definition: "A group of colours that sit right next to each other on the colour wheel.", category: "Application & Psychology" },
  { term: "Harmony", definition: "Aesthetically pleasing and visually balanced combinations of colours.", category: "Application & Psychology" },
  { term: "Movement", definition: "The use of colour to deliberately guide the viewer’s eye through a composition.", category: "Application & Psychology" },
  { term: "Palette", definition: "The specific, curated set of colours chosen by a designer for a particular project.", category: "Application & Psychology" },
  { term: "Visual Weight", definition: "The perceived heaviness, dominance, or attention-grabbing power of a colour in a layout.", category: "Application & Psychology" },
  { term: "Associations", definition: "The psychological, cultural, or personal connections people make with specific colours.", category: "Application & Psychology" },
  { term: "Connotations", definition: "The emotional or secondary meanings implied by a colour.", category: "Application & Psychology" },
  { term: "Denotations", definition: "The literal, primary, or physical identification of a colour, independent of emotion.", category: "Application & Psychology" }
];

const categoryList = [
  "Colour Systems & Models",
  "Colour Theory Fundamentals",
  "Perception & Optical Effects",
  "Application & Psychology"
];

// --- BESPOKE VISUAL ILLUSTRATIONS ---
const ConceptGraphic = ({ term }) => {
  switch (term) {
    case "Additive Colour":
      return (
        <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden isolate">
          <div className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full bg-[#FF0000] mix-blend-screen -ml-14 -mt-14" style={{ transform: 'translate(0px, -22px)' }}></div>
          <div className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full bg-[#00FF00] mix-blend-screen -ml-14 -mt-14" style={{ transform: 'translate(-19.05px, 11px)' }}></div>
          <div className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full bg-[#0000FF] mix-blend-screen -ml-14 -mt-14" style={{ transform: 'translate(19.05px, 11px)' }}></div>
        </div>
      );
    case "Subtractive Colour":
      return (
        <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden isolate">
          <div className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full bg-[#00FFFF] mix-blend-multiply -ml-14 -mt-14" style={{ transform: 'translate(0px, -22px)' }}></div>
          <div className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full bg-[#FF00FF] mix-blend-multiply -ml-14 -mt-14" style={{ transform: 'translate(-19.05px, 11px)' }}></div>
          <div className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full bg-[#FFFF00] mix-blend-multiply -ml-14 -mt-14" style={{ transform: 'translate(19.05px, 11px)' }}></div>
        </div>
      );
    case "CMYK":
      return (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center gap-2">
          <div className="w-12 h-12 rounded-full bg-[#00FFFF]"></div>
          <div className="w-12 h-12 rounded-full bg-[#FF00FF]"></div>
          <div className="w-12 h-12 rounded-full bg-[#FFFF00]"></div>
          <div className="w-12 h-12 rounded-full bg-[#000000]"></div>
        </div>
      );
    case "RGB":
      return (
        <div className="w-full h-full bg-black flex items-center justify-center gap-2">
          <div className="w-12 h-12 rounded-full bg-[#FF0000] shadow-[0_0_20px_rgba(255,0,0,0.8)]"></div>
          <div className="w-12 h-12 rounded-full bg-[#00FF00] shadow-[0_0_20px_rgba(0,255,0,0.8)]"></div>
          <div className="w-12 h-12 rounded-full bg-[#0000FF] shadow-[0_0_20px_rgba(0,0,255,0.8)]"></div>
        </div>
      );
    case "Advancing Colour":
      return (
        <div className="w-full h-full bg-[#F8FAFC] flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-32 h-32 bg-[#94A3B8] rounded-xl transform scale-90 -translate-y-4 -translate-x-6 opacity-60 shadow-inner"></div>
          <div className="absolute w-32 h-32 bg-[#EF4444] rounded-xl shadow-[20px_20px_60px_rgba(239,68,68,0.4)] transform translate-y-4 translate-x-6 border border-[#F87171] z-10"></div>
        </div>
      );
    case "Receding Colour":
      return (
        <div className="w-full h-full bg-[#F8FAFC] flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-40 h-40 bg-[#FCA5A5] rounded-xl opacity-80 border border-[#F87171]"></div>
          <div className="absolute w-24 h-24 bg-[#1E3A8A] rounded-xl shadow-[inset_0_20px_30px_rgba(0,0,0,0.6)] transform z-10 border border-[#1E40AF]"></div>
        </div>
      );
    case "Analogous Colour":
      return (
        <div className="w-full h-full flex">
          <div className="flex-1 bg-[#FF0055]"></div>
          <div className="flex-1 bg-[#FF5500]"></div>
          <div className="flex-1 bg-[#FFAA00]"></div>
        </div>
      );
    case "Contrast":
      return (
        <div className="w-full h-full flex">
          <div className="flex-1 bg-[#1E3A8A] flex items-center justify-center"><div className="w-16 h-16 rounded-full bg-[#FBBF24] shadow-md"></div></div>
          <div className="flex-1 bg-[#FBBF24] flex items-center justify-center"><div className="w-16 h-16 rounded-full bg-[#1E3A8A] shadow-md"></div></div>
        </div>
      );
    case "Greyscale":
      return (
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 bg-[#FFFFFF]"></div>
          <div className="flex-1 bg-[#CCCCCC]"></div>
          <div className="flex-1 bg-[#999999]"></div>
          <div className="flex-1 bg-[#666666]"></div>
          <div className="flex-1 bg-[#333333]"></div>
          <div className="flex-1 bg-[#000000]"></div>
        </div>
      );
    case "Hue":
      return (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden relative">
          <div className="w-[120%] h-16 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 blur-xl opacity-50 absolute"></div>
          <div className="w-3/4 h-12 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 shadow-2xl z-10 rounded-full border border-white/20"></div>
        </div>
      );
    case "Saturation (or Chroma)":
      return (
        <div className="w-full h-full flex">
          <div className="flex-1 bg-[#FF0000]"></div>
          <div className="flex-1 bg-[#CC3333]"></div>
          <div className="flex-1 bg-[#996666]"></div>
          <div className="flex-1 bg-[#808080]"></div>
        </div>
      );
    case "Tone (or Value)":
      return (
        <div className="w-full h-full flex">
          <div className="flex-1 bg-[#000044]"></div>
          <div className="flex-1 bg-[#000088]"></div>
          <div className="flex-1 bg-[#0000CC]"></div>
          <div className="flex-1 bg-[#6666FF]"></div>
          <div className="flex-1 bg-[#BBBBFF]"></div>
        </div>
      );
    case "Simultaneous Contrast":
      return (
        <div className="w-full h-full flex">
          <div className="flex-1 bg-[#0055FF] flex items-center justify-center"><div className="w-12 h-12 bg-[#888888]"></div></div>
          <div className="flex-1 bg-[#FFCC00] flex items-center justify-center"><div className="w-12 h-12 bg-[#888888]"></div></div>
        </div>
      );
    case "Colour Wheel":
      return (
        <div className="w-full h-full bg-white flex items-center justify-center">
          <div 
            className="w-40 h-40 rounded-full relative flex items-center justify-center" 
            style={{ background: 'conic-gradient(#f00 0deg 30deg, #f80 30deg 60deg, #ff0 60deg 90deg, #8f0 90deg 120deg, #0f0 120deg 150deg, #0f8 150deg 180deg, #0ff 180deg 210deg, #08f 210deg 240deg, #00f 240deg 270deg, #80f 270deg 300deg, #f0f 300deg 330deg, #f08 330deg 360deg)' }}
          >
             <div className="w-20 h-20 bg-white rounded-full shadow-[inset_0_4px_10px_rgba(0,0,0,0.1)] absolute"></div>
          </div>
        </div>
      );
    case "Vibration":
      return (
        <div 
          className="w-full h-full"
          style={{ background: 'repeating-linear-gradient(45deg, #00FFFF, #00FFFF 8px, #FF0000 8px, #FF0000 16px)' }}
        ></div>
      );
    case "Calibration":
      return (
        <div className="w-full h-full flex flex-col">
          <div className="flex-[3] flex">
            <div className="flex-1 bg-gray-300"></div><div className="flex-1 bg-yellow-400"></div><div className="flex-1 bg-cyan-400"></div>
            <div className="flex-1 bg-green-500"></div><div className="flex-1 bg-magenta-500"></div><div className="flex-1 bg-red-500"></div><div className="flex-1 bg-blue-600"></div>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 bg-blue-600"></div><div className="flex-1 bg-black"></div><div className="flex-1 bg-magenta-500"></div>
            <div className="flex-1 bg-black"></div><div className="flex-1 bg-cyan-400"></div><div className="flex-1 bg-black"></div><div className="flex-1 bg-gray-300"></div>
          </div>
        </div>
      );
    case "Primary Colour":
      return (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-[#FF0000] rounded-sm"></div>
          <div className="w-12 h-12 bg-[#0000FF] rounded-sm"></div>
          <div className="w-12 h-12 bg-[#FFFF00] rounded-sm"></div>
        </div>
      );
    case "Secondary Colour":
      return (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-[#FF8800] rounded-sm"></div>
          <div className="w-12 h-12 bg-[#00FF00] rounded-sm"></div>
          <div className="w-12 h-12 bg-[#8800FF] rounded-sm"></div>
        </div>
      );
    case "Tertiary Colour":
      return (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2">
            <div className="w-8 h-8 rounded bg-[#FF4500]"></div> {/* Red-Orange */}
            <div className="w-8 h-8 rounded bg-[#FFCC00]"></div> {/* Yellow-Orange */}
            <div className="w-8 h-8 rounded bg-[#9ACD32]"></div> {/* Yellow-Green */}
            <div className="w-8 h-8 rounded bg-[#008B8B]"></div> {/* Blue-Green */}
            <div className="w-8 h-8 rounded bg-[#8A2BE2]"></div> {/* Blue-Violet */}
            <div className="w-8 h-8 rounded bg-[#C71585]"></div> {/* Red-Violet */}
          </div>
        </div>
      );
    case "Harmony":
      return (
        <div className="w-full h-full bg-[#FFFBF0] flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-28 h-28 rounded-full bg-[#2A9D8F] mix-blend-multiply opacity-70 -translate-x-6 -translate-y-4"></div>
          <div className="absolute w-28 h-28 rounded-full bg-[#E9C46A] mix-blend-multiply opacity-70 translate-x-6 -translate-y-4"></div>
          <div className="absolute w-28 h-28 rounded-full bg-[#F4A261] mix-blend-multiply opacity-70 translate-y-10"></div>
        </div>
      );
    case "Spot Colour":
      return (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-300 border border-gray-400 flex items-center justify-center shadow-inner">
            <div className="w-16 h-16 rounded-full bg-[#FF0055] shadow-md border-2 border-white"></div>
          </div>
        </div>
      );
    case "Palette":
      return (
        <div className="w-full h-full bg-gray-50 flex items-end p-4 gap-2">
          <div className="flex-1 bg-[#264653] h-full rounded-t-md shadow-sm"></div>
          <div className="flex-1 bg-[#2A9D8F] h-[80%] rounded-t-md shadow-sm"></div>
          <div className="flex-1 bg-[#E9C46A] h-[60%] rounded-t-md shadow-sm"></div>
          <div className="flex-1 bg-[#F4A261] h-[40%] rounded-t-md shadow-sm"></div>
          <div className="flex-1 bg-[#E76F51] h-[20%] rounded-t-md shadow-sm"></div>
        </div>
      );
    case "Pantone":
      return (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <div className="w-24 h-32 bg-white shadow-lg flex flex-col p-2 border border-gray-200 rounded-sm">
            <div className="flex-1 bg-[#0055FF] w-full rounded-sm"></div>
            <div className="h-8 flex flex-col justify-center gap-1 mt-2">
              <div className="w-full h-1 bg-gray-800"></div>
              <div className="w-2/3 h-1 bg-gray-300"></div>
            </div>
          </div>
        </div>
      );
    case "Colour Legibility":
      return (
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 bg-yellow-400 flex items-center justify-center">
            <span className="text-white font-bold text-2xl drop-shadow-sm">POOR</span>
          </div>
          <div className="flex-1 bg-yellow-400 flex items-center justify-center">
            <span className="text-black font-bold text-2xl">GOOD</span>
          </div>
        </div>
      );
    case "Visual Weight":
      return (
        <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center relative">
          {/* Seesaw base */}
          <Triangle className="absolute mt-16 text-gray-400 z-0" fill="currentColor" size={32} />
          {/* The plank */}
          <div className="w-48 h-1.5 bg-gray-800 absolute mt-4 z-10"></div>
          {/* Light object (Large, low density) */}
          <div className="w-20 h-20 rounded-full bg-gray-300 absolute -translate-x-16 -translate-y-6 z-20"></div>
          {/* Heavy object (Small, high density) */}
          <div className="w-8 h-8 rounded-full bg-black absolute translate-x-16 -translate-y-1 z-20"></div>
        </div>
      );
    case "Gamut":
      return (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-28 h-28 overflow-visible relative z-10">
            <defs>
              <linearGradient id="gamutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FF00" />
                <stop offset="50%" stopColor="#FF0000" />
                <stop offset="100%" stopColor="#0000FF" />
              </linearGradient>
            </defs>
            {/* CIE Horseshoe approximation */}
            <path d="M 20,85 C 5,40 25,5 50,15 C 80,30 90,70 80,85 Z" fill="url(#gamutGrad)" opacity="0.9" />
            {/* Inner Triangle (e.g. sRGB boundary) */}
            <polygon points="32,75 48,25 68,68" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="2,2"/>
            <circle cx="32" cy="75" r="1.5" fill="white"/>
            <circle cx="48" cy="25" r="1.5" fill="white"/>
            <circle cx="68" cy="68" r="1.5" fill="white"/>
          </svg>
        </div>
      );
    case "Movement":
      return (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
          <div className="flex items-center gap-2 transform -rotate-12 translate-x-4">
            <div className="w-4 h-4 bg-blue-200 rounded-full opacity-40"></div>
            <div className="w-6 h-6 bg-blue-300 rounded-full opacity-60"></div>
            <div className="w-8 h-8 bg-blue-400 rounded-full opacity-80"></div>
            <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
            <div className="w-12 h-12 bg-blue-600 rounded-full shadow-lg"></div>
          </div>
        </div>
      );
    case "Associations":
      return (
        <div className="w-full h-full flex">
          <div className="flex-1 bg-red-500 flex items-center justify-center"><Square className="text-white" /></div>
          <div className="flex-1 bg-blue-500 flex items-center justify-center"><Circle className="text-white" /></div>
          <div className="flex-1 bg-green-500 flex items-center justify-center"><Triangle className="text-white" /></div>
        </div>
      );
    case "Connotations":
      return (
        <div className="w-full h-full flex">
          <div className="flex-1 bg-red-100 flex items-center justify-center border-r border-red-200">
             <div className="w-12 h-12 bg-red-500 flex items-center justify-center text-white font-bold rounded-md shadow-sm">!</div>
          </div>
          <div className="flex-1 bg-green-100 flex items-center justify-center">
             <div className="w-12 h-12 bg-green-500 flex items-center justify-center text-white font-bold rounded-full shadow-sm">✓</div>
          </div>
        </div>
      );
    case "Denotations":
      return (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center relative">
          <div className="w-16 h-16 bg-yellow-400 rounded-full shadow-sm"></div>
          <div className="absolute mt-24 text-xs font-mono text-gray-500">HEX #FBBF24</div>
        </div>
      );
    default:
      return <div className="w-full h-full bg-gray-100"></div>;
  }
};

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDictionary = dictionaryData.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white overflow-hidden">
      
      {/* Left Sidebar (Fixed) */}
      <aside className="w-full lg:w-[35%] lg:h-screen bg-[#F9F9F8] border-r border-gray-200 p-8 lg:p-16 flex flex-col shrink-0 lg:sticky top-0 z-30">
        <div className="mb-12">
          <div className="w-12 h-12 bg-black rounded-sm mb-8 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-6">
            The Colour<br/>Dictionary.
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            A comprehensive, visually-driven reference guide detailing foundational colour theory, systems, and graphic design terminology.
          </p>
        </div>

        <div className="relative mt-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search colour terms..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="mt-8 text-xs font-medium tracking-widest text-gray-400 uppercase flex items-center gap-2">
          <Info size={14} /> Showing {filteredDictionary.length} results
        </div>
      </aside>

      {/* Right Content (Scrollable Grid grouped by Category) */}
      <main className="w-full lg:w-[65%] lg:h-screen overflow-y-auto bg-white scroll-smooth relative">
        {filteredDictionary.length > 0 ? (
          <div className="max-w-5xl mx-auto pb-20 px-8 lg:px-16">
            {categoryList.map(category => {
              const itemsInCategory = filteredDictionary.filter(item => item.category === category);
              
              if (itemsInCategory.length === 0) return null; // Don't render empty categories during search

              return (
                <section key={category} className="mb-20">
                  {/* Sticky Section Header */}
                  <div className="sticky top-0 bg-white z-20 pt-8 lg:pt-12 pb-4 mb-8 border-b border-gray-200">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 tracking-tight">
                      {category}
                    </h2>
                  </div>

                  {/* Grid for this category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {itemsInCategory.map((item, index) => (
                      <div 
                        key={index} 
                        className="group flex flex-col"
                      >
                        {/* Visual Image Area */}
                        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-6 bg-gray-50 border border-gray-100 shadow-sm relative transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">
                          <ConceptGraphic term={item.term} />
                        </div>

                        {/* Text Content */}
                        <div className="px-2">
                          <h3 className="text-2xl font-serif font-bold mb-3 text-black">
                            {item.term}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-[15px]">
                            {item.definition}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 mt-20 lg:mt-0 pb-32">
            <Search className="h-16 w-16 mb-4 opacity-20" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No terms found</h3>
            <p>Try adjusting your search for "{searchTerm}"</p>
          </div>
        )}
        
        <footer className="pt-8 border-t border-gray-100 text-center text-sm text-gray-400 pb-12">
          Designed & built by Vedant Biyani · 2026
        </footer>
      </main>

    </div>
  );
}