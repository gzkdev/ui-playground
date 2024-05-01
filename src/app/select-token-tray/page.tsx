"use client";
import { AnimatePresence, motion } from "framer-motion";
import { PrototypeHeader } from "@/components/prototype-header";
import { useState } from "react";
import { Plus } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="max-w-screen-md p-6 mx-auto space-y-40">
      <div className="my-10 space-y-2">
        <PrototypeHeader title="Select token tray" />

        <AnimatedSelectTokenTray />
      </div>
    </div>
  );
}

function AnimatedSelectTokenTray() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed flex items-center justify-center bottom-10 left-0 w-full">
      <motion.div
        layout
        className="bg-zinc-800 w-[90%] max-w-md z-50"
        style={{ borderRadius: "32px" }}
      >
        <motion.div
          layout
          className="flex items-center gap-2"
          style={{ padding: isExpanded ? "16px" : "8px" }}
        >
          {isExpanded || (
            <AnimatePresence>
              <motion.button
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="min-w-9 size-9 bg-zinc-700 rounded-full"
              ></motion.button>
            </AnimatePresence>
          )}
          <motion.div
            layout
            className="flex-grow flex-shrink self-stretch rounded-full bg-zinc-700 relative"
          >
            <input
              type="text"
              placeholder="Search for tokens"
              className="bg-transparent text-inherit w-full h-full  px-4 outline-none placeholder:text-zinc-500"
            />
          </motion.div>
          <motion.button
            layout
            onClick={() => setIsExpanded((x) => !x)}
            style={{ borderRadius: "100px" }}
            className={
              isExpanded
                ? "min-w-9 size-9 bg-zinc-700 flex items-center justify-center"
                : "bg-zinc-950 text-white px-6 self-stretch flex items-center justify-center"
            }
          >
            <motion.span
              layout
              className={
                isExpanded ? "inline-flex rotate-45" : "inline-flex rotate-0"
              }
            >
              <Plus />
            </motion.span>
          </motion.button>
        </motion.div>
        {isExpanded && (
          <AnimatePresence presenceAffectsLayout>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.5,
                },
              }}
              layout
            >
              <ul className="px-5 pt-2 pb-8">
                {tokens.map(({ id, name, symbol, price, priceDelta }) => (
                  <li
                    key={id}
                    className="flex items-center gap-2 p-3 -mx-3 hover:bg-zinc-900 transition rounded-2xl cursor-pointer"
                  >
                    <div className="size-10 rounded-full bg-zinc-600"></div>
                    <div className="flex flex-col flex-grow">
                      <span>{name}</span>
                      <span className="text-sm">{symbol}</span>
                    </div>
                    <div className="flex flex-col text-end">
                      <span>{price}</span>
                      <span className="text-sm">{priceDelta}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}

const tokens = [
  {
    id: 0,
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,356.61",
    priceDelta: "+5.56%",
  },
  {
    id: 1,
    name: "USDC Coin",
    symbol: "USDC",
    price: "$1.00",
    priceDelta: "+0.01%",
  },
  {
    id: 2,
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    priceDelta: "+0.02%",
  },
  {
    id: 3,
    name: "Polygon",
    symbol: "MATIC",
    price: "$0.73",
    priceDelta: "+7.51%",
  },
  {
    id: 4,
    name: "Chainlink",
    symbol: "Link",
    price: "$14.25",
    priceDelta: "+1.00%",
  },
];
