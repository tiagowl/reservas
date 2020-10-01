import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
