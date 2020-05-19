import * as React from 'react';
import { Paragraph as ParagraphProps, Theme } from './graphqlTypes';
import Markdown from './Markdown';

const Paragraph = ({ text, theme }: ParagraphProps & { theme: Theme }) => (
  <p
    style={{
      fontSize: theme.fontSize,
      color: theme.textColor,
      marginTop: 0,
      marginBottom: theme.spacing,
      lineHeight: theme.lineHeight,
    }}
  >
    <Markdown text={text} />
  </p>
);

export default Paragraph;
