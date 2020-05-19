import * as React from 'react';
import { Image as ImageProps, Theme } from './graphqlTypes';

const Image = ({ src, width, theme, index }: ImageProps & { theme: Theme; index: number }) => (
  <div style={{ textAlign: 'center', marginBottom: theme.spacing }}>
    <img
      src={src}
      style={{
        boxSizing: 'border-box',
        width: width === 101 ? `calc(100% + ${theme.spacing * 2}px)` : `${width}%`,
        marginTop: width === 101 && index === 0 ? `-${theme.spacing}px` : undefined,
        marginLeft: width === 101 ? `-${theme.spacing}px` : undefined,
      }}
      alt="Preview"
    />
  </div>
);

export default Image;
