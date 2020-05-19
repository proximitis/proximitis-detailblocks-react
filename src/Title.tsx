import * as React from 'react';
import { Theme, Title as TitleProps } from './graphqlTypes';

const Title = ({ text, theme }: TitleProps & { theme: Theme }) => (
  <h1
    style={{
      fontSize: theme.titleFontSize,
      color: theme.titleColor,
      textAlign: 'center',
      marginBottom: theme.spacing,
      lineHeight: theme.lineHeight,
    }}
  >
    {text}
  </h1>
);

export default Title;
