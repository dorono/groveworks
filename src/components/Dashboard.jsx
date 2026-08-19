import { useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMetrics } from '../features/metrics/metricsSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const metrics = useSelector((s) => s.metrics.data);

  useEffect(() => {
    dispatch(fetchMetrics());
  }, [dispatch]);

  return (
    <div className='app-shell'>
      <Sidebar />
      <div className='main'>
        <Header />
        <div className='content container'>
          <section className='metrics-grid'>
            <Card title='Revenue' value={metrics.revenue || '$--'}>
              Compared to last week: +8%
            </Card>
            <Card title='Active Users' value={metrics.activeUsers || '--'}>
              Daily active users
            </Card>
            <Card title='Conversion' value={metrics.conversion || '--'}>
              Monthly conversion
            </Card>
          </section>

          <section>
            <div className='card'>
              This is a larger content area where charts or lists will go.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
