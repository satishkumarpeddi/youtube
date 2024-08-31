import { useParams } from "react-router-dom";
const WatchContainer = ({ info, value }) => {
  if (info.id === value) {
    return (
      <main className="">
        <div className="p-[1rem]">
          <h1 className="font-bold">{info.snippet.title}</h1>
          <div className="flex justify-between">
            <p>{info.snippet.channelTitle}</p>
            <p>{info.statistics.viewCount}</p>
            <button className="bg-black p-[.3rem] text-white font-bold rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </main>
    );
  } else {
    return null;
  }
};

export default WatchContainer;
