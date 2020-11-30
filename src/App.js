import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import ChatRoom from '../src/components/ChatRoom/ChatRoom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={ChatRoom}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
