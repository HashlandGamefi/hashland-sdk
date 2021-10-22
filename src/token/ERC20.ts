import { HC__factory } from 'hashland-core/typechain'
import { getProvider } from '../utils';

export function erc20(tokenAddr: string) {
  return HC__factory.connect(tokenAddr, getProvider());
}