import './App.css';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main  from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function App() {
const [isOpenBurgerMenu, setIsOpenBurgerMenu] = React.useState(false);
function openBurgerMenu(){
  setIsOpenBurgerMenu(true);
  console.log('openPopup');
}
function closeBurgerMenu(){
  setIsOpenBurgerMenu(false);
  console.log('closePopup');
}


  return (
    <div className="app">
      <Switch>
        <Route path='/signin'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <Register/>
        </Route>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route path='/movies'>
          <Movies
          openBM={openBurgerMenu}
          />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies
          openBM={openBurgerMenu}
          />
        </Route>
        <Route path='/profile'>
          <Profile
          openBM={openBurgerMenu}
          />
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
      <BurgerMenu
      isOpened={isOpenBurgerMenu}
      closeBM={closeBurgerMenu}/>
    </div>
  );
}

export default App;