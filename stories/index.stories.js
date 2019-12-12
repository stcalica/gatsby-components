import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// TODO: switch imports by env
//import { ReponsiveLogoNavBar } from '../dist/index.js' //test dist
import { ReponsiveLogoNavBar } from '../src/index.js';  // test dev

storiesOf('ReponsiveLogoNavBar', module)
.add('with just home link', () => {
  let links = [{ 'title': 'home', 'link': '/#home' }];
  return <ReponsiveLogoNavBar links={ links }  />;
});
