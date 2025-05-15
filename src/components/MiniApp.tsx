"use client";

import { useFrameSDK } from "~/hooks/useFrameSDK";

export default function MiniApp() {
  const { isSDKLoaded, isFramePinned, pinFrame } = useFrameSDK();

  if (!isSDKLoaded) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (isFramePinned) {
    return (
      <div className="w-full max-w-sm mx-auto mt-10 p-4 bg-[#C0C0C0] border-2 border-black shadow-none font-mono">
        <div className="bg-[#000080] text-[#FFFFFF] px-2 py-1 text-sm font-bold">
          Waitlist
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg font-bold">🎉 You&apos;re on the waitlist!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto mt-10 p-4 bg-[#C0C0C0] border-2 border-black shadow-none font-mono">
      <div className="bg-[#000080] text-[#FFFFFF] px-2 py-1 flex justify-between items-center">
        <span className="text-sm font-bold">Waitlist</span>
        <div className="flex space-x-1">
          <span className="w-3 h-3 bg-red-600 rounded-full" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="mb-4">Join the Vibe for Free waitlist</p>
        <button
          onClick={pinFrame}
          className="bg-[#E0E0E0] border-2 border-black px-4 py-2 hover:bg-[#FFFFFF] active:translate-y-[1px] active:border-t-black/10 text-black font-bold"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
}
