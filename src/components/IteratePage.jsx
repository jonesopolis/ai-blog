import Footer from './Footer';
import SEO from './SEO';

// Mock post data for demonstration
const mockPost = {
  title: 'building ai agents that actually work',
  publishDate: '2024-01-15',
  tags: [
    { name: 'ai', slug: 'ai' },
    { name: 'agents', slug: 'agents' },
    { name: 'architecture', slug: 'architecture' }
  ]
};

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0].replace(/-/g, '.');
}

export default function IteratePage() {
  return (
    <>
      <SEO
        title="Post Header Iterations | Please Recompile"
        description="Exploring post header tag layouts"
      />
      <div className="container">
        <h1 style={{ marginBottom: '60px', fontSize: '24px', color: 'var(--text-primary)', textTransform: 'lowercase' }}>
          post header variations
        </h1>

        {/* VARIATION 1: Date left, tags right - minimal no border */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            1. minimal - no border
          </h3>
          <div className="iterate-header-v1">
            <h2>{mockPost.title}</h2>
            <div className="meta-row">
              <span className="date">{formatDate(mockPost.publishDate)}</span>
              <div className="tags">
                {mockPost.tags.map((tag) => (
                  <span key={tag.slug} className="tag">{tag.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VARIATION 2: Hashtag style */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            2. hashtag style
          </h3>
          <div className="iterate-header-v2">
            <h2>{mockPost.title}</h2>
            <div className="meta-row">
              <span className="date">{formatDate(mockPost.publishDate)}</span>
              <div className="tags">
                {mockPost.tags.map((tag) => (
                  <span key={tag.slug} className="tag">#{tag.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VARIATION 3: Slash separated */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            3. slash separated
          </h3>
          <div className="iterate-header-v3">
            <h2>{mockPost.title}</h2>
            <div className="meta-row">
              <span className="date">{formatDate(mockPost.publishDate)}</span>
              <div className="tags">
                {mockPost.tags.map((tag, i) => (
                  <span key={tag.slug} className="tag">
                    {i > 0 && <span className="sep">/</span>}
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VARIATION 4: Dot prefix */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            4. dot prefix
          </h3>
          <div className="iterate-header-v4">
            <h2>{mockPost.title}</h2>
            <div className="meta-row">
              <span className="date">{formatDate(mockPost.publishDate)}</span>
              <div className="tags">
                {mockPost.tags.map((tag) => (
                  <span key={tag.slug} className="tag">.{tag.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VARIATION 5: Bracket tags */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            5. bracket tags
          </h3>
          <div className="iterate-header-v5">
            <h2>{mockPost.title}</h2>
            <div className="meta-row">
              <span className="date">{formatDate(mockPost.publishDate)}</span>
              <div className="tags">
                {mockPost.tags.map((tag) => (
                  <span key={tag.slug} className="tag">[{tag.name}]</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VARIATION 6: Pipe with mid-dots */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            6. pipe with mid-dots
          </h3>
          <div className="iterate-header-v6">
            <h2>{mockPost.title}</h2>
            <div className="meta-row">
              <span className="date">{formatDate(mockPost.publishDate)}</span>
              <span className="pipe">|</span>
              <div className="tags">
                {mockPost.tags.map((tag, i) => (
                  <span key={tag.slug} className="tag">
                    {tag.name}
                    {i < mockPost.tags.length - 1 && <span className="dot">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VARIATION 7: Terminal style */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            7. terminal style
          </h3>
          <div className="iterate-header-v7">
            <h2>{mockPost.title}</h2>
            <div className="meta-row">
              <span className="date">{formatDate(mockPost.publishDate)}</span>
              <div className="tags">
                <span className="tag-prefix">--tags</span>
                {mockPost.tags.map((tag, i) => (
                  <span key={tag.slug} className="tag">
                    {tag.name}{i < mockPost.tags.length - 1 && ','}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VARIATION 8: Angle bracket style */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            8. angle brackets
          </h3>
          <div className="iterate-header-v8">
            <h2>{mockPost.title}</h2>
            <div className="meta-row">
              <span className="date">{formatDate(mockPost.publishDate)}</span>
              <div className="tags">
                {mockPost.tags.map((tag) => (
                  <span key={tag.slug} className="tag">&lt;{tag.name}&gt;</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VARIATION 9: Colored accent pills */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            9. accent pills
          </h3>
          <div className="iterate-header-v9">
            <h2>{mockPost.title}</h2>
            <div className="meta-row">
              <span className="date">{formatDate(mockPost.publishDate)}</span>
              <div className="tags">
                {mockPost.tags.map((tag) => (
                  <span key={tag.slug} className="tag">{tag.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VARIATION 10: Underscore prefix */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            10. underscore prefix
          </h3>
          <div className="iterate-header-v10">
            <h2>{mockPost.title}</h2>
            <div className="meta-row">
              <span className="date">{formatDate(mockPost.publishDate)}</span>
              <div className="tags">
                {mockPost.tags.map((tag) => (
                  <span key={tag.slug} className="tag">_{tag.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
