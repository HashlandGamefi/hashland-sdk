import { HNBox__factory, HNBox } from 'hashland-core/typechain'
import { getProvider } from '../utils';
import { contract } from '../constant';

export function hnBox(): HNBox {
  return HNBox__factory.connect(contract().HNBox, getProvider());
}