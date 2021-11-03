import { ERC20__factory } from 'hashland-core/typechain-types'
import { getProvider } from '../utils';

export function erc20(tokenAddr: string) {
  return ERC20__factory.connect(tokenAddr, getProvider());
}