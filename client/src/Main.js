import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import DayPage from './pages/DayPage';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<DayPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
