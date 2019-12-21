import React from 'react';

import {
  storiesOf
} from '@storybook/react';
import {
  action
} from '@storybook/addon-actions';
// TODO: switch imports by env
import { ReponsiveLogoNavBar } from '../dist/index.js' //test dist
//import {  ReponsiveLogoNavBar} from '../src/index.js'; // test dev

import {
  Splash
} from '../src/index.js';

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

storiesOf('Splash', module).add('with some basic children', () => {
  return (
    <Splash>
      <h2> Some Splash Page </h2>
      <p> some splash page with children </p>
    </Splash > );
});

storiesOf('Demo Sites', module).add('Nav Bar with Splash Page', () => {
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
        <Splash sectionId = "home" >
          <h2> Some Splash Page #1</h2>
          <p>some splash page with children</p>
        </Splash>
          <Splash sectionId = "about" >
            <h2> Some Splash Page# 2 </h2>
            <p> some splash page with children </p>
          </Splash>
      </>);
      });
