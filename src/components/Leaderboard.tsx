import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  address: string;
  wins: number;
  totalWinnings: number;
}

export const Leaderboard = ({ entries }: { entries: LeaderboardEntry[] }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-yellow-400/10 text-yellow-400 border-yellow-400/20 hover:bg-yellow-400/20">
          <Trophy className="w-4 h-4 mr-2" />
          Leaderboard
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Top Players</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {entries.map((entry) => (
            <div key={entry.rank} className="flex items-center justify-between py-2 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-yellow-400">#{entry.rank}</span>
                <span className="text-sm text-gray-300">{entry.address.slice(0, 6)}...{entry.address.slice(-4)}</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-300">{entry.wins} wins</div>
                <div className="text-sm text-yellow-400">{entry.totalWinnings} $GENIE</div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};