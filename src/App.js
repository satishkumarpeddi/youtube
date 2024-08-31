import { Provider } from "react-redux";
import { Header, Body, SearchBar, VideoContainer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./utils/store";
import WatchList from "./components/WatchList";
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Body />}>
          <Route path="/" element={<VideoContainer />} />
          <Route path="/search/:searchQuery" element={<SearchBar />} />
          <Route path="/watch/:id" element={<WatchList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
