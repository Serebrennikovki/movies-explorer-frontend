import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main  from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import api from '../../utils/MainApi';
import {TEXT_ERRORS} from '../../utils/data';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
const [ errorTextRegistration, setErrorTextRegistraion ] = useState('');
const [ errorTextLogin, setErrorTextLogin ] = useState('');
const [ errorTextProfile, setErrorTextProfile ] = useState('');
const [ currentUser, setCurrentUser ] = useState({});
const [ jwt , setJWT ] = useState('');
const [ loggedIn, setLoggedIn ] = useState(false);
const history = useHistory();

useEffect(()=>{
  tokenCheck();
},[]);

useEffect(()=>{
  setJWT(jwt);
},[jwt]);


function openBurgerMenu(){
  setIsOpenBurgerMenu(true);
  console.log('openPopup');
}
function closeBurgerMenu(){
  setIsOpenBurgerMenu(false);
}

function addFilm(film){
  return api.addFilm(film, jwt)
}

function deleteFilm(id){
  console.log('id =', id);
  return api.deleteFilm(id, jwt)
}

function getFilms(){
  return api.getFilms( jwt)
}

function changeProfile(userInfo){
  api.changeUserInfo(userInfo, jwt)
    .then((newUserInfo) => {
      setCurrentUser(newUserInfo);
    })
    .catch((err)=>{
      console.log('errProfile = ', err);
      if(err === 409){
        setErrorTextProfile(TEXT_ERRORS.profile.incorrectData);
      } else {
        setErrorTextProfile(TEXT_ERRORS.profile.others);
      }
    })
}

function onLogin(valuesForm){
  api.login(valuesForm.email, valuesForm.password)
  .then(res=>{
    setJWT(res.jwt);
    localStorage.setItem('jwt', res.jwt);
    setLoggedIn(true);
    setCurrentUser(res.user);
    history.push('/');
   })
    .catch((err)=>{
      if(err === 400){
        setErrorTextLogin(TEXT_ERRORS.login.incorrectData);
      } else {
        setErrorTextLogin(TEXT_ERRORS.auth.others);
      }
    })
  
}

function onRegistration(valuesForm){
  console.log('onRegistrationValuesForm =',valuesForm);
    api.register(valuesForm)
    .then(res=>{
      console.log('res from API = ', res);
      if(res._id){
        onLogin(valuesForm);
      } else {
        setErrorTextRegistraion(TEXT_ERRORS.auth.others);
      }    
    })
    .catch((err)=>{
      if(err === 409){
        setErrorTextRegistraion(TEXT_ERRORS.auth.userExist);
      } else {
        setErrorTextRegistraion(TEXT_ERRORS.auth.others);
      }
    })
}

function onSignOut(){
  setLoggedIn(false);
  localStorage.clear();
  history.push('/');
}

function tokenCheck(){
  if (localStorage.getItem('jwt')){
  const jwt = localStorage.getItem('jwt');
  api.getUserInfo(jwt)
    .then((data)=>{
      if(data){
        setLoggedIn(true);
        setCurrentUser(data);
        setJWT(jwt);
      } else {
        localStorage.clear();
        history.push('/');
      }
    })
    .catch(()=>{
      localStorage.clear();
      history.push('/');
    })
  } else {
    setLoggedIn(false);
    return;
  }
}

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
        <Switch>
          <Route path='/signin'>
            <Login
              handleSubmit={onLogin}
              errorText = {errorTextLogin}/>
          </Route>
          <Route path='/signup'>
            <Register
            handleSubmit={onRegistration}
            errorText={errorTextRegistration}/>
          </Route>
          <Route exact path='/'>
            <Main
            openBM={openBurgerMenu}
            loggedIn={loggedIn}/>
          </Route>
          <ProtectedRoute path='/movies'
            loggedIn = {loggedIn}
            component={Movies}
            openBM={openBurgerMenu}
            addFilm = {addFilm}
            deleteFilm={deleteFilm}
            /> 
          <ProtectedRoute path='/saved-movies'
            loggedIn = {loggedIn}
            component={SavedMovies}
            getFilms={getFilms}
            openBM={openBurgerMenu}
            deleteSavedFilm={deleteFilm}
            />
          <ProtectedRoute path='/profile'
            loggedIn = {loggedIn}
            component={Profile}
            openBM={openBurgerMenu}
            onChangeProfile={changeProfile}
            onSignOut={onSignOut}
            errorText={errorTextProfile}
            /> 
            
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
        <BurgerMenu
        isOpened={isOpenBurgerMenu}
        closeBM={closeBurgerMenu}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;