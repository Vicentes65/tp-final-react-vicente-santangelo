import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary:', error, info)
  }
  render() {
    if (this.state.hasError) {
      const err = this.state.error
      return (
        <div style={{ padding: '1rem', maxWidth: 900, margin: '0 auto' }}>
          <h2>Ocurrió un error</h2>
          <p><strong>Mensaje:</strong> {err?.message || String(err)}</p>
          {err?.stack && (
            <>
              <h3>Stack</h3>
              <pre style={{ whiteSpace: 'pre-wrap' }}>{err.stack}</pre>
            </>
          )}
        </div>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary