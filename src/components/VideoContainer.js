import { useEffect, useRef, useState } from "react";
import ButtonList from "./ButtonList";
import { YOUTUBE_API } from "../utils/fetchDataApi";
import FeedContainer from "./FeedContainer";
import { Link } from "react-router-dom";
const VideoContainer = () => {
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
    <div className="videocontainerscroll ">
      <div className="">
        <ButtonList />
      </div>
      <div className=" flex justify-center m-[1rem] mb-[4rem] flex-wrap gap-y-[5rem] h-lvh md:flex-row md:gap-0 md:justify-around">
        {videos.map((video) => {
          return (
            <Link to={"/watch/" + video.id}>
              <FeedContainer key={video.id} info={video} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoContainer;
