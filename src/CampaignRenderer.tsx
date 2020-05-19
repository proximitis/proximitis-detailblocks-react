import * as React from 'react';
import Button from './Button';
import calculateBlockNumber from './calculateBlockNumber';
import { DetailBlock, Theme } from './graphqlTypes';
import Heading from './Heading';
import Image from './Image';
import OrderedList from './OrderedList';
import Paragraph from './Paragraph';
import Title from './Title';
import UnorderedList from './UnorderedList';

const CampaignRenderer = ({ detailBlocks, theme }: { detailBlocks: DetailBlock[]; theme: Theme }) => (
  <div style={{ background: theme.backgroundColor, padding: theme.spacing, boxSizing: 'border-box' }}>
    {detailBlocks.map((detailBlock, index) => {
      const order = calculateBlockNumber({
        detailBlocks,
        currentDetailBlock: detailBlock,
        currentIndexDetailBlock: index,
      });

      switch (detailBlock.__typename) {
        case 'Title':
          return <Title {...detailBlock} theme={theme} key={detailBlock.id} />;
        case 'Paragraph':
          return <Paragraph {...detailBlock} theme={theme} key={detailBlock.id} />;
        case 'Heading':
          return <Heading {...detailBlock} theme={theme} key={detailBlock.id} />;
        case 'Image':
          return <Image {...detailBlock} theme={theme} key={detailBlock.id} index={index} />;
        case 'Button':
          return <Button {...detailBlock} theme={theme} key={detailBlock.id} />;
        case 'OrderedList':
          return <OrderedList {...detailBlock} theme={theme} key={detailBlock.id} order={order} />;
        case 'UnorderedList':
          return <UnorderedList {...detailBlock} theme={theme} key={detailBlock.id} />;
        default:
          return null;
      }
    })}
  </div>
);

export default CampaignRenderer;
