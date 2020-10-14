import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import GlobalStyles from './styles/GlobalStyles';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      <Footer/>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
