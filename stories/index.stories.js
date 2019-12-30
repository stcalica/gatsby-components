import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// TODO: switch imports by env
//import { ReponsiveLogoNavBar, HeroSection } from '../dist/index.js' //test dist
import {  ReponsiveLogoNavBar, HeroSection, SlantedSections, CallToAction } from '../src/index.js'; // test dev
//import  { ReponsiveLogoNavBar, HeroSection } from '../webpack/index.js' //webpack dist

storiesOf('ReponsiveLogoNavBar', module)
  .add('with just home link', () => {
    let links = [{
      'title': 'home',
      'link': '#home'
    }];
    return <ReponsiveLogoNavBar links = {
      links
    }
    />;
  });

storiesOf('HeroSection', module).add('with some basic children', () => {
  return (
    <HeroSection>
      <h2> Some Splash Page </h2>
      <p> some splash page with children </p>
    </HeroSection > );
});

storiesOf('Slanted Sections', module).add('Slanted Section', () => {
  return(
      <SlantedSections sectionId="home" header="A Slanted Section">
        <h2> Test </h2>
        <p> Some test content </p>
      </SlantedSections>
  );
});

storiesOf('Hero Call To Action', module).add('Call To Action', () => {
  return(
      <CallToAction buttonText="Sign Up!" heroImage="http://jerrycahill.com/wp-content/uploads/2018/05/Hero.jpg">
        <h2> Test </h2>
        <p> Some test content </p>
      </CallToAction>
  );
});

storiesOf('Demo Sites', module).add('Nav Bar with HeroSection Page', () => {
      let links = [{
        'title': 'HOME',
        'link': '#home'
      }, {
        'title': 'ABOUT',
        'link': '#about'
      }];
      return (
      <>
        <ReponsiveLogoNavBar links = {
            links
          }/>
        <HeroSection sectionId = "home" >
          <h2> Some Splash Page #1</h2>
          <p>some splash page with children</p>
        </HeroSection>
          <HeroSection sectionId = "about" >
            <h2> Some Splash Page# 2 </h2>
            <p> some splash page with children </p>
          </HeroSection>
      </>);
      });
