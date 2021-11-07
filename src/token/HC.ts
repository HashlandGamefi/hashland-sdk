import { HC__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { token } from '../constant';

export function hc() {
  return HC__factory.connect(token().HC, rpcProvider);
}