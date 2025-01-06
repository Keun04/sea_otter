import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import DayPage from './pages/DayPage';
import NightPage from './pages/NightPage';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<DayPage />} />
          <Route path="/night" element={<NightPage />} />
          {/* <Route path="/sunset" element={<DayPage />} /> */}
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
