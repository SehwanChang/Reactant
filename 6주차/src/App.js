import React, { useState } from "react";
import { Main, MediaDiv } from "./styledComponents";
import { GlobalStyles, darkTheme, lightTheme } from "./styles";
import Header from "./Header";
import Slogan from "./Slogan";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {/* Global Styling */}
        <GlobalStyles />
        <MediaDiv>
          {/* Header */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogan />
            {/* Routes */}
            <Routes>
              <Route path="/" element={<div>메인 페이지</div>}></Route>
              <Route path="/write" element={<div>글 작성 페이지</div>}></Route>
              <Route path="/post:/postID" element={<div>글 상세 페이지</div>}></Route>
            </Routes>
          </Main>
        </MediaDiv>
        {/* Footer */}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
