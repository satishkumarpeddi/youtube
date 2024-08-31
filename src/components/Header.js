import {
  FaSearch,
  FaBars,
  FaUser,
  FaMicrophone,
  FaUpload,
  FaBell,
  FaArrowLeft,
} from "react-icons/fa";
import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { menuToggle } from "../utils/sideBarSlider";
import { useSelector } from "react-redux";
import { SideBar } from "../components/index";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/fetchDataApi";
import searchSuggestion, { suggestionToggle } from "../utils/searchSuggestion";
import { cacheResults } from "../utils/searchSlice";
const Header = () => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  // const [searchText, setSearchText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionVisible, setSuggestionVisible] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState([]);
  const [inputSuggestions, setInputSuggestions] = useState("");
  const searchCache = useSelector((store) => store.search);
  console.log(searchQuery);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleToggleMenu = () => {
    dispatch(menuToggle());
  };
  const handleSearchToggle = () => {
    dispatch(suggestionToggle());
  };
  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };
  useEffect(() => {
    const timerInterval = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions[searchQuery];
      } else {
        // getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timerInterval);
    };
  }, [searchQuery]);

  // const getSearchSuggestions = async () => {
  //   // const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //   // const json = await data.json();
  //   // setShowSuggestions(json[1]);
  //   dispatch(
  //     cacheResults({
  //       [searchQuery]: json[1],
  //     })
  //   );
  // };
  return (
    <div>
      <main className="sticky flex justify-between  items-center p-[1rem] border-b">
        <div
          className={`flex items-center gap-x-[.5rem] ${
            searchBarVisible ? "hidden" : "md:flex"
          }`}
        >
          {suggestionVisible ? (
            ""
          ) : (
            <FaBars
              onClick={() => handleToggleMenu()}
              className="text-[1.2rem] cursor-pointer"
            />
          )}
          <Link to={"/"}>
            <img className="w-[6rem]" src={LOGO_URL} alt="logo" />
          </Link>
        </div>
        <form
          onSubmit={(e) => e.preventDefault}
          className={`flex justify-between w-[100vh] items-center m-auto md:gap-x-[1rem]    ${
            searchBarVisible ? "flex" : "hidden md:flex"
          }`}
        >
          <div>
            <button className={`${searchBarVisible ? "block" : "hidden"}`}>
              <FaArrowLeft />
            </button>
          </div>
          <div className="relative z-10">
            <div
              className="flex items-center"
              onSubmit={(e) => e.preventDefault}
            >
              {inputSuggestions.length > 0 ? (
                <input
                  className="border outline-none font-bold  md:w-[500px] p-[.4rem] rounded-l-full"
                  type="search"
                  placeholder="Search"
                  // value={searchText}
                  // onChange={(e) => {
                  //   setSearchText(e.target.value);
                  // }}
                  value={inputSuggestions}
                  onChange={(e) => {
                    setInputSuggestions(e.target.value);
                    e.target.value.length > 0
                      ? setSuggestionVisible(true)
                      : setSuggestionVisible(false);
                  }}
                  onSubmit={() => handleSearchToggle()}
                />
              ) : (
                <input
                  className="border outline-none font-bold  md:w-[500px] p-[.4rem] rounded-l-full"
                  type="search"
                  placeholder="Search"
                  // value={searchText}
                  // onChange={(e) => {
                  //   setSearchText(e.target.value);
                  // }}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    e.target.value.length > 0
                      ? setSuggestionVisible(true)
                      : setSuggestionVisible(false);
                  }}
                  onSubmit={() => {
                    handleSearchToggle();
                    setSuggestionVisible(false);
                  }}
                />
              )}
              <FaSearch
                onClick={() => handleSearch()}
                onSubmit={(e) => e.preventDefault}
                className="text-[2.4rem] rounded-r-full p-[.6rem] border border-l-0"
              />
            </div>
            {suggestionVisible && (
              <div className="search  bg-white w-[max-content] h-[150px]  overflow-auto border-gray-200  shadow-lg rounded-lg  md:w-[500px]  overlow-x-hidden">
                <ul className="p-[1rem]">
                  {showSuggestions.map((showSuggestion) => (
                    <li
                      onClick={(e) =>
                        setInputSuggestions(e.currentTarget.innerText)
                      }
                      className="cursor-pointer flex items-center m-[.5rem] gap-x-[.5rem] hover:bg-gray-100"
                      key={showSuggestion}
                    >
                      <FaSearch /> {showSuggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <button
              className={`flex md:hidden ml-auto ${
                searchBarVisible ? "block" : "hidden"
              }`}
            >
              <FaMicrophone className="text-[1.2rem]" />
            </button>
          </div>
          <FaMicrophone className="text-[1.2rem] hidden md:block cursor-pointer" />
        </form>
        <div className="ml-auto mr-[1rem] ">
          <button
            className={`block  md:hidden ${
              searchBarVisible ? "hidden" : "block"
            }`}
            onClick={() => setSearchBarVisible(true)}
          >
            <FaSearch className="text-[1.2rem]" />
          </button>
        </div>
        <div
          className={`flex gap-x-[1rem] items-center ${
            searchBarVisible ? "hidden" : " md:flex"
          }`}
        >
          <FaUpload className="text-[1.2rem] cursor-pointer" />
          <FaBell className="text-[1.2rem] cursor-pointer" />
          <FaUser className="text-[1.2rem] cursor-pointer" />
        </div>
      </main>
    </div>
  );
};

export default Header;
