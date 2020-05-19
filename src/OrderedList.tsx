import * as React from 'react';
import { OrderedList as OrderedListProps, Theme } from './graphqlTypes';
import Markdown from './Markdown';

const OrderedList = ({ text, order, theme }: OrderedListProps & { theme: Theme; order: number }) => (
  <div
    style={{
      fontSize: theme.fontSize,
      color: theme.textColor,
      marginTop: 0,
      marginBottom: theme.spacing / 2,
      paddingLeft: theme.spacing,
      lineHeight: theme.lineHeight,
    }}
  >
    <table>
      <tbody>
        <tr>
          <td style={{ textAlign: 'right', width: 1, verticalAlign: 'top', paddingRight: theme.spacing / 2 }}>
            {order}.
          </td>
          <td>
            <Markdown text={text} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default OrderedList;
