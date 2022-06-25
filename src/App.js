import { Contact, Home, Error, About } from './pages';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './layouts/SharedLayout';

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
