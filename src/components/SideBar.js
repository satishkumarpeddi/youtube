import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
const SideBar = () => {
  const toggleSideBar = useSelector((store) => store.sideBarToggle.isMenuOpen);
  const toggleSearch = useSelector(
    (store) => store.searchSlice.isSuggestionOpen
  );
  if (toggleSideBar === toggleSearch)
    return (
      <div className="scroll overflow-y-auto h-lvh  w-[30vh] flex flex-col gap-y-[1rem]">
        <div className="border-b">
          <ul className="p-[1rem]">
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscription</li>
          </ul>
        </div>
        <div className="border-b">
          <ul className="p-[1rem]">
            <li>You</li>
            <li>History</li>
          </ul>
        </div>
        <div className="border-b">
          <p className="p-[1rem]">
            Sign in to like videos, comment and subscribe
          </p>
        </div>
        <div className="border-b">
          <ul className="p-[1rem]">
            <h2 className="font-bold">Explore</h2>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Films</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sport</li>
            <li>Courses</li>
            <li>Fashion & beauty</li>
            <li>Podcasts</li>
          </ul>
        </div>
        <div className="border-b">
          <h1 className="font-bold p-[1rem]">More from YouTube</h1>
          <ul className="p-[1rem]">
            <li>YouTube Premium</li>
            <li>YouTube Music</li>
            <li>YouTube Kids</li>
          </ul>
        </div>
        <div className="p-[1rem]">
          <ul>
            <li>Setting</li>
            <li>Report History</li>
            <li>Help</li>
            <li>Send feedback</li>
          </ul>
        </div>
        <div className="m-auto">
          <p>2024 Google LLC</p>
        </div>
      </div>
    );
};

export default SideBar;
