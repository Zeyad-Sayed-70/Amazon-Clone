import React from "react";

const TABS = [
  {
    id: 1,
    content: "orders",
  },
  {
    id: 2,
    content: "buy again",
  },
  {
    id: 3,
    content: "not yet shipped",
  },
  {
    id: 4,
    content: "digital orders",
  },
  {
    id: 5,
    content: "local store orders",
  },
  {
    id: 6,
    content: "cancelled orders",
  },
];

export default function Tabs({
  tab: selectedTab,
  setTab,
}: {
  tab: number;
  setTab: (tab: number) => void;
}) {
  return (
    <section className="flex items-center mt-2">
      {TABS.map((tab) => (
        <div
          key={tab.id}
          className={`px-2 py-1 text-small capitalize border-b-2 hover:text-secondary_red cursor-pointer select-none ${
            tab.id === selectedTab
              ? "text-secondary_darkBlack border-b-2 border-secondary_orange"
              : "text-secondary_blue"
          }`}
          onClick={() => setTab(tab.id)}
        >
          {tab.content}
        </div>
      ))}
    </section>
  );
}
