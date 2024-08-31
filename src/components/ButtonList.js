import { list } from "postcss";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const TRANSLATE_AMOUNT = 200;
const ButtonList = () => {
  const lists = [
    "All",
    "Trending",
    "Shopping",
    "Music",
    "Films",
    "Live",
    "Gaming",
    "News",
    "Sports",
    "Courses",
    "Fashion & beauty",
    "Podcasts",
    "Food",
    "Films",
    "Interviews",
    "Health",
    "Webdevelopment",
  ];
  const { active } = useParams();
  console.log(active);
  const [translate, setTranslate] = useState(0);
  const [btnActive, setBtnActive] = useState(lists[0]);
  const [isLeftVisible, setIsLeftVisible] = useState(true);
  const [isRightVisible, setIsRightVisible] = useState(true);
  const containerRef = useRef();
  const toggleSearch = useSelector(
    (store) => store.searchSlice.isSuggestionOpen
  );
  console.log(toggleSearch);
  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [lists, translate]);
  return (
    <div ref={containerRef} className={`overflow-x-hidden  relative `}>
      <div
        className="flex gap-x-[1rem] transition-transform whitespace-nowrap p-[.3rem] w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {lists.map((list, index) => (
          <button
            onClick={() => setBtnActive(lists[index])}
            key={index}
            className={`font-bold pl-[.2rem] pr-[.2rem] rounded-md ${
              btnActive === lists[index] ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {list}
          </button>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 ">
        {isLeftVisible && (
          <button
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              });
            }}
          >
            <FaArrowLeft />
          </button>
        )}
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2">
        {isRightVisible && (
          <button
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate + TRANSLATE_AMOUNT;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;
                if (newTranslate + width >= edge) {
                  return edge - width;
                }
                return newTranslate;
              });
            }}
          >
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default ButtonList;
