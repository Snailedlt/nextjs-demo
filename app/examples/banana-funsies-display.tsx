"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Example } from "~/db/schema";
import { BananaFunsy } from "./banana-funsy";

interface BananaFunsiesDisplayProps {
  examples: Example[];
}
export function BananaFunsiesDisplay({ examples }: BananaFunsiesDisplayProps) {
  const [parent] = useAutoAnimate();
  return (
    <div ref={parent} className="flex flex-col gap-2 w-[300px]">
      {examples.map((example) => (
        <BananaFunsy key={example.id} {...example} />
      ))}
    </div>
  );
}
