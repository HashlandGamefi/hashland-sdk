import { HCLPPool__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function hclpPool() {
  return HCLPPool__factory.connect(contract().HCLPPool, rpcProvider);
}