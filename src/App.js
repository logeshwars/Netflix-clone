import React, { useEffect } from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./App.css";
import Row from "./components/Row";
import Top from "./components/Top";
import list from "./api/apiKey";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { useDataLayerValue } from "./DataLayer";
import PopUp from "./components/PopUp";
import getList from "./api/axios";
import Home from "./components/frontpage/Home";
import Login from "./components/login/Login";

function App() {
  const [{ movie, left, top }, dispatch] = useDataLayerValue();
  useEffect(() => {
    getList.get(list.genre).then((response) => {
      dispatch({ type: "SET_GENRE", genre: response.data.genres });
    });
  }, []);
  return (
    <div className="App">
                  <Router>
                    <Routes>
                      <Route
                      path="/"
                      element={<Home/>}
                      />
                      <Route  
                        path="login"
                        element={<Login/>}
                      />
                      <Route 
                      path="main"
                      element={<>
                       <Top />
                  <Banner list={list.trending} />
                  <div className="body">
                    <Row title="Trending Now" list={list.trending} />
                    <Row title="Top Rated" list={list.topRated} />
                    <Row title="Popular on Netflix" list={list.popular} />
                    <Row title="Tv shows" list={list.tv} />
                    {movie && <PopUp pop={movie} left={left} top={top} />}
                  </div>
                  <Footer />  
                      </>}
                      />
                    </Routes>
                  </Router>
                  </div>
  );
}

export default App;
