"use client";

import { Banana } from "lucide-react";
import { Button } from "~/components/ui/button";
import { BlurIn } from "./text-effects";
import { Example } from "~/db/schema";
import { removeExampleAction } from "./_actions";

export function BananaFunsy({ id, name }: Example) {
  return (
    <div
      className="bg-yellow-500 px-6 py-2 rounded-full flex justify-start items-center gap-2 w-full"
      key={id}
    >
      <Button
        onClick={(e) => removeExampleAction(id)}
        className="bg-slate-900 p-3 rounded-full"
        size="icon"
      >
        <Banana className="h-5 w-5 stroke-yellow-400" />
      </Button>

      <BlurIn text={name} />
    </div>
  );
}
