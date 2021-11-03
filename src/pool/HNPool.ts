import { HNPool__factory } from 'hashland-core/typechain-types'
import { getProvider } from '../utils';
import { contract } from '../constant';

export function hnPool() {
  return HNPool__factory.connect(contract().HNPool, getProvider());
}