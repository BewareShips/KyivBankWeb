import { React, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import StatisticsPage from './pages/StatisticsPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userAuthenticated } from './app/authenticationSlice';
import OperationPage from './pages/OperationPage';

const App = () => {
  const { isLoggedIn } = useSelector(state => state.authenticationSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token !== undefined && token !== null) {
      dispatch(userAuthenticated({ token: token }))
    }
  }, [dispatch]);

  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" render={() => (isLoggedIn ? <HomePage /> : <SignInPage />)} />
      <Route path="/signup" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignUpPage />)} />
      <Route path="/signin" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignInPage />)} />
      <Route path="/statistics" render={() => (isLoggedIn ? <StatisticsPage /> : <SignInPage />)} />

      <Route path="/operation" render={() => (isLoggedIn ? <OperationPage /> : <SignInPage />)} />

      <Route component={() => <h2>Page not found!</h2>} />
    </Switch>
  </BrowserRouter>
};

export default App;
