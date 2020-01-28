import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// TODO: switch imports by env
//import { ReponsiveLogoNavBar, HeroSection } from '../dist/index.js' //test dist
import {
  ReponsiveLogoNavBar,
  HeroSection,
  SlantedSections,
  CallToAction,
  BasicSitemapFooter,
  CurvedSection,
  FixedNavWrapper,
  BasicSocialBar
}  from '../src/index.js'; // test dev
//import  { ReponsiveLogoNavBar, HeroSection } from '../webpack/index.js' //webpack dist

storiesOf('Navigation', module)
  .add('ReponsiveLogoNavBar', () => {
    let links = [{
      'title': 'home',
      'link': '#home'
    }];
    return <ReponsiveLogoNavBar links = {
      links
    }
    />;
  });

storiesOf('Sections', module)
  .add('Curved Link', () => {
    return(
      <CurvedSection
        sectionId="home"
        header={
          <h1 className="header-text"> Curved Header </h1>
        }
        slant="right">
          <h2> Test </h2>
          <p> Some test content </p>
      </CurvedSection>
    )
  })
  .add('Hero Section', () => {
    return(
      <HeroSection>
        <h2> Some Hero Page </h2>
        <p> some Hero page with children </p>
      </HeroSection >
    );
  })
  .add('Left Slanted Sections', () => {
    return(
      <SlantedSections sectionId="home" header={ <h1 className="header-text"> Slanted Header </h1> }>
      <h2> Test </h2>
      <p> Some test content </p>
    </SlantedSections>
    );
  })
  .add('Right Slanted Sections', () => {
    return(
        <SlantedSections
          sectionId="home"
          header={
            <h1 className="header-text"> Slanted Header </h1>
          }
          slant="right">
            <h2> Test </h2>
            <p> Some test content </p>
        </SlantedSections>
    );
  })
  .add('Hero Call to Action', () => {
    return(
        <CallToAction buttonText="Sign Up!" heroImage="http://jerrycahill.com/wp-content/uploads/2018/05/Hero.jpg">
          <h2> Test </h2>
          <p> Some test content </p>
        </CallToAction>
    );
  });


storiesOf('Footer', module).add('Footer', () => {
  let sitemapObj =
    [
      {
        title: "test",
        url: "/#"
      }
    ];
  return(
      <BasicSitemapFooter sitemap={ sitemapObj } />
  );
});

storiesOf('SocialBars', module).add('BasicSocialBar', ()=> {
  let links =
    [
      {
        title: "facebook",
        url: "https://facebook.com"
      },
      {
        title: "twitter",
        url: "https://twitter.com"
      },
      {
        title: "instagram",
        url: "https://instagram.com"
      },
      {
        title: "tumblr",
        url: "https://tumblr.com"
      }
    ];

  return(
    <BasicSocialBar links={ links }/>
  );
});

storiesOf('Demo Sites', module)
.add('Fixed Nav Bar', () => {
  let links = [{
    'title': 'HOME',
    'link': '#home'
  }, {
    'title': 'ABOUT',
    'link': '#about'
  }];
  return(
    <>
      <ReponsiveLogoNavBar links={ links }/>
      <FixedNavWrapper>
        <h2> Test </h2>
        <p> Test </p>
      </FixedNavWrapper>
    </>
  )
})
.add('Nav Bar with HeroSection Page', () => {
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
          <FixedNavWrapper>
          <CallToAction buttonText="Sign Up!" heroImage="http://jerrycahill.com/wp-content/uploads/2018/05/Hero.jpg">
            <h2> Test </h2>
            <p> Some test content </p>
          </CallToAction>
          <HeroSection sectionId = "home" >
            <h2> Some Splash Page #1</h2>
            <p>some splash page with children</p>
          </HeroSection>
            <HeroSection sectionId = "about" >
              <h2> Some Splash Page# 2 </h2>
              <p> some splash page with children </p>
            </HeroSection>
            <CurvedSection
              sectionId="home"
              header={
                <h1 className="header-text"> Curved Header </h1>
              }
              slant="right">
                <h2> Test </h2>
                <p> Some test content </p>
            </CurvedSection>
          </FixedNavWrapper>
      </>);
      });
