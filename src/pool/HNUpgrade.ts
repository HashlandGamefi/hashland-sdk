import { HNUpgrade__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function hnUpgrade() {
  return HNUpgrade__factory.connect(contract().HNUpgrade, rpcProvider);
}