import React, { type ReactNode } from 'react';

export const Grid = ({ children }: { children: ReactNode[] }) => (
  <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '4px' }}>{children}</div>
);

const Row = ({ header, children }: { header?: boolean; children: ReactNode[] }) => (
  <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
    {children.map((element, index) => (
      <div
        key={index}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: index === 0 ? 'flex-end' : 'center',
          alignItems: header ? 'flex-start' : 'center',
          border: index === 0 || header ? '' : '1px solid #e0e0e0',
          textAlign: 'center',
          fontSize: 14,
          color: '#666',
          padding: '8px',
        }}
      >
        {element}
      </div>
    ))}
  </div>
);

Grid.Row = Row;
