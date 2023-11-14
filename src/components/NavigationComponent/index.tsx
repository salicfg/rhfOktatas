import './NavigationComponent.module.css';
import { NavLink, Outlet } from 'react-router-dom';

const NavigationComponent = () => {
  return (
    <>
      <nav>
        <h1>React hook form</h1>
        <ul>
          <li>
            <NavLink to="/">Native</NavLink>
          </li>
          <li>
            <NavLink to="/basic">Basic</NavLink>
          </li>
          <li>
            <NavLink to="/componentBasic">Component Basic</NavLink>
          </li>
          <li>
            <NavLink to="/schemaValidation">Schema validation</NavLink>
          </li>
          <li>
            <NavLink to="/fieldArray">Field Array</NavLink>
          </li>
          <li>
            <NavLink to="/formContext">Form Context</NavLink>
          </li>
          <li>
            <NavLink to="/mui">Material UI</NavLink>
          </li>
        </ul>
      </nav>
      <div
        style={{
          margin: '75px auto',
          padding: 10,
          maxWidth: 780,
          minWidth: 780,
          borderRadius: 8,
          backgroundColor: 'white',
        }}>
        <Outlet />
      </div>
    </>
  );
};

export default NavigationComponent;
