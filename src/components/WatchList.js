import { useParams } from "react-router-dom";
import ButtonList from "./ButtonList";
import WatchContainer from "./WatchContainer";
import { useState, useEffect } from "react";
import { YOUTUBE_API } from "../utils/fetchDataApi";
import ChatsContainer from "./ChatsContainer";
import LiveChat from "./LiveChat";
const WatchList = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="p-[1rem] w-screen   flex flex-col gap-[1rem] lg:flex-row">
      <div className="w-full">
        <iframe
          className="w-full h-[300px]  rounded-lg md:w-full md:h-[300px] lg:w-full lg:h-[500px]"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div>
          {videos.map((video) => {
            return <WatchContainer key={video.id} value={id} info={video} />;
          })}
        </div>
      </div>
      <div className="w-full lg:w-[30%]">
        <ButtonList />
        {/* <ChatsContainer /> */}
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchList;
