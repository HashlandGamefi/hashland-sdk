import { HCLPPool__factory } from 'hashland-core/typechain'
import { getProvider } from '../utils';
import { contract } from '../constant';

export function hclpPool() {
  return HCLPPool__factory.connect(contract().HCLPPool, getProvider());
}