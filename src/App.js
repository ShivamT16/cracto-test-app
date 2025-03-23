import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Notification from './components/Notification';

function App() {
  return (
    <div className="App">
      <Header />
      <Notification />
      <Body />
    </div>
  );
}

export default App;
