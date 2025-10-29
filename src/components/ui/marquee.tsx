import React from "react";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

const reviews = [
  {
    name: "Rafi",
    username: "@rafi",
    body: "This project is next level! Feels like something straight out of Dhaka’s tech scene.",
    img: "https://avatar.vercel.sh/raf",
  },
  {
    name: "Nusrat",
    username: "@nusrat",
    body: "I’m honestly impressed. Smooth, clean, and beautiful — just wow!",
    img: "https://avatar.vercel.sh/nusrat",
  },
  {
    name: "Sakib",
    username: "@sakib",
    body: "From Chittagong to the world! This deserves all the attention it’s getting.",
    img: "https://avatar.vercel.sh/sakib",
  },
  {
    name: "Mim",
    username: "@mim",
    body: "Absolutely love the design and the vibe. Feels modern and proud of our roots!",
    img: "https://avatar.vercel.sh/mim",
  },
  {
    name: "Tanvir",
    username: "@tanvir",
    body: "Simple, elegant, and fast — just how every Bangladeshi dev dreams it to be.",
    img: "https://avatar.vercel.sh/tanvir",
  },
  {
    name: "Ayesha",
    username: "@ayesha",
    body: "This reminds me why I love building cool things from Dhaka. Pure inspiration!",
    img: "https://avatar.vercel.sh/ayesha",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.05] dark:hover:bg-gray-50/[.08]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div
      id="testimonials"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* gradient edges */}
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
