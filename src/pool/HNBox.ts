import { HNBox__factory } from 'hashland-core/typechain'
import { getProvider, getSigner, contract } from '../constant';

export function hnBox() {
  return HNBox__factory.connect(contract().HNBox, getProvider()).connect(getSigner());
}