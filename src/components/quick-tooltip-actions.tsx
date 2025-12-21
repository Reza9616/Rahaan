"use client";

import Link from "next/link";
import { Phone, Grid, User, Monitor } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TickerOptions = [
  {
    icon: <Phone className="h-6 w-6 text-background -rotate-90" />,
    tooltip: "تماس",
    href: (ticker: string) => `/callus`,
  },
  {
    icon: <Grid className="h-6 w-6 text-background" />,
    tooltip: "محصولات",
    href: (ticker: string) => `/Software`,
  } ,
  {
    icon: <Monitor className="h-6 w-6 text-background -rotate-90" />,
    tooltip: "دمو",
    href: (ticker: string) => `/callus`,
  },
];

function TickerOptionPil({
  icon,
  tooltip,
  href,
  ticker,
}: {
  icon: React.ReactNode;
  tooltip: string;
  href: (ticker: string) => string;
  ticker: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href(ticker)}
            className="p-2 group hover:bg-muted-foreground/10 rounded-full flex items-center justify-center"
          >
            {icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="p-1 bg-popover text-xs rounded-md border"
        >
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function QuickTickerOptions({ ticker }: { ticker: string }) {
  return (
    <div className="flex gap-3 justify-center items-center text-foreground border bg-primary rounded-xl px-3 py-2.5">
      {TickerOptions.map((option) => (
        <TickerOptionPil
          key={option.tooltip}
          icon={option.icon}
          tooltip={option.tooltip}
          href={option.href}
          ticker={ticker}
        />
      ))}
    </div>
  );
}

export default function Component() {
  const [ticker, setTicker] = useState("AAPL");

  return (
    <div className="flex w-full justify-center items-center h-[400px]">
      <TooltipProvider>
        <Tooltip key={ticker} delayDuration={0.2}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="rounded-full" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={0}
            align="center"
            className="p-2 bg-popover rounded-xl ml-1"
          >
            <QuickTickerOptions ticker={ticker} />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
