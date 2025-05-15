"use client";

import { useFrameSDK } from "~/hooks/useFrameSDK";

export default function MiniApp() {
  const { isSDKLoaded, isFramePinned, pinFrame } = useFrameSDK();

  if (!isSDKLoaded) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (isFramePinned) {
    return (
      <div className="w-full max-w-sm mx-auto mt-10 p-4 bg-slate-200 border-2 border-gray-800 shadow-lg">
        <div className="bg-blue-600 text-white px-2 py-1 text-sm font-bold">
          Waitlist
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg font-bold">🎉 You&apos;re on the waitlist!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto mt-10 p-4 bg-slate-200 border-2 border-gray-800 shadow-lg">
      <div className="bg-blue-600 text-white px-2 py-1 flex justify-between items-center">
        <span className="text-sm font-bold">Waitlist</span>
        <div className="flex space-x-1">
          <span className="w-3 h-3 bg-red-600 rounded-full" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="mb-4">Join the Vibe for Free waitlist</p>
        <button
          onClick={pinFrame}
          className="bg-gray-100 border border-gray-800 px-4 py-2 hover:bg-gray-200"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
}
