// import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home'
// import Dashboard from './Dashboard/Dashboard'
import Forms from '../Components/Form/Form'
import { auth } from '../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Dashboard from './Dashboard/Dashboard'
import NotFound from './NotFound/NotFound'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user] = useAuthState(auth)
  return user ? <Component /> : <Navigate to="/ccd2022" replace />
}

export default function Navigation() {
  return (
    // <Home />
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/ccd2022" element={<Home />} />
        <Route path="/ccd2022/rsvp" element={<PrivateRoute component={Forms} />} />
        <Route
          path="/ccd2022/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
      </Routes>
    </Router>
  )
}
