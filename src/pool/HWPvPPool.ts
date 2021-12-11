import { HWPvPPool__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function hwPvPPool() {
  return HWPvPPool__factory.connect(contract().HWPvPPool, rpcProvider);
}