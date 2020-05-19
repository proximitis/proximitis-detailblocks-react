import { DetailBlock } from './graphqlTypes';

const calculateBlockNumer = ({
  detailBlocks,
  currentDetailBlock,
  currentIndexDetailBlock,
}: {
  detailBlocks: DetailBlock[];
  currentDetailBlock: DetailBlock;
  currentIndexDetailBlock: number;
}): number => {
  let order = 0;

  var i = currentIndexDetailBlock;
  while (i > 0) {
    if (detailBlocks[i].__typename === currentDetailBlock.__typename) {
      order++;
      i--;
    } else {
      break;
    }
  }

  return order;
};

export default calculateBlockNumer;
