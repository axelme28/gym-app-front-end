import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import '../../styles/navbar.css';

const optionsSrc = [
  { label: 'Home', icon: <HomeIcon />, route: '/home' },
  { label: 'Workout', icon: <FitnessCenterIcon />, route: '/trainings' },
  { label: 'Profile', icon: <PersonIcon />, route: '/profile' },
];

const MainLayout = React.memo(({ children }) => { // Memoize the component
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('rendering component');
  })


  const handleOptionChange = (route) => {
    if (location.pathname !== route) { // Prevent navigation to the same route
      navigate(route);
    }
  };

  return (
    <div className='app'>
      {
        children
      }
      <div className='nav-container'>
        <div className='navbar'>
          {optionsSrc.map((item) => (
            <div
              key={item.label}
              className={`navbar-item ${location.pathname === item.route ? 'active' : ''}`}
              onClick={() => handleOptionChange(item.route)}
            >
              {item.icon}
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default MainLayout;
