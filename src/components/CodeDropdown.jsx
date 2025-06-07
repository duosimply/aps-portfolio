import { useState, useRef, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState({});

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Measure content height for animation
  const refs = useRef([]);

  useEffect(() => {
    const newHeights = {};
    refs.current.forEach((ref, index) => {
      if (ref) {
        newHeights[index] = ref.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [items]);

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = index === activeIndex;
        const contentHeight = isOpen ? heights[index] : 0;

        return (
          <div key={index} className="border-t border-b rounded border-[#fe5953] overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-gray-500 font-semibold text-left bg-[#8d8d8d13] hover:cursor-pointer"
            >
              Implementation
              <span className="text-lg">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className="transition-all duration-500 ease-in-out overflow-hidden"
              style={{ maxHeight: contentHeight }}
            >
              <div ref={(el) => (refs.current[index] = el)} className="p-2 bg-[#8d8d8d13]">
                <SyntaxHighlighter
                  language="cpp"
                  style={oneLight}
                  wrapLongLines
                  customStyle={{ background: "transparent", margin: 0 }}
                  showLineNumbers
                >
                  {item.content}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
