const Button = () => {
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
  return (
    <div>
      {lists.map((list) => (
        <button className="m-[.3rem] bg-gray-200 pl-[.3rem] pr-[.3rem] rounded-md font-bold">
          {list}
        </button>
      ))}
    </div>
  );
};

export default Button;
