import { useState } from "react";
import { cn } from "@/lib/utils";

interface CoinFlipProps {
  onSelect: (choice: "heads" | "tails") => void;
  selected: "heads" | "tails" | null;
}

export const CoinFlip = ({ onSelect, selected }: CoinFlipProps) => {
  const [isFlipping, setIsFlipping] = useState(false);

  const handleClick = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      onSelect(selected === "heads" ? "tails" : "heads");
    }, 1000);
  };

  return (
    <div 
      onClick={handleClick}
      className={cn(
        "w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 cursor-pointer relative",
        "transition-transform duration-1000 transform perspective-1000",
        isFlipping && "rotate-y-180"
      )}
    >
      <div className="absolute inset-0 backface-hidden">
        <img 
          src="/sparkles.png" 
          alt="Heads" 
          className={cn(
            "w-full h-full object-contain",
            selected === "heads" && "ring-4 ring-yellow-400 rounded-full"
          )}
        />
      </div>
      <div className="absolute inset-0 rotate-y-180 backface-hidden">
        <img 
          src="/magic-lamp.png" 
          alt="Tails" 
          className={cn(
            "w-full h-full object-contain",
            selected === "tails" && "ring-4 ring-yellow-400 rounded-full"
          )}
        />
      </div>
    </div>
  );
};