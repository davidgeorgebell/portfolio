import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>David's Portfolio</title>
        <link rel='icon' href='/logo-1.png' />
      </Head>
      <main>
        <div className='intro'>
          <h1 className='title'>Hello i'm David</h1>
          <p className='description'>
            I focus on front-end web development and enjoy building things in
            React, JavaScript and CSS.
          </p>
          <p className='description'>I'm currently available for projects.</p>
          <p>
            <a
              className='hire-button'
              href="mailto:davidbell.dev@gmail.com?subject=Hello 👋 I'm want to hire you">
              Hire me
            </a>
          </p>
        </div>
        <h3>What I've been working on recently</h3>
        <div>IMAGE GOES HERE</div>
        <div>IMAGE GOES HERE</div>
        <div>IMAGE GOES HERE</div>
        <h3>More about me</h3>
        <div>IMAGE GOES HERE</div>
        <div>
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
