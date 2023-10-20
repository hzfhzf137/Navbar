import react from 'react';
import './App.css';
import BootstrapNavbar from './components/navbar'; /* importing navbar */

function App() {
  return (
    <react.Fragment>        {/* using react fragment as a wrapper */}
      <BootstrapNavbar />  {/* rendering navbar */}
    </react.Fragment>
  );
}

export default App;
