"use client";

import React from "react";

export function TransferButton({
  children,
  ...props
}: React.ComponentProps<"button"> & {
  chainId: number;
  tokenAddress: string;
  recipient: string;
}) {
  return (
    <button
      {...props}
      onClick={() => {
        console.warn("TransferButton clicked", props);
      }}
    >
      {children}
    </button>
  );
}
