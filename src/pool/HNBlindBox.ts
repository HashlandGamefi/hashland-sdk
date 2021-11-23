import { HNBlindBox__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function hnBlindBox() {
  return HNBlindBox__factory.connect(contract().HNBlindBox, rpcProvider);
}