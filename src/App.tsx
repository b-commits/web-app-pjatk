/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  appStyle,
  dashboardWrap,
  dashboardSidebar,
  dashboardSidebarMobile,
  dashboardSidebarTablet,
  dashboardSidebarLaptop,
  dashboardSidebarDesktop,
  dashboardMain,
  dashboardMainMobile,
  dashboardMainTablet,
  dashboardMainLaptop,
  dashboardMainDesktop,
} from './App.style';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { SearchResults } from './components/Search/SearchResults';
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
import { useMediaQuery } from '@material-ui/core';

export const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  //Media queries for RWD
  const mobileMQ = useMediaQuery('(max-width:768px)');
  const tabletMQ = useMediaQuery('(max-width:769px)');
  const laptopMQ = useMediaQuery('(max-width:1024px)');
  const desktopMQ = useMediaQuery('(max-width:1440px)');
  let sidebarCSS = {};
  let dashboardCSS = {};

  // if{} To refactor and clean in upcoming commits
  if (mobileMQ) {
    console.log('Mobile');
    sidebarCSS = dashboardSidebarMobile;
    dashboardCSS = dashboardMainMobile;
    console.log(dashboardCSS);
  } else if (tabletMQ) {
    console.log('Tablet');
    sidebarCSS = dashboardSidebarTablet;
    dashboardCSS = dashboardMainTablet;
    console.log(dashboardCSS);
  } else if (laptopMQ) {
    console.log('Laptop');
    sidebarCSS = dashboardSidebarLaptop;
    dashboardCSS = dashboardMainLaptop;
    console.log(dashboardCSS);
  } else if (desktopMQ) {
    console.log('Desktop');
    sidebarCSS = dashboardSidebarDesktop;
    dashboardCSS = dashboardMainDesktop;
    console.log(dashboardCSS);
  } else {
    sidebarCSS = dashboardSidebar;
    dashboardCSS = dashboardMain;
  }
  return (
    <Router>
      <AuthContext.Provider
        value={{ authenticated, setAuthenticated, currentUser, setCurrentUser }}
      >
        <Navbar />
        <div className="App" css={appStyle}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={SearchResults} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard">
              <div css={dashboardWrap}>
                <div css={sidebarCSS}>
                  <DashboardSidebar />
                </div>
                <div css={dashboardCSS}>
                  <Switch>
                    <Route exact path="/dashboard">
                      <Dashboard />
                    </Route>
                    <Route path="/dashboard/listings">
                      <ListingDashboard />
                    </Route>
                    <Route path="/dashboard/favgames">
                      <FavGamesDashboard />
                    </Route>
                    <Route path="/dashboard/friends">
                      <FriendsDashboard />
                    </Route>
                    <Route path="/dashboard/admin">
                      <AdminDashboard />
                    </Route>
                    <Route path="/dashboard/reports">
                      <ReportsDashboard />
                    </Route>
                  </Switch>
                </div>
              </div>
            </Route>
            <Route path="/profile/:id" component={Profile} />
            <Route path="*" exact component={ErrorPage} />
          </Switch>
        </div>
        <Footer />
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
