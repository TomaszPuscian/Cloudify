import React from 'react';
import './App.css';
import {Header} from "./development_files/Header/Header";
import {MainBox} from "./development_files/MainBox";
import {Footer} from "./development_files/Footer/Footer";
import {UserLocalization} from "./development_files/UserLocalization";
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
