import React from 'react';
import Header from "./components/Header";
import MainBox from "./components/MainBox";
import Footer from "./components/Footer";
import UserLocalization from "./components/UserLocalization";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
          <Header />
          <MainBox>
              <UserLocalization />
          </MainBox>
          <Footer />
      </>
  );
}

export default App;
