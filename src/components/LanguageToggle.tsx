
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Language = "english" | "telugu" | "tamil";

interface LanguageToggleProps {
  onChange: (language: Language) => void;
  currentLanguage: Language;
}

const LanguageToggle = ({ onChange, currentLanguage }: LanguageToggleProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Globe size={16} />
          {currentLanguage === "english" && "English"}
          {currentLanguage === "telugu" && "తెలుగు"}
          {currentLanguage === "tamil" && "தமிழ்"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onChange("english")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChange("telugu")}>
          తెలుగు (Telugu)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChange("tamil")}>
          தமிழ் (Tamil)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
