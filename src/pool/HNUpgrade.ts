import { HNUpgrade__factory, HNUpgrade } from 'hashland-core/typechain'
import { getProvider } from '../utils';
import { contract } from '../constant';

export function hnUpgrade(): HNUpgrade {
  return HNUpgrade__factory.connect(contract().HNUpgrade, getProvider());
}