import { HNMarket__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function hnMarket() {
  return HNMarket__factory.connect(contract().HNMarket, rpcProvider);
}