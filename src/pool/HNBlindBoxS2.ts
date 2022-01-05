import { HNBlindBoxS2__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function hnBlindBoxS2() {
  return HNBlindBoxS2__factory.connect(contract().HNBlindBoxS2, rpcProvider);
}