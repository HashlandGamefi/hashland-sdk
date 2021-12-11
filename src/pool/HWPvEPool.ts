import { HWPvEPool__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function hwPvEPool() {
  return HWPvEPool__factory.connect(contract().HWPvEPool, rpcProvider);
}