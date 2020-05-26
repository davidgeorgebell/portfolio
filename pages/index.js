import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>David's Portfolio</title>
        <link rel='icon' href='/logo-1.png' />
      </Head>
      <main>
        <div className='hero'>
          <div className='hero-text'>
            <div className='intro'>
              <h1 className='title'>Hello, i'm David.</h1>
              <p className='job-title'>
                Front-End <span className='coloured'>Developer</span>.
              </p>
            </div>
            <p className='description'>
              I enjoy building things in React, JavaScript and CSS.
            </p>
            <p className='description'>I'm currently available for projects.</p>
            <p className='description'>
              <a
                className='hire-button'
                href="mailto:davidbell.dev@gmail.com?subject=Hello 👋 I'm want to hire you">
                Hire me
              </a>
            </p>
          </div>
          <div className='hero-image-wrapper'>
            <img className='hero-image' src='/me-6.jpg' alt='David Bell' />
          </div>
        </div>
        <div>
          <h2>What I've been working on recently</h2>
        </div>
        <div className='projects'>
          <div className='project-item'>
            <img src='/popcorn-dark.png' alt='popcornchill.com' />
            <h3>Popcorn Chill</h3>
            <p>
              A clutter free, clean movie website for searching reviews and info
              on movies.
            </p>
            <a href='#'>read summary</a>
          </div>

          <div className='project-item'>
            <img src='/weather-light.png' alt='weather app' />
            <h3>Drizzle</h3>
            <p>5 day weather forecast determined by users searched city.</p>
            <a href='#'>read summary</a>
          </div>
          <div className='project-item'>
            <img src='/scramble.png' alt='scramble pad note app' />
            <h3>Scramble Pad</h3>
            <p>Simple offline note taking app.</p>
            <a href='#'>read summary</a>
          </div>
          <h3>More about me</h3>
          <div>IMAGE GOES HERE</div>
          <div></div>
          <h2>Work with me</h2>
          <p>
            You can reach out to me if you would like a developer. Or feel free
            to ask any questions.
          </p>
          <p>
            <a href="mailto:davidbell.dev@gmail.com?subject=Hello 👋 I'm want to hire you">
              davidbell.dev@gmail.com
            </a>
          </p>
        </div>
      </main>
      <footer>
        <a href='https://github.com/davidgeorgebell'>Github</a>
      </footer>
    </div>
  );
}
