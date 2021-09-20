import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsBrowser from "./components/SpotsDisplay/SpotsBrowser";
import LandingPage from "./components/LandingPage";
import ProductDetail from "./components/ProductDetails";
import EditSpotForm from "./components/EditSpotForm/EditSpotForm";
import UserProfile from "./components/UserProfile/userProfile";
import EditBookingForm from "./components/EditBookingForm/editBooking";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/spots/:spotId">
            <ProductDetail />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/spots">
            <SpotsBrowser />
          </Route>
          <Route exact path="/spots/:spotId/edit">
            <EditSpotForm />
          </Route>
          <Route exact path="/:userId/profile">
            <UserProfile />
          </Route>
          <Route exact path="/profile/:bookingId/edit">
            <EditBookingForm />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      )}
      <Footer isLoaded={isLoaded} />
    </>
  );
}

export default App;
