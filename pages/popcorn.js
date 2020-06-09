import React from 'react';
import Layout from '../components/Layout';

const Popcorn = () => {
  return (
    <Layout>
      <div className='project-page-wrapper container'>
        <h1>Popcorn Chill</h1>
        <p>A clean minimalist alternative to IMDB or Rotten Tomatoes.</p>
        <div className='project-buttons'>
          <div>
            <a
              className='styled-link'
              href='https://popcornchill.com'
              target='_blank'
              rel='noopener noreferrer'>
              Visit Site
            </a>
          </div>

          <div>
            <a
              className='styled-link'
              href='https://github.com/davidgeorgebell/popcornchill.com'
              target='_blank'
              rel='noopener noreferrer'>
              View Code
            </a>
          </div>
        </div>
        <div className='project-image-wrapper page-image'>
          <img
            className='project-image'
            src='/popcorn-3.png'
            alt='popcornchill.com'
            target='_blank'
            rel='noopener noreferrer'
          />
        </div>
        <h2>Built With</h2>
        <ul>
          <li>React with Hooks</li>
          <li>React Context</li>
          <li>React Router</li>
          <li>TMDB API (The movie database)</li>
          <li>JavaScript</li>
          <li>CSS</li>
        </ul>
        <h2>What I enjoyed whilst building this</h2>
        <ul>
          <li>Creating a light/dark theme that persists preference for user</li>
          <li>Using a re usable hook to easily manage data fetching</li>
          <li>Using Reacts Context for state management</li>
        </ul>
        <div className='project-image-wrapper page-image'>
          <img
            className='project-image'
            src='/popcorn-light.png'
            alt='popcornchill.com'
          />
        </div>
        <h2>Description</h2>
        <p>
          I wanted to create a clutter free, clean movie website. A way to find
          a movie to watch quick and easy with good UI but without the clutter
          of other movie review sites. The website is responsive with a dark and
          light theme for users choice.
        </p>
        <div className='project-image-wrapper page-image'>
          <img
            className='project-image'
            src='/popcorn-1.png'
            alt='popcornchill.com'
          />
        </div>
        <div className='project-image-wrapper page-image'>
          <img
            className='project-image '
            src='/popcorn-2.png'
            alt='popcornchill.com'
          />
        </div>
      </div>
    </Layout>
  );
};
export default Popcorn;
