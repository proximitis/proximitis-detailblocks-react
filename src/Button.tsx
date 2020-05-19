import * as React from 'react';
import { Button as ButtonProps, Theme } from './graphqlTypes';

const Button = ({ link, text, theme }: ButtonProps & { theme: Theme }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: theme.fontSize,
        color: theme.buttonTextColor,
        background: theme.buttonBackground,
        marginBottom: theme.spacing,
        lineHeight: theme.lineHeight,
        fontWeight: 'bold',
        boxShadow: 'none',
        padding: `${theme.spacing * 0.5}px ${theme.spacing * 1.5}px`,
        border: 0,
        borderRadius: 5,
        textDecoration: 'none !important',
      }}
    >
      {text}
    </a>
  </div>
);

export default Button;
