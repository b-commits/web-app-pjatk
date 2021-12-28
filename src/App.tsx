/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  appStyle,
  dashboardWrap,
  dashboardSidebar,
  dashboardMain,
} from './App.style';
import { SearchResults } from './components/Search/SearchResults';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Profile } from './components/Profile/Profile';
import { ErrorPage } from './components/Error/ErrorPage';
import { AuthContext } from './context/AuthContext';
import { useState } from 'react';
import { DashboardSidebar } from './components/Dashboard/Sidebar/DashboardSidebar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { FriendsDashboard } from './components/Dashboard/FriendsDashboard';
import { ListingDashboard } from './components/Dashboard/Listings/ListingDashboard';
import { FavGamesDashboard } from './components/Dashboard/FavGamesDashboard';
import { AdminDashboard } from './components/Dashboard/AdminDashboard';
import { ReportsDashboard } from './components/Dashboard/ReportsDashboard';
import { UserSettingsDashboard } from './components/Dashboard/UserSettings/UserSettingsDashboard';

export const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <AuthContext.Provider
        value={{ authenticated, setAuthenticated, currentUser, setCurrentUser }}
      >
        <Navbar />
        <div className='App' css={appStyle}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/search' component={SearchResults} />
            <Route path='/about' component={About} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard'>
              <div css={dashboardWrap}>
                <div css={dashboardSidebar}>
                  <DashboardSidebar />
                </div>
                <div css={dashboardMain}>
                  <Switch>
                    <Route exact path='/dashboard'>
                      <Dashboard />
                    </Route>
                    <Route path='/dashboard/settings'>
                      <UserSettingsDashboard />
                    </Route>
                    <Route path='/dashboard/listings'>
                      <ListingDashboard />
                    </Route>
                    <Route path='/dashboard/favgames'>
                      <FavGamesDashboard />
                    </Route>
                    <Route path='/dashboard/friends'>
                      <FriendsDashboard />
                    </Route>
                    <Route path='/dashboard/admin'>
                      <AdminDashboard />
                    </Route>
                    <Route path='/dashboard/reports'>
                      <ReportsDashboard />
                    </Route>
                  </Switch>
                </div>
              </div>
            </Route>
            <Route path='/profile/:id' component={Profile} />
            <Route path='*' exact component={ErrorPage} />
          </Switch>
        </div>
        <Footer />
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
