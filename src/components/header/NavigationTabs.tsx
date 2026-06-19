import React, { useState, useRef } from "react";
import {
  FileText,
  AudioLines,
  ClipboardPen,
  Plus,
  Calendar,
  Languages,
} from "lucide-react";

const NavigationTabs: React.FC = () => {
  // Store actual date-time state (defaults to a yesterday-like timestamp format)
  const [dateTime, setDateTime] = useState<string>("2026-06-17T13:10"); 
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  
  // Reference to force-open the native browser picker interface
  const dateInputRef = useRef<HTMLInputElement>(null);

  const languagesList: string[] = [
    "English",
    "Spanish (Español)",
    "French (Français)",
    "German (Deutsch)",
    "Mandarin (中文)",
  ];

  // Helper to format the displayed date nicely
  const formatDisplayDate = (dateString: string): string => {
    if (!dateString) return "Select Date & Time";
    const date = new Date(dateString);
    
    // Check if it's yesterday
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (date.toDateString() === yesterday.toDateString()) {
      return `Yesterday ${timeString}`;
    } else if (date.toDateString() === today.toDateString()) {
      return `Today ${timeString}`;
    } else {
      return `${date.toLocaleDateString([], { month: 'short', day: 'numeric' })} ${timeString}`;
    }
  };

  // Triggers the calendar dropdown display programmatically
  const handleCalendarClick = (): void => {
    if (dateInputRef.current) {
      // modern standard for triggering date/time controls
      if (typeof dateInputRef.current.showPicker === "function") {
        dateInputRef.current.showPicker();
      } else {
        dateInputRef.current.click(); // Fallback for older environments
      }
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDateTime(e.target.value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <>
      {/* Info Row */}
      <div className="flex items-center gap-6 px-6 py-3 bg-white border-b border-gray-100 select-none">
        
        {/* Interactive Date-Time Picker Row */}
        <div 
          onClick={handleCalendarClick}
          className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-gray-900 transition-colors relative"
        >
          <Calendar size={15} className="text-gray-400" />
          <span className="font-medium">{formatDisplayDate(dateTime)}</span>
          
          {/* Completely hidden input handling calendar system functionality */}
          <input
            ref={dateInputRef}
            type="datetime-local"
            value={dateTime}
            onChange={handleDateChange}
            className="absolute left-0 top-0 opacity-0 pointer-events-none w-0 h-0 [color-scheme:light]"
          />
        </div>

        {/* Language Translator Dropdown */}
        <div className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors relative">
          <Languages size={15} className="text-gray-400" />
          <div className="flex items-center gap-1">
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="bg-transparent cursor-pointer font-medium focus:outline-none appearance-none pr-4"
            >
              {languagesList.map((lang) => (
                <option key={lang} value={lang} className="text-gray-900 bg-white">
                  {lang}
                </option>
              ))}
            </select>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-gray-400">
              ▼
            </span>
          </div>
        </div>

        {/* Upgrade Button */}
        <span className="bg-violet-600 hover:bg-violet-700 transition-colors cursor-pointer text-white text-xs font-medium px-3 py-1 rounded-md">
          Upgrade to Clinician
        </span>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 px-6 bg-white">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-4 text-sm text-gray-500 hover:text-gray-900 font-medium">
            <FileText size={17} />
            Context
          </button>

          <button className="flex items-center gap-2 px-4 py-4 text-sm text-gray-500 hover:text-gray-900 font-medium">
            <AudioLines size={17} />
            Transcript
          </button>

          {/* Active Tab */}
          <button className="flex items-center gap-2 px-4 py-2 my-2 rounded-lg border border-gray-200 bg-white shadow-sm text-sm font-semibold text-gray-900">
            <ClipboardPen size={17} className="text-violet-600" />
            SOAP Note
          </button>

          <button className="ml-1 p-2 rounded-lg hover:bg-gray-100 text-gray-500">
            <Plus size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationTabs;