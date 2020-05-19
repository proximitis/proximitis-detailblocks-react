import * as React from 'react';
import { Heading as HeadingProps, Theme } from './graphqlTypes';

const Heading = ({ text, theme }: HeadingProps & { theme: Theme }) => (
  <h2
    style={{
      fontSize: theme.headingFontSize,
      color: theme.headingColor,
      marginTop: 0,
      marginBottom: theme.spacing / 2,
      lineHeight: theme.lineHeight,
    }}
  >
    {text}
  </h2>
);

export default Heading;
