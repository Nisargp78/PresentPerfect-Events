import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../main";

import LogIn from '../components/Login/Login.jsx';
import Register from '../components/Login/Register.jsx';

import Home from '../Pages/home.jsx';
import HeroSection from '../components/HeroSection/HeroSection.jsx';
import AboutPage from '../Pages/AboutPage.jsx';
import ContactPage from '../Pages/ContactPage.jsx';

import Event from '../Pages/events.jsx';
import EventsForm from '../components/Eventform/Eventsform.jsx';
import Thankyou from '../Pages/thankyou.jsx';

import Services from '../components/Services/Services.jsx';
import Decort from '../Pages/decort.jsx';
import Food from '../Pages/food.jsx';
import Invitation_card from '../Pages/invitation_card.jsx';
import Entertainment from '../Pages/entertainment.jsx';
import Venue from '../Pages/venue.jsx';
import Media from '../Pages/media.jsx';

import Birthday from '../Pages/birthday.jsx';
import Wedding from '../Pages/wedding.jsx';
import Engagement from '../Pages/engagement.jsx';
import Anniversary from '../Pages/anniversary.jsx';
import Baby from '../Pages/babyshower.jsx';
import Housewarming from '../Pages/Housewarming.jsx';
import Corporate from '../Pages/Corporate_Party.jsx';
import Exhibition from '../Pages/Exhibition.jsx';
import MyEvents from '../Pages/MyEvents.jsx';
import AccountSettings from '../Pages/AccountSettings.jsx';

import NotFound from '../components/NotFound/NotFound.jsx';

const Routers = () => {
  const { user, isAuthenticated } = useContext(Context);

  console.log(isAuthenticated, user);
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/my-events' element={<MyEvents />} />
        <Route path='/account-settings' element={<AccountSettings />} />

        <Route path='/home/decort' element={<Decort />} />
        <Route path='/home/food' element={<Food />} />
        <Route path='/home/invitation_card' element={<Invitation_card />} />
        <Route path='/home/entertainment' element={<Entertainment />} />
        <Route path='/home/venue' element={<Venue />} />
        <Route path='/home/media' element={<Media />} />
        
        <Route path='/Herosection' element={<HeroSection />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='/events' element={<Event />} />
        <Route path='/eventform' element={<EventsForm />} />
        <Route path='/thankyou' element={<Thankyou />} />
        <Route path='/events/birthday' element={<Birthday />} />
        <Route path='/events/anniversary' element={<Anniversary />} />
        <Route path='/events/babyshower' element={<Baby />} />
        <Route path='/events/engagement' element={<Engagement />} />
        <Route path='/events/wedding' element={<Wedding />} />
        <Route path='/events/housewarming' element={<Housewarming />} />
        <Route path='/events/corporate' element={<Corporate />} />
        <Route path='/events/exhibition' element={<Exhibition />} />

        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routers
