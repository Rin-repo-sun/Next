import Link from 'next/link'

export default function Index() {
  return (
    <>
      <h1 className="title">
        Learn <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h1 className="title">
        Read{' '}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
      <div>
        <p>Hello Next! Edit</p>
      </div>
    </>
  );
}