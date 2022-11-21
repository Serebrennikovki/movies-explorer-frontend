import './App.css';
import { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
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
const [ currentUser, setCurrentUser ] = useState({});
const [ token , setToken ] = useState('');
const [ loggedIn, setLoggedIn ] = useState(false);
const [ pathWhereOpenBM, setPathWhereOpenBM] = useState('');
const history = useHistory();

useEffect(()=>{
  tokenCheck();
},[]);


function openBurgerMenu(path){
  setIsOpenBurgerMenu(true);
  setPathWhereOpenBM(path)
}
function closeBurgerMenu(){
  setIsOpenBurgerMenu(false);
}

function addFilm(film){
  return api.addFilm(film, token)
}

function deleteFilm(id){
  return api.deleteFilm(id, token)
}

function getFilms(){
  const jwt = localStorage.getItem('jwt');
  return api.getFilms(jwt)
    
}

function changeProfile(userInfo){
  return api.changeUserInfo(userInfo, token)
}

function onLogin(valuesForm){
  setErrorTextLogin('');
  api.login(valuesForm.email, valuesForm.password)
  .then(res=>{
    setToken(res.jwt);
    localStorage.setItem('jwt', res.jwt);
    setLoggedIn(true);
    setCurrentUser(res.user);
    getFilmsInitial();
    history.push('/movies');
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
  setErrorTextRegistraion('');
    api.register(valuesForm)
    .then(res=>{
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

function getFilmsInitial(){
  const jwt = localStorage.getItem('jwt');
  return api.getFilms(jwt)
  .then((res)=>{
    localStorage.setItem('savedFilms',JSON.stringify(res));})
  .catch((err)=>{console.log(err)})
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
        setToken(jwt);
        setLoggedIn(true);
        setCurrentUser(data);
        getFilmsInitial();
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
            setCurrentUser={setCurrentUser}
            />
          <Route path='/signin'>
            {loggedIn ? <Redirect to='/'/>:<Login
                                            handleSubmit={onLogin}
                                            errorText = {errorTextLogin}/>}
          </Route>
          <Route path='/signup'>
            {loggedIn ? <Redirect to='/'/>:<Register
                                          handleSubmit={onRegistration}
                                          errorText={errorTextRegistration}/>}
          </Route>
          <Route exact path='/'>
            <Main
            openBM={openBurgerMenu}
            loggedIn={loggedIn}/>
          </Route>     
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
        <BurgerMenu
        path={pathWhereOpenBM}
        isOpened={isOpenBurgerMenu}
        closeBM={closeBurgerMenu}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;