import { Route, Routes } from 'react-router-dom';

import './App.css';
import NavigationComponent from './components/NavigationComponent';
import Basic from './pages/Basic';
import ComponentWithValidation from './pages/ComponentWithValidation';
import SchemaValidation from "./pages/SchemaValidation";
import FieldArrayPage from "./pages/FieldArrayPage";
import FormContextPage from "./pages/FormContextPage";
import MuiPage from "./pages/MuiPage";
import NativePage from "./pages/NativePage";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<NavigationComponent />}>
          <Route index element={<NativePage />} />
          <Route path={'/basic'} element={<Basic />} />
          <Route path={'componentBasic'} element={<ComponentWithValidation />} />
          <Route path={'schemaValidation'} element={<SchemaValidation />} />
          <Route path={'fieldArray'} element={<FieldArrayPage />} />
          <Route path={'formContext'} element={<FormContextPage />} />
          <Route path={'mui'} element={<MuiPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
