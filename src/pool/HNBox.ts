import { HNBox__factory, HNBox } from 'hashland-core/typechain'
import { getProvider, contract } from '../constant';

export function hnBox(): HNBox {
  return HNBox__factory.connect(contract().HNBox, getProvider());
}