"use client";

import { useFrameSDK } from "~/hooks/useFrameSDK";
import { DaimoPayTransferButton } from "./daimo-pay-transfer-button";

export default function MiniApp() {
  const { isSDKLoaded, isFramePinned, pinFrame } = useFrameSDK();

  if (!isSDKLoaded) {
    return (
      <div className="text-center mt-10 text-xl font-bold text-transparent bg-clip-text animate-rainbow">
        Loading...
      </div>
    );
  }

  if (isFramePinned) {
    return (
      <div className="w-full max-w-sm mx-auto mt-10 p-6 bg-gradient-to-br from-black via-gray-900 to-black border border-cyan-500 rounded-2xl neon-border shadow-lg shadow-cyan-500/50 animate-blob">
        <div className="flex justify-center items-center mb-4">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full animate-pulse">
            Waitlist
          </span>
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg font-bold text-cyan-400 text-neon animate-flicker">
            🎉 You&apos;re on the waitlist!
          </p>
        </div>
        <div className="mt-6 text-center">
          <DaimoPayTransferButton
            className="px-4 py-2 font-bold text-white rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-colors shadow-md"
            toChainId={8453}
            tokenAddress="0x3F56e0C36d275367b8C502090eDf38289b3dEa0d"
            toAddress="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
            amount="1"
            text="Donate USDC"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto mt-10 p-6 bg-gradient-to-br from-black via-gray-900 to-black border border-cyan-500 rounded-2xl neon-border shadow-lg shadow-cyan-500/50 animate-blob">
      <div className="flex justify-between items-center mb-4">
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full animate-pulse">
          Waitlist
        </span>
        <span className="w-3 h-3 bg-red-600 rounded-full animate-ping" />
      </div>
      <div className="mt-4 text-center">
        <p className="mb-4 font-bold text-cyan-400 text-neon animate-flicker">Join the Vibe for Free waitlist</p>
        <button
          onClick={pinFrame}
          className="px-4 py-2 font-bold text-white rounded-full bg-cyan-500 hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/50 neon-border text-neon animate-flicker"
        >
          Join Waitlist
        </button>
      </div>
      <div className="mt-6 text-center">
        <DaimoPayTransferButton
          className="px-4 py-2 font-bold text-white rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-colors shadow-md"
          toChainId={8453}
          tokenAddress="0x3F56e0C36d275367b8C502090eDf38289b3dEa0d"
          toAddress="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
          amount="1"
          text="Donate USDC"
        />
      </div>
    </div>
  );
}
