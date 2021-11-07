import { HNBox__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function hnBox() {
  return HNBox__factory.connect(contract().HNBox, rpcProvider);
}