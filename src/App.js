import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Icons } from './components/Icons';
import Modal from './components/Modal';
import Notification from './components/Notification';
import WatchVideoSection from './components/WatchVideoSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Notification />
      <Body />
      <Icons />
      <WatchVideoSection />
      <div className='Modal'>
       <Modal />
      </div>
    </div>
  );
}

export default App;
