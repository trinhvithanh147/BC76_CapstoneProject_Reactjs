import React from 'react'
import SearchService from './components/SearchService'
import RecentlyViewed from './components/RecentlyViewed';
import { Outlet } from 'react-router-dom';
import PopularService from './components/PopularService';
import PremiumFreelance from './components/PremiumFreelance';
import VideoFiverr from './components/VideoFiverr';
import HappenFreelance from './components/HappenFreelance';
import TryFiverr from './components/TryFiverr';
import GuidesGrow from './components/GuidesGrow';
import Fingertips from './components/Fingertips';
import MadeFiverr from './components/MadeFiverr';

const HomePage = () => {
  return (
    <>
      <SearchService />
      <RecentlyViewed/>
      <PopularService/>
      <PremiumFreelance/>
      <VideoFiverr/>
      <HappenFreelance/>
      <TryFiverr/>
      <MadeFiverr/>
      <GuidesGrow/>
      <Fingertips/>
    </>
  );

}

export default HomePage