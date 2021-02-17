import React, { useState, useEffect } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import lightTheme from 'prism-react-renderer/themes/github'
import darkTheme from 'prism-react-renderer/themes/nightOwl'

export default ({ children, className = '' }) => {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
    setIsDark(prefersDark)
  }, [])

  const language = className.replace(/language-/, '') || ''

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={isDark ? darkTheme : lightTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}
