# Gatsby UI Components

Gatsby UI components for reusing in many themes and sites.
Based around Gatsby specifically rather than React.
Uses Gatsby library instead of react. For example `Link` in the nav bar uses Gatsby's `Link`.
I am not a fan of CSS-in-JS at the moment so I just have the CSS in the `dist` folder until I learn a bit more about it.

# Components:

  * Navigation Bars
  * Splash pages
  * Footers
  * Social Media Bars

# Development

  Storybook is installed. Just run `npm run storybook`.
  Webpack is for the HTML dev server but I prefer to use storybook.
  Build `dist` package with `npm build`, test by importing from `dist` rather than `src` in `stories`.

# Contribute

 Feel free to make a pull request into the Github if there's better practices and methods to some of the components I have made.
