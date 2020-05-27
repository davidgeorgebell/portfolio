import React from 'react';
import Layout from '../components/Layout';

const scramble = () => {
  return (
    <Layout>
      <div className='project-page-wrapper'>
        <div className='project-buttons'>
          <div>
            <a
              className='styled-link'
              href="mailto:davidbell.dev@gmail.com?subject=Hello 👋 I'm want to hire you">
              Visit Site
            </a>
          </div>
          <div>
            <a
              className='styled-link'
              href="mailto:davidbell.dev@gmail.com?subject=Hello 👋 I'm want to hire you">
              View Code
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default scramble;
