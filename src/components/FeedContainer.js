import React from "react";

const FeedContainer = ({ info }) => {
  return (
    <main className="md:w-[300px] max-w-sm h-[320px]">
      <div>
        <img
          className="rounded-lg m-[.2rem]"
          src={info.snippet.thumbnails.high.url}
        />
      </div>
      <div className="max-w-sm md:w-[300px] md:p-0 flex flex-col justify-center p-[1rem]">
        <h1 className="font-bold">{info.snippet.title}</h1>
        <div className="flex justify-between">
          <p>{info.snippet.channelTitle}</p>
          <p>{info.statistics.viewCount}</p>
        </div>
      </div>
    </main>
  );
};

export default FeedContainer;
