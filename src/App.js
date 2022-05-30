import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import ToggleSwitch from './ToggleSwitch';

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const navigate = useNavigate();

  const navToHome = () => {
    navigate('home-page');
  };

  const navToViewTopRated = () => {
    navigate('top-rated-page');
  };

  const navToViewQ = () => {
    navigate('view-q-page');
  };

  return (
    <div style={({backgroundColor: theme.background, color: theme.forground})}>
      <div className='nav-bar' style={({backgroundColor: theme.backgroundNav, color: theme.forground})}>
        <button onClick={() => navToHome()} className="button">Search Movies/Shows</button>
        <button onClick={() => navToViewTopRated()} className="button">View Top Rated</button>
        <button onClick={() => navToViewQ()} className="button">My Queue</button>
        <ToggleSwitch onToggle={toggleTheme}/>
     </div>
      <Outlet />
    </div>
  );
}

export default App;
