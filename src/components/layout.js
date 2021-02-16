import React from 'react'
import { Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Code from './code'
import { Helmet } from 'react-helmet'

const PAGES = ['/blog', '/projects']

const components = {
  pre: props => <div {...props} />,
  code: Code,
}

export default function Layout({ children }) {
  return (
    <main className="min-h-screen font-mono px-5 py-8 dark:bg-gray-900">
      <Helmet>
        <title>ahabhgk's blog</title>
      </Helmet>
      <header className="max-w-prose m-auto">
        <h1 className="mb-2">
          <Link
            to="/"
            className="text-4xl text-gray-900 hover:text-indigo-600 font-bold dark:text-gray-200"
          >
            ahabhgk
          </Link>
        </h1>
        <nav className="mb-6">
          {PAGES.map(page => (
            <Link
              to={page}
              key={page}
              className="mr-10 text-xl text-gray-900 hover:text-indigo-600 font-bold dark:text-gray-200"
            >
              {page}
            </Link>
          ))}
        </nav>
      </header>
      <main className="m-auto prose dark:prose-dark">
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
    </main>
  )
}
