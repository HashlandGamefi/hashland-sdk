import { HNPool__factory } from 'hashland-core/typechain'
import { getProvider, getSigner, contract } from '../constant';

export function hnPool() {
  return HNPool__factory.connect(contract().HNPool, getProvider()).connect(getSigner());
}