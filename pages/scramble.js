import React from 'react';
import Layout from '../components/Layout';

const scramble = () => {
  return (
    <Layout>
      <div className='project-page-wrapper container'>
        <h1>Scramble Pad</h1>
        <p>A simple online notepad for quick easy notes. Saved locally</p>
        <div className='project-buttons'>
          <div>
            <a
              className='styled-link'
              href='https://admiring-kalam-77b9af.netlify.app/'>
              Visit Site
            </a>
          </div>

          <div>
            <a
              className='styled-link'
              href='https://github.com/davidgeorgebell/scramble-pad'>
              View Code
            </a>
          </div>
        </div>
        <div className='project-image-wrapper page-image'>
          <img
            className='project-image'
            src='/scramble.png'
            alt='scramble app'
          />
        </div>
        <h2>Built With</h2>
        <ul>
          <li>Gatsbyjs</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>CSS</li>
        </ul>
        <h2>What I enjoyed whilst building this</h2>
        <ul>
          <li>Building something I will use daily</li>
          <li>Using Gatsbyjs</li>
        </ul>
        <h2>Description</h2>
        <p>
          A clutter free space for getting notes down quickly. Saved to local
          storage. Virtual notepad for scribbling things down.
        </p>
      </div>
    </Layout>
  );
};
export default scramble;
