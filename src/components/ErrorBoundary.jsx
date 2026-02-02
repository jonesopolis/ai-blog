import { Component } from 'react';
import { useLocation } from 'react-router-dom';
import ErrorPage from './ErrorPage';

class ErrorBoundaryInner extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidUpdate(prevProps) {
    // Reset error state when location changes (user navigates)
    if (this.state.hasError && prevProps.location !== this.props.location) {
      this.setState({ hasError: false, error: null });
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          code="500"
          title="Something Went Wrong"
          message="An unexpected error occurred. Please try refreshing the page."
        />
      );
    }

    return this.props.children;
  }
}

// Wrapper to inject location from React Router
export default function ErrorBoundary({ children }) {
  const location = useLocation();
  return (
    <ErrorBoundaryInner location={location}>
      {children}
    </ErrorBoundaryInner>
  );
}
