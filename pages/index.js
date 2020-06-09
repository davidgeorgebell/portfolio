import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>David's Portfolio</title>
        <link rel='icon' href='/logo-1.png' />
      </Head>
      <Layout>
        <main>
          <div className='hero'>
            <div className='hero-text'>
              <div className='intro'>
                <h1 className='title'>
                  Hello, i'm David.
                  <br />
                  <span className='job-title'>
                    Front-End <span className='coloured'>Developer</span>.
                  </span>
                </h1>
              </div>
              <p className='description'>
                I enjoy building things in React, JavaScript and CSS.
              </p>
              <p className='description'>Currently available for projects.</p>
              <p className='description'>
                <br />
                <a
                  className='hire-button'
                  href="mailto:davidbell.dev@gmail.com?subject=Hello 👋 I'm want to hire you">
                  Hire me
                </a>
              </p>
            </div>
            {/* <div className='hero-image-wrapper'>
            <img className='hero-image' src='/me-6.jpg' alt='David Bell' />
          </div> */}
          </div>
          <div className='about'>
            <div className='hero-image-wrapper'>
              <img className='hero-image' src='/me-6.jpg' alt='David Bell' />
            </div>
            <div>
              <h2>About me</h2>
              <p>
                I'm a self taught web developer and former Royal Navy Mine
                Clearance Diver.
              </p>
              <p>
                Currently focused on React, JavasScript and CSS for building
                fast reliable websites and apps. Though eager to learn new
                exciting technologies.
              </p>
              <p>
                Through my studies I have acquired a solid grasp of web
                development concepts. My aim is to bring dedication and
                discipline to projects.
              </p>
            </div>
          </div>
          <div>
            <h2 className='projects-title'>Recent projects</h2>
            <div className='projects-wrapper'>
              <div className='project-item'>
                <Link href='/popcorn'>
                  <a>
                    <div className='project-image-wrapper'>
                      <img
                        className='project-image'
                        src='/popcorn-dark.png'
                        alt='popcornchill.com'
                      />
                    </div>
                  </a>
                </Link>
                <h3>Popcorn Chill</h3>
                <p>
                  A clutter free, clean movie website for searching reviews and
                  info on movies.
                </p>
                <Link href='/popcorn'>
                  <a className='styled-link read-more'>read summary</a>
                </Link>
              </div>
              <div className='project-item'>
                <Link href='/bodyweightok'>
                  <a className='styled-link read-more'>
                    <div className='project-image-wrapper'>
                      <img
                        className='project-image'
                        src='/body2.png'
                        alt='bodyweight ok workout website'
                      />
                    </div>
                  </a>
                </Link>
                <h3>Bodyweight Ok</h3>
                <p>Bodyweight workouts for busy people.</p>
                <Link href='/bodyweightok'>
                  <a className='styled-link read-more'>read summary</a>
                </Link>
              </div>
              <div className='project-item'>
                <Link href='/weather'>
                  <a>
                    <div className='project-image-wrapper'>
                      <img
                        className='project-image'
                        src='/weather-light.png'
                        alt='weather app'
                      />
                    </div>
                  </a>
                </Link>
                <h3>Drizzle</h3>
                <p>5 day weather forecast determined by users searched city.</p>
                <Link href='/weather'>
                  <a className='styled-link read-more'>read summary</a>
                </Link>
              </div>

              <div className='project-item'>
                <Link href='/scramble'>
                  <a className='styled-link read-more'>
                    <div className='project-image-wrapper'>
                      <img
                        className='project-image'
                        src='/scramble.png'
                        alt='scramble pad note app'
                      />
                    </div>
                  </a>
                </Link>
                <h3>Scramble Pad</h3>
                <p>Simple offline note taking app.</p>
                <Link href='/scramble'>
                  <a className='styled-link read-more'>read summary</a>
                </Link>
              </div>
            </div>
          </div>
          <h2 className='hire-me-title'>If you would like to work with me</h2>
          <div className='hire-me'>
            <p>
              You can reach out to me if you have any questions, need a website
              or app building for your business.
            </p>
            <p>
              <a
                className='styled-link'
                href="mailto:davidbell.dev@gmail.com?subject=Hello 👋 I'm want to hire you">
                davidbell.dev@gmail.com
              </a>
            </p>
          </div>
        </main>
      </Layout>
    </div>
  );
}
