import * as React from 'react';
import { Theme, UnorderedList as UnorderedListProps } from './graphqlTypes';
import Markdown from './Markdown';

export const UnorderedList = ({ text, theme }: UnorderedListProps & { theme: Theme }) => (
  <li
    style={{
      fontSize: theme.fontSize,
      color: theme.textColor,
      marginLeft: theme.spacing + 5,
      marginTop: 0,
      marginBottom: theme.spacing / 2,
      lineHeight: theme.lineHeight,
    }}
  >
    <Markdown text={text} />
  </li>
);

export default UnorderedList;
