export default function Header({ title = 'Dashboard' }) {
  return (
    <header className='header'>
      <div>
        <h1 style={{ margin: 0, fontSize: '1.125rem' }}>{title}</h1>
        <div style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>
          Overview
        </div>
      </div>
      <div>
        {/* simple controls placeholder */}
        <button
          style={{
            padding: '6px 10px',
            borderRadius: '8px',
            border: 'none',
            background: 'var(--color-primary)',
            color: '#042027',
          }}
        >
          New
        </button>
      </div>
    </header>
  );
}
