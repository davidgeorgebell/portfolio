import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>David's Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className='title'>Hello i'm David</h1>
        <p className='description'>I like to build things.</p>
      </main>
      <footer>
        <a href='https://github.com/davidgeorgebell'>Github</a>
      </footer>
    </div>
  );
}
