"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, MagnifyingGlass, Plus, X } from "@phosphor-icons/react";
import { PrototypeHeader } from "@/components/prototype-header";

export default function Home() {
  return (
    <div className="bg-zinc-200 text-zinc-700 min-h-screen">
      <div className="max-w-screen-md p-6 mx-auto space-y-40">
        <div className="my-10 space-y-2">
          <PrototypeHeader title="Select token tray" />

          <AnimatedSelectTokenTray />
        </div>
      </div>
    </div>
  );
}

function AnimatedSelectTokenTray() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed flex items-center justify-center bottom-10 w-[90%] max-w-sm left-1/2 -translate-x-1/2">
      <motion.div
        layout
        className="bg-zinc-50 w-full z-50"
        style={{ borderRadius: "32px" }}
      >
        <motion.div
          layout
          className="flex gap-2"
          style={{ padding: isExpanded ? "16px" : "8px" }}
        >
          {isExpanded || (
            <motion.div layout className="flex-grow max-w-max">
              <button
                onClick={() => setIsExpanded((x) => !x)}
                className="size-9 bg-zinc-200 rounded-full inline-flex items-center justify-center"
              >
                <Clock weight="bold" />
              </button>
            </motion.div>
          )}

          <motion.div
            layout
            className="relative flex-grow rounded-full bg-zinc-200 flex items-center"
          >
            <MagnifyingGlass weight="bold" className="absolute left-3" />
            <input
              type="text"
              onFocus={() => setIsExpanded(true)}
              placeholder="Search for tokens"
              className="bg-transparent w-full h-full pl-9 outline-none placeholder:text-zinc-400"
            />
          </motion.div>

          <motion.div layout className="flex-grow max-w-max">
            {isExpanded ? (
              <button
                onClick={() => setIsExpanded((x) => !x)}
                className="size-9 bg-zinc-200 inline-flex items-center justify-center rounded-full"
              >
                <X />
              </button>
            ) : (
              <button
                onClick={() => setIsExpanded((x) => !x)}
                style={{ borderRadius: "100px" }}
                className="bg-zinc-950 text-white px-5 h-full flex items-center justify-center"
              >
                <Plus weight="bold" />
              </button>
            )}
          </motion.div>
        </motion.div>
        {isExpanded && (
          <AnimatePresence>
            <motion.ul
              layout
              variants={animateList}
              initial="initial"
              animate="animate"
              className="px-5 py-2"
            >
              {tokens.map(({ id, name, symbol, price, priceDelta, logo }) => (
                <AnimatePresence key={id}>
                  <motion.li
                    variants={animateItem}
                    layout
                    className="flex items-center gap-2 p-3 -mx-3 -mt-2 hover:bg-zinc-100 transition rounded-3xl cursor-pointer"
                  >
                    <div className="size-10 rounded-full">{logo}</div>
                    <div className="flex flex-col flex-grow">
                      <span className="text-zinc-800 font-medium">{name}</span>
                      <span className="text-sm">{symbol}</span>
                    </div>
                    <div className="flex flex-col text-end">
                      <span className="text-zinc-800 font-medium">{price}</span>
                      <span className="text-sm text-green-500 font-medium">
                        {priceDelta}
                      </span>
                    </div>
                  </motion.li>
                </AnimatePresence>
              ))}
            </motion.ul>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}

const animateList = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      when: "beforeChildren",
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

const animateItem = {
  animate: { opacity: 1, y: "0px" },
  initial: {
    opacity: 0,
    y: "-40px",
  },
};

const tokens = [
  {
    id: 0,
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,356.61",
    priceDelta: "+5.56%",
    logo: (
      <svg viewBox="0 0 99 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M96.5786 60.8232C90.0401 87.0572 63.4695 103.077 37.1874 96.5341C10.9533 89.9756 -5.04033 63.4049 1.49815 37.1709C8.03664 10.937 34.5912 -5.08244 60.8093 1.46002C87.1074 7.9223 103.101 34.5732 96.5786 60.8232Z"
          fill="#ECEFF0"
        />
        <path
          d="M49.6058 60.883C49.4155 60.9477 49.3069 60.7821 49.1775 60.7059C42.8317 56.9607 36.4929 53.2128 30.1611 49.4625C30.0998 49.4315 30.0361 49.4054 29.9707 49.3844V49.3007L30.083 49.2359C30.2425 49.1941 30.3995 49.1432 30.5533 49.0837L45.5071 42.2797C46.8397 41.6724 48.1723 41.0746 49.5049 40.4731H49.6001C49.6001 40.6634 49.6001 40.8329 49.6001 41.0137C49.6052 47.6374 49.6071 54.2605 49.6058 60.883Z"
          fill="#343535"
        />
        <path
          d="M49.6153 40.4777H49.5201C49.5201 40.2873 49.5391 40.0969 49.5391 39.897C49.5391 32.4573 49.5391 25.0168 49.5391 17.5758C49.5173 17.3847 49.5302 17.1912 49.5772 17.0047H49.6172C50.3996 18.1602 51.0812 19.3786 51.8008 20.5722C57.5018 30.0287 63.1997 39.4839 68.8944 48.9379C68.9496 49.0312 68.9934 49.1282 69.0429 49.231C68.8816 49.1966 68.7232 49.1501 68.5689 49.0921C67.5237 48.62 66.4748 48.1402 65.4391 47.6586C63.8172 46.9161 62.1945 46.1749 60.5713 45.435L52.7507 41.8922C51.7094 41.4124 50.6623 40.946 49.6153 40.4777Z"
          fill="#2F3030"
        />
        <path
          d="M49.5835 16.9948C49.5364 17.1813 49.5235 17.3748 49.5454 17.5659C49.5454 25.0057 49.5454 32.4461 49.5454 39.8872C49.5454 40.0776 49.534 40.268 49.5264 40.4678C48.1938 41.0694 46.8611 41.6672 45.5285 42.2745L30.5747 49.0784C30.4209 49.138 30.2639 49.1889 30.1045 49.2307C30.5366 48.3322 31.0982 47.5174 31.6103 46.6569C37.5436 36.7943 43.4814 26.9336 49.4236 17.0748C49.4628 17.0202 49.5054 16.968 49.5511 16.9187L49.5835 16.9948Z"
          fill="#828384"
        />
        <path
          d="M49.6153 40.4777C50.6623 40.946 51.7097 41.4126 52.7549 41.8847L60.5754 45.4276C62.1999 46.1662 63.8226 46.9074 65.4433 47.6511C66.4865 48.129 67.5374 48.6125 68.573 49.0846C68.7273 49.1427 68.8858 49.1892 69.047 49.2236C69.2374 49.4616 68.9557 49.4711 68.87 49.5225C67.2461 50.4934 65.6146 51.451 63.9869 52.4143C59.3151 55.1785 54.6446 57.9421 49.9754 60.705C49.8574 60.7736 49.7296 60.824 49.6058 60.883C49.6058 54.2618 49.6061 47.641 49.6061 41.0185C49.608 40.8377 49.6134 40.6585 49.6153 40.4777Z"
          fill="#131313"
        />
        <path
          d="M49.5389 64.6441L61.7704 57.4347C64.1057 56.0564 66.4397 54.6768 68.7724 53.296L68.9837 53.1799C69.0046 53.3702 68.8733 53.4711 68.7933 53.5816C63.4629 61.0962 58.1324 68.6084 52.8019 76.1179C51.793 77.5419 50.7859 78.9735 49.7674 80.3861C49.7141 80.4604 49.6322 80.8088 49.4685 80.4394C49.598 80.329 49.5408 80.1805 49.5408 80.0587C49.5421 74.9186 49.5415 69.7804 49.5389 64.6441Z"
          fill="#2F3030"
        />
        <path
          d="M49.5379 64.6451C49.5379 69.7814 49.5379 74.9164 49.5379 80.0501C49.5379 80.1815 49.595 80.33 49.4655 80.4309C49.1933 80.2671 49.0753 79.974 48.8944 79.7322C42.7136 71.0258 36.536 62.3181 30.3616 53.6092C30.2835 53.4988 30.2112 53.3807 30.1312 53.2589C30.2911 53.1656 30.3768 53.2932 30.4701 53.3484C36.7207 57.0391 42.97 60.7329 49.2181 64.43C49.3342 64.5023 49.4332 64.5766 49.5379 64.6451Z"
          fill="#828384"
        />
        <path
          d="M49.5849 16.9947L49.5392 16.9243C49.623 16.871 49.6115 16.949 49.6249 16.989L49.5849 16.9947Z"
          fill="#393939"
        />
      </svg>
    ),
  },
  {
    id: 1,
    name: "USDC Coin",
    symbol: "USDC",
    price: "$1.00",
    priceDelta: "+0.01%",
    logo: (
      <svg viewBox="0 0 99 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M96.5786 60.8232C90.0401 87.0572 63.4695 103.077 37.1874 96.5341C10.9533 89.9756 -5.04033 63.4049 1.49815 37.1709C8.03664 10.937 34.5912 -5.08244 60.8093 1.46002C87.1074 7.9223 103.101 34.5732 96.5786 60.8232Z"
          fill="#2775CA"
        />
        <path
          d="M20.5087 38.1794C14.5875 53.9006 22.7544 71.6631 38.6794 77.3794C39.2919 77.7881 39.9044 78.6044 39.9044 79.2169V82.0756C39.9044 82.4838 39.9044 82.6881 39.7 82.8919C39.4962 83.7087 38.6794 84.1169 37.8625 83.7088C26.4294 80.0338 17.65 71.2544 13.975 59.8213C7.85004 40.4256 18.4669 19.8044 37.8625 13.6794C38.0669 13.4756 38.475 13.4756 38.6794 13.4756C39.4962 13.6794 39.9044 14.2919 39.9044 15.1088V17.9669C39.9044 18.9881 39.4962 19.6006 38.6794 20.0088C30.3087 23.0713 23.5712 29.6044 20.5087 38.1794Z"
          fill="white"
        />
        <path
          d="M58.4837 14.4963C58.6875 13.6794 59.5044 13.2713 60.3212 13.6794C71.55 17.3544 80.5337 26.1338 84.2087 37.7713C90.3337 57.1669 79.7169 77.7881 60.3212 83.9131C60.1169 84.1169 59.7087 84.1169 59.5044 84.1169C58.6875 83.9131 58.2794 83.3006 58.2794 82.4838V79.6256C58.2794 78.6044 58.6875 77.9919 59.5044 77.5838C67.875 74.5213 74.6125 67.9881 77.675 59.4131C83.5962 43.6919 75.4294 25.9294 59.5044 20.2131C58.8919 19.8044 58.2794 18.9881 58.2794 18.1713V15.3131C58.2794 14.9044 58.2794 14.7006 58.4837 14.4963Z"
          fill="white"
        />
        <path
          d="M49.7042 45.3257C58.2792 46.3464 62.5667 48.7964 62.5667 55.9421C62.5667 61.4546 58.4836 65.7421 52.3586 66.7632V71.6632C52.1542 72.6839 51.5417 73.2964 50.7249 73.2964H47.6624C46.6417 73.0921 46.0292 72.4796 46.0292 71.6632V66.7632C39.2917 65.7421 36.0249 62.0671 35.2085 56.9632V56.7589C35.2085 55.9421 35.821 55.3296 36.6374 55.3296H40.1085C40.721 55.3296 41.3335 55.7382 41.5374 56.5546C42.1499 59.6171 43.9874 61.8632 49.296 61.8632C53.1749 61.8632 56.0336 59.6175 56.0336 56.3507C56.0336 53.0839 54.196 51.8589 48.4792 50.8382C39.9042 49.8171 35.821 47.1632 35.821 40.4257C35.821 35.3214 39.6999 31.2382 45.8249 30.4214V25.7257C46.0292 24.7046 46.6417 24.0921 47.4585 24.0921H50.521C51.5417 24.2964 52.1542 24.9089 52.1542 25.7257V30.6257C56.8499 31.0339 60.5249 34.5046 61.3417 38.9964V39.2007C61.3417 40.0171 60.7292 40.6296 59.9124 40.6296H56.646C56.0336 40.6296 55.421 40.2214 55.2167 39.6089C54.196 36.5464 52.1542 35.3214 48.4792 35.3214C44.396 35.3214 42.3542 37.1584 42.3542 40.0171C42.3542 42.8757 43.5792 44.5089 49.7042 45.3257Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    priceDelta: "+0.02%",
    logo: (
      <svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_413_1388)">
          <path
            d="M65.9412 32.9884C65.9412 51.1236 51.2406 65.8242 33.1054 65.8242C14.9708 65.8242 0.269531 51.1236 0.269531 32.9884C0.269531 14.8535 14.9708 0.152588 33.1054 0.152588C51.2406 0.152588 65.9412 14.8535 65.9412 32.9884Z"
            fill="#1BA27A"
          />
          <path
            d="M48.5158 16.7104H17.4236V24.2167H29.2166V35.2496H36.7228V24.2167H48.5158V16.7104Z"
            fill="white"
          />
          <path
            d="M33.0416 36.4248C23.2861 36.4248 15.3769 34.8808 15.3769 32.976C15.3769 31.0715 23.2857 29.5273 33.0416 29.5273C42.7971 29.5273 50.7059 31.0715 50.7059 32.976C50.7059 34.8808 42.7971 36.4248 33.0416 36.4248ZM52.8761 33.551C52.8761 31.0948 43.9959 29.104 33.0416 29.104C22.0876 29.104 13.2068 31.0948 13.2068 33.551C13.2068 35.7139 20.0928 37.5159 29.2175 37.9152V53.7532H36.7231V37.9214C45.9182 37.5346 52.8761 35.725 52.8761 33.551Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_413_1388">
            <rect width="66" height="66" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Polygon",
    symbol: "MATIC",
    price: "$0.73",
    priceDelta: "+7.51%",
    logo: (
      <svg viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M49 98C76.062 98 98 76.062 98 49C98 21.938 76.062 0 49 0C21.938 0 0 21.938 0 49C0 76.062 21.938 98 49 98Z"
          fill="url(#paint0_linear_1160_2994)"
        />
        <path
          d="M63.14 59.5953L77.0031 51.5904C77.7374 51.1662 78.1916 50.3779 78.1916 49.5296V33.5217C78.1916 32.6754 77.7354 31.8851 77.0031 31.461L63.14 23.456C62.4058 23.0319 61.4954 23.0339 60.7612 23.456L46.8981 31.461C46.1638 31.8851 45.7096 32.6754 45.7096 33.5217V62.1302L35.9881 67.7423L26.2665 62.1302V50.9041L35.9881 45.2921L42.4004 48.9934V41.4627L37.1765 38.4475C36.8164 38.2395 36.4042 38.1294 35.9861 38.1294C35.5679 38.1294 35.1558 38.2395 34.7976 38.4475L20.9345 46.4525C20.2003 46.8766 19.7461 47.6649 19.7461 48.5132V64.5211C19.7461 65.3674 20.2023 66.1577 20.9345 66.5819L34.7976 74.5868C35.5299 75.009 36.4422 75.009 37.1765 74.5868L51.0396 66.5839C51.7739 66.1597 52.228 65.3694 52.228 64.5231V35.9146L52.4041 35.8146L61.9496 30.3026L71.6712 35.9146V47.1407L61.9496 52.7528L55.5472 49.0554V56.5862L60.7612 59.5973C61.4954 60.0195 62.4058 60.0195 63.14 59.5973V59.5953Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1160_2994"
            x1="-17.9094"
            y1="8.05457"
            x2="83.2598"
            y2="69.9653"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A229C5" />
            <stop offset="1" stop-color="#7B3FE4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Chainlink",
    symbol: "Link",
    price: "$14.25",
    priceDelta: "+1.00%",
    logo: (
      <svg viewBox="0 0 99 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M96.5786 60.8232C90.0401 87.0572 63.4695 103.077 37.1874 96.5341C10.9533 89.9756 -5.04033 63.4049 1.49815 37.1709C8.03664 10.937 34.5912 -5.08244 60.8093 1.46002C87.1074 7.9223 103.101 34.5732 96.5786 60.8232Z"
          fill="#375BD2"
        />
        <path
          d="M49.3197 28.5295L67.1802 38.7284V59.2076L49.3689 69.4718L31.5085 59.2892V38.8098L49.3197 28.5295ZM49.3197 13.4756L42.7655 17.2554L24.9215 27.5357L18.3672 31.3155V38.8424V59.3054V66.8323L24.9215 70.5797L42.7819 80.7785L49.3361 84.5256L55.8906 80.7458L73.7018 70.4656L80.2561 66.7021V59.1752V38.6958V31.1689L73.7018 27.4217L55.8414 17.2228L49.2871 13.4756H49.3197Z"
          fill="white"
        />
      </svg>
    ),
  },
];
