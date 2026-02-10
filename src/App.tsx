import { Calendar } from './Components/Calendar/Calendar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Calendar date={new Date('2022-10-03')} />
    </div>
  );
}

export default App;
