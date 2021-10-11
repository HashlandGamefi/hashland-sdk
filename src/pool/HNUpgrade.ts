import { HNUpgrade__factory } from 'hashland-core/typechain'
import { getProvider, getSigner, contract } from '../constant';

export function hnUpgrade() {
  return HNUpgrade__factory.connect(contract().HNUpgrade, getProvider()).connect(getSigner());
}