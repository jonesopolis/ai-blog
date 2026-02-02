import { Link } from 'react-router-dom';
import Robot from './Robot';
import SEO from './SEO';
import Footer from './Footer';

export default function ErrorPage({
  code = '404',
  title = 'Page Not Found',
  message = "The page you're looking for doesn't exist or has been moved."
}) {
  return (
    <>
      <SEO
        title={`${code} - ${title} | Please Recompile`}
        description={message}
      />
      <main className="error-page">
        <div className="container">
          <div className="error-content">
            <div className="error-background">
              <span className="error-oops">oops</span>
            </div>
            <div className="error-robot">
              <Robot emotion="sad" size={180} />
            </div>
            <div className="error-text">
              <span className="error-code">{code}</span>
              <h1 className="error-title">{title}</h1>
              <p className="error-message">{message}</p>
              <Link to="/" className="btn error-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/>
                  <polyline points="12 19 5 12 12 5"/>
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
