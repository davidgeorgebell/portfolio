import React from 'react';

import Layout from '../components/Layout';

const weather = () => {
  return (
    <Layout>
      <div className='project-page-wrapper container'>
        <h1>Drizzle</h1>
        <p>A 5 day weather forecast. User inputs their city.</p>
        <div className='project-buttons'>
          <div>
            <a
              className='styled-link'
              href='https://loving-hoover-a78c9b.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'>
              Visit Site
            </a>
          </div>

          <div>
            <a
              className='styled-link'
              href='https://github.com/davidgeorgebell/weather-app-react'
              target='_blank'
              rel='noopener noreferrer'>
              View Code
            </a>
          </div>
        </div>
        <div className='project-image-wrapper page-image'>
          <img
            className='project-image'
            src='/weather-light.png'
            alt='weather app'
          />
        </div>
        <h2>Built With</h2>
        <ul>
          <li>React with Hooks</li>
          <li>React Context</li>
          <li>Open Weather API</li>
          <li>JavaScript</li>
          <li>CSS</li>
        </ul>
        <h2>What I enjoyed whilst building this</h2>
        <ul>
          <li>Using context to manage state</li>
          <li>Creating a light/dark theme that persists preference for user</li>
          <li>Being creative and building a different style of weather app</li>
        </ul>
        <h2>Description</h2>
        <p>
          User inputs their city which is saved to local storage. Light/Dark
          mode, persists user preference. Design inspired by Vignelli's
          Calender.
        </p>
        <div className='project-image-wrapper page-image'>
          <img
            className='project-image '
            src='/weather-dark.png'
            alt='weather app'
          />
        </div>
      </div>
    </Layout>
  );
};
export default weather;
