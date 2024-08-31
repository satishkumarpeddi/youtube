import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { YOUTUBE_API } from "../utils/fetchDataApi";
import FeedContainer from "./FeedContainer";
import { Link } from "react-router-dom";
const SearchBar = () => {
  const { searchQuery } = useParams();
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
    <div className="flex m-[1rem] mb-[4rem] w-screen justify-center flex-wrap gap-y-[10rem]  h-[100vh] md:flex-row md:gap-0 md:justify-around">
      {videos.map((video) => {
        return video.snippet.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ? (
          <Link to={"/watch/" + video.id}>
            <FeedContainer key={video.id} info={video} />
          </Link>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default SearchBar;
