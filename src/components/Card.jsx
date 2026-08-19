export default function Card({ title, value, children }) {
  return (
    <div className='card'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '8px',
        }}
      >
        <div style={{ color: 'var(--color-muted)' }}>{title}</div>
        <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{value}</div>
      </div>
      {children}
    </div>
  );
}
