import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const Index = () => {
  const [betAmount, setBetAmount] = useState(2000);
  const [multiplier, setMultiplier] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 p-4">
      {/* Network Warning */}
      <div className="text-center mb-8 text-white">
        <p>This dApp requires Avalanche Mainnet to be active network</p>
        <Button variant="outline" className="mt-4 bg-yellow-400/10 text-yellow-400 border-yellow-400/20 hover:bg-yellow-400/20">
          Switch Network
        </Button>
        <Button variant="outline" className="mt-4 ml-2 bg-yellow-400/10 text-yellow-400 border-yellow-400/20 hover:bg-yellow-400/20">
          Add Network to Metamask
        </Button>
      </div>

      {/* Main Game Container */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-indigo-900/40 rounded-3xl p-8 backdrop-blur-sm border border-indigo-500/20">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-4xl">🧞</span>
            <h1 className="text-4xl font-bold text-blue-200">Magic Genie Flip Game</h1>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-xl text-blue-200">🔮 PLAY TO EARN 🔮</h2>
            <p className="text-sm text-blue-300 mt-2">✨ 2.5% $GENIE sent to burn contract</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
              <div className="text-6xl">✨</div>
            </div>
          </div>
        </div>

        {/* Game Controls */}
        <div className="mt-6 bg-indigo-900/40 rounded-3xl p-6 backdrop-blur-sm border border-indigo-500/20">
          <div className="mb-6">
            <p className="text-blue-200 mb-2">Minimum Wager: 1 $GENIE</p>
            <div className="relative">
              <input 
                type="number" 
                value={betAmount}
                onChange={(e) => setBetAmount(Number(e.target.value))}
                className="w-full bg-indigo-950/50 border border-indigo-500/30 rounded-lg p-3 text-blue-200"
                max={2000}
              />
              <span className="absolute right-3 top-3 text-blue-400">MAX : 2000</span>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold">
              HEADS
            </Button>
            <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold">
              TAILS
            </Button>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-blue-200 mb-2">
              <span>Multiplier</span>
              <span>{multiplier}x</span>
            </div>
            <Slider
              defaultValue={[1]}
              max={5}
              step={0.1}
              onValueChange={(value) => setMultiplier(value[0])}
              className="my-4"
            />
          </div>

          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4">
            Place Your Bet
          </Button>

          <p className="text-center text-blue-300 mt-4">Pick your choice</p>
        </div>

        {/* Footer */}
        <div className="flex justify-center gap-6 mt-8">
          <Button variant="outline" className="bg-yellow-400/10 text-yellow-400 border-yellow-400/20 hover:bg-yellow-400/20">
            Buy $GENIE
          </Button>
          <img src="/glacier-logo.png" alt="Glacier" className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default Index;