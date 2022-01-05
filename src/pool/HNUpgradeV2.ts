import { HNUpgradeV2__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function hnUpgradeV2() {
  return HNUpgradeV2__factory.connect(contract().HNUpgradeV2, rpcProvider);
}