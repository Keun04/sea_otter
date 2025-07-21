import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import FullPageContainer from './pages/FullPageContainer';
import GyRoom from './pages/rooms/GyRoom';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<FullPageContainer />} />
          <Route path="/gydayroom" element={<GyRoom />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
