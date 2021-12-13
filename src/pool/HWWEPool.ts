import { HWWEPool__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function hwWEPool() {
  return HWWEPool__factory.connect(contract().HWWEPool, rpcProvider);
}