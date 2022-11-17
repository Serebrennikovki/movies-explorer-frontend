import './Main.css';
import Header  from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main({loggedIn, openBM}) {
  console.log(loggedIn);
  return (
    <div className="main">
        <Header
        loggedIn={loggedIn}
        openBurgerMenu={openBM}
        />
      <main>
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
        <Footer/>
    </div>
  );
}

export default Main;