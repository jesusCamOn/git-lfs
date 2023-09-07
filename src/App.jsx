import './App.css';
import { Navbar } from './components/Navbar';
import { Route, PATHS, Routes } from './router';
import { Experience, Experience2, Home, QRPage } from './views';

const allowedParams = [
  "d1",
  "d2",
]

const allowedValues = [
  "google_pixel_7",
  "google_pixel_fold",
  "samsung_s23_ultra",
]


function App() {
  return (
    <Routes
      allowedParams={allowedParams}
      allowedValues={allowedValues}
      fallbackComponent={Error}
      QRComponent={QRPage}
    >
      <Route path={PATHS.experience} component={Experience} />
      <Route path={PATHS.experience2} component={Experience2} />
      <Route path={PATHS.home} component={Home} />
      <Navbar />
    </Routes>
  );
}

export default App;
