import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import ChatRoom from './components/ChatRoom/ChatRoom';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Welcome}/>
        <Route path="/chat-room" component={ChatRoom}/>
      </Switch>
    </Router>
  );
}

export default App;
