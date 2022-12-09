import { useState } from "react";

export default function TabMenu({
  items,
}: {
  items: {
    title: string;
    active: boolean;
    content?: {
      title: string;
      text: string;
    };
  }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabSelect = (tabItem: { title: string; active: boolean }) => {
    items.map((item, index) => {
      if (item.title == tabItem.title) {
        item.active = true;
        setActiveIndex(index);
      } else {
        item.active = false;
      }
    });
  };

  return (
    <div className="">
      <ul className="flex justify-between flex-col">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handleTabSelect(item)}
              className={item.active ? "mb-4 text-white border-l-2 bg-pink-00 border-pink-700 pl-4" : "mb-4 border-l-2 border-gray-900 text-gray-700 pl-4"}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <div className="bg-slate-900 p-6 rounded-3xl mt-4">
        <div className="text-4xl pb-4 text-pink-700">{items[activeIndex].content?.title}</div>
        <div>{items[activeIndex].content?.text}</div>
      </div>
    </div>
  );
}
