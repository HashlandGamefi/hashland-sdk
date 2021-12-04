import { HWDeposit__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function hwDeposit() {
  return HWDeposit__factory.connect(contract().HWDeposit, rpcProvider);
}