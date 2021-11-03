import { HNMarket__factory } from 'hashland-core/typechain-types'
import { getProvider } from '../utils';
import { contract } from '../constant';

export function hnMarket() {
  return HNMarket__factory.connect(contract().HNMarket, getProvider());
}