import React from 'react';
import Layout from '../components/Layout';

const Popcorn = () => {
  return (
    <Layout>
      <div className='project-page-wrapper'>
        <h1>Popcorn Chill</h1>
        <p>A clean minimalist alternative to IMDB or Rotten Tomatoes.</p>
        <h2>Built With</h2>
        <ul>
          <li>React with Hooks</li>
          <li>React Context for state management</li>
          <li>React Router</li>
          <li>TMDB API (The movie database)</li>
          <li>JavaScript</li>
          <li>CSS</li>
        </ul>
        <div className='project-buttons'>
          <div>
            <a className='styled-link' href='popcornchill.com'>
              Visit Site
            </a>
          </div>

          <div>
            <a
              className='styled-link'
              href='https://github.com/davidgeorgebell/popcornchill.com'>
              View Code
            </a>
          </div>
        </div>
        <div className='project-image-wrapper'>
          <img
            className='project-image'
            src='/popcorn-dark.png'
            alt='popcornchill.com'
          />
        </div>
        <h2>Things I enjoyed whilst building this</h2>
        <ul>
          <li>Using a re usable hook to easily manage data fetching</li>
          <li>Using Reacts Context for state management</li>
          <li>
            Being creative with layouts and styling design inspired by art I
            enjoy
          </li>
        </ul>
        <h2>Description</h2>
        <p>
          I wanted to create a clutter free, clean movie website. A way to find
          a movie to watch quick and easy with good UI but without the clutter
          of other movie review sites. The website is responsive with a dark and
          light theme for users choice.
        </p>
      </div>
    </Layout>
  );
};
export default Popcorn;
