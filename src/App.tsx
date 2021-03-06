/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  appStyle,
  dashboardWrap,
  dashboardSidebar,
  dashboardMain,
} from './App.style';
import { useState, useEffect } from 'react';
import { SearchResults } from './components/Search/SearchResults';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { SendForm } from './components/PrivateMessage/SendForm';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Profile } from './components/Profile/Profile';
import { ErrorPage } from './components/Error/ErrorPage';
import { AuthContext } from './context/AuthContext';
import { DashboardSidebar } from './components/Dashboard/Sidebar/DashboardSidebar';
import { ParticipationsDashboard } from './components/Dashboard/ParticipationsDashboard';
import { Dashboard } from './components/Dashboard/Dashboard';
import { FriendsDashboard } from './components/Dashboard/FriendsDashboard';
import { ListingDashboard } from './components/Dashboard/Listings/ListingDashboard';
import { FavGamesDashboard } from './components/Dashboard/FavGamesDashboard';
import { AdminDashboard } from './components/Dashboard/AdminDashboard';
import { ReportsDashboard } from './components/Dashboard/ReportsDashboard';
import { UserSettingsDashboard } from './components/Dashboard/UserSettings/UserSettingsDashboard';
import { Success } from './components/PrivateMessage/Success';
import { Inbox } from './components/PrivateMessage/Inbox';
import { InboxDashboard } from './components/Dashboard/InboxDashboard';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import ScrollToTop from './components/Misc/ScrollToTop';

export const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingContext, setLoadingContext] = useState(false);

  useEffect(() => {
    setLoadingContext(true);
    axios
      .get('http://localhost:5000/api/users/currentUser', {
        withCredentials: true,
      })
      .then((res) => {
        /**
         * I'm not sure if I even have to set the currentUser here.
         * Also, have to double check if putting the currentUser in the dependency array
         * doesn't break anything.
         */
        setCurrentUser(res.data.currentUser[0]);
        setLoadingContext(false);
        setAuthenticated(true);
        setLoadingContext(false);
      })
      .catch((err) => {
        setLoadingContext(false);
        console.log(err);
      });
  }, [authenticated]);

  if (loadingContext) return <CircularProgress />;
  return (
    <Router>
      <ScrollToTop />
      <AuthContext.Provider
        value={{
          authenticated,
          setAuthenticated,
          currentUser,
          setCurrentUser,
          loadingContext,
          setLoadingContext,
        }}
      >
        <Navbar />
        <div className='App' css={appStyle}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/search' component={SearchResults} />
            <Route path='/about' component={About} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/message' component={SendForm} />
            <Route path='/success' component={Success} />
            <Route path='/success' component={Inbox} />
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
                    <Route path='/dashboard/inbox'>
                      <InboxDashboard />
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
                    <Route path='/dashboard/participations'>
                      <ParticipationsDashboard />
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
