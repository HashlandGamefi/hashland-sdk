import { HNPool__factory, HNPool } from 'hashland-core/typechain'
import { getProvider, contract } from '../constant';

export function hnPool(): HNPool {
  return HNPool__factory.connect(contract().HNPool, getProvider());
}