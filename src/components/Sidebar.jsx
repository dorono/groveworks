export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <div style={{ marginBottom: '24px' }}>
        <strong style={{ fontSize: '1.1rem' }}>Groveworks</strong>
      </div>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '12px', color: 'var(--color-muted)' }}>
            Dashboard
          </li>
          <li style={{ marginBottom: '12px', color: 'var(--color-muted)' }}>
            Reports
          </li>
          <li style={{ marginBottom: '12px', color: 'var(--color-muted)' }}>
            Customers
          </li>
          <li style={{ marginBottom: '12px', color: 'var(--color-muted)' }}>
            Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
}
