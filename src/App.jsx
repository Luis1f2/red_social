import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Header} from './components/pages/header/header'
import {Feed} from './pages/feed/feed'
import { Profile } from './pages/profile/profile'


function App() {


  return (
    <Router>
      <Header key="header"></Header>
      <Routes>
        <Route exact path="/" element={<Feed key="feed"/>} />
        <Route exact path="/" element={<Profile key="profile"/>} />
      </Routes>
    </Router>
    
  )
}

export default App
