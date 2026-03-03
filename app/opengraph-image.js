import { ImageResponse } from 'next/og';

export const alt = 'Proxi — The Operator You Never Had to Hire';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #faf8f5 0%, #f5f0eb 50%, #faf8f5 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              color: '#2a9d8f',
              fontSize: '28px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Proxi
          </div>
          <div
            style={{
              color: '#1a1a1a',
              fontSize: '52px',
              lineHeight: 1.15,
              fontWeight: 800,
              maxWidth: '900px',
            }}
          >
            The Operator You Never Had to Hire
          </div>
          <div
            style={{
              color: '#666666',
              fontSize: '26px',
              lineHeight: 1.5,
              maxWidth: '800px',
            }}
          >
            Your AI personal assistant and workflow operator. One subscription, one operator.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              color: '#2a9d8f',
              fontSize: '22px',
              fontWeight: 600,
            }}
          >
            proxi.my
          </div>
          <div
            style={{
              background: '#e76f51',
              color: '#ffffff',
              fontSize: '20px',
              fontWeight: 600,
              padding: '12px 32px',
              borderRadius: '8px',
            }}
          >
            From RM199/month
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
