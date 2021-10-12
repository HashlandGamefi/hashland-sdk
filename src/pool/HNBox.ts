import { HNBox__factory } from 'hashland-core/typechain'
import { getProvider } from '../utils';
import { contract } from '../constant';

export function hnBox() {
  return HNBox__factory.connect(contract().HNBox, getProvider());
}