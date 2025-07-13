import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import FullPageContainer from './pages/FullPageContainer';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<FullPageContainer />} />
          {/* <Route path="/night" element={<NightPage />} /> */}
          {/* <Route path="/sunset" element={<DayPage />} /> */}
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
