import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>David's Portfolio</title>
        <link rel='icon' href='/logo-1.png' />
      </Head>
      <header>
        <div>
          <img className='footer-logo' src='/logo-1.svg' alt='logo' />
        </div>
      </header>
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
              Currently focused on React, JavasScript and CSS for building fast
              reliable websites and apps. Though eager to learn new exciting
              technologies.
            </p>
            <p>
              Through my studies I have acquired a solid grasp of web
              development concepts. My aim is to bring dedication and discipline
              to projects.
            </p>
          </div>
        </div>
        <div>
          <h2 className='projects-title'>Recent projects</h2>
          <div className='projects-wrapper'>
            <div className='project-item'>
              <a href='#'>
                <div className='project-image-wrapper'>
                  <img
                    className='project-image'
                    src='/popcorn-dark.png'
                    alt='popcornchill.com'
                  />
                </div>
              </a>
              <h3>Popcorn Chill</h3>
              <p>
                A clutter free, clean movie website for searching reviews and
                info on movies.
              </p>
              <a className='styled-link read-more' href='#'>
                read summary
              </a>
            </div>
            <div className='project-item'>
              <a href='#'>
                <div className='project-image-wrapper'>
                  <img
                    className='project-image'
                    src='/weather-light.png'
                    alt='weather app'
                  />
                </div>
              </a>
              <h3>Drizzle</h3>
              <p>5 day weather forecast determined by users searched city.</p>
              <a className='styled-link read-more' href='#'>
                read summary
              </a>
            </div>
            <div className='project-item'>
              <a className='styled-link read-more' href='#'>
                <div className='project-image-wrapper'>
                  <img
                    className='project-image'
                    src='/scramble.png'
                    alt='scramble pad note app'
                  />
                </div>
              </a>
              <h3>Scramble Pad</h3>
              <p>Simple offline note taking app.</p>
              <a className='styled-link read-more' href='#'>
                read summary
              </a>
            </div>
          </div>
          {/* <div className='project-item'>
            <a className='styled-link read-more' href='#'>
              <div className='project-image-wrapper'>
                <img
                  className='project-image'
                  src='/scramble.png'
                  alt='scramble pad note app'
                />
              </div>
            </a>
            <h3>More about me</h3>
            <a className='styled-link read-more' href='#'>
              more about me
            </a>
          </div> */}
        </div>
        <h2 className='hire-me-title'>If you would like to work with me</h2>
        <div className='hire-me'>
          <p>
            You can reach out to me if you would like a developer for apps,
            websites or have a question.
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
      <footer>
        <div className='footer-wrapper'>
          <div>
            <img className='footer-logo' src='/logo-1.svg' alt='logo' />
          </div>
          <div className='footer-links'>
            <a
              className='styled-link'
              href='https://github.com/davidgeorgebell'>
              Github
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
