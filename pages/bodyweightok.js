import React from 'react';
import Layout from '../components/Layout';

const bodyweightok = () => {
  return (
    <Layout>
      <div className='project-page-wrapper container'>
        <h1>BodyweightOk</h1>
        <p>Bodyweight workouts for busy people.</p>
        <div className='project-buttons'>
          <div>
            <a
              className='styled-link'
              href='https://bodyweightok.now.sh/'
              target='_blank'
              rel='noopener noreferrer'>
              Visit Site
            </a>
          </div>

          <div>
            <a
              className='styled-link'
              href='https://github.com/davidgeorgebell/bodyweightok-nextjs-react-airtable'
              target='_blank'
              rel='noopener noreferrer'>
              View Code
            </a>
          </div>
        </div>
        <div className='project-image-wrapper page-image'>
          <img
            className='project-image'
            src='/body1.png'
            alt='bodyweightok app'
          />
        </div>
        <h2>Built With</h2>
        <ul>
          <li>Nextjs</li>
          <li>React</li>
          <li>Airtable</li>
          <li>CSS</li>
        </ul>
        <div className='project-image-wrapper page-image'>
          <img
            className='project-image'
            src='/body2.png'
            alt='bodyweightok app'
          />
        </div>
        <h2>What I enjoyed whilst building this</h2>
        <ul>
          <li>
            Learning how to use Airtable for a simple database anyone can
            update.
          </li>
          <li>Using Nextjs</li>
        </ul>
        <h2>Description</h2>
        <p>
          Bodyweight workouts allowing users to filter through collection. Pages
          are statically generated using Nextjs(React). I used Airtable as a
          database as it's simple and easy to use.
        </p>
      </div>
    </Layout>
  );
};
export default bodyweightok;
