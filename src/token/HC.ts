import { HC__factory } from 'hashland-core/typechain'
import { getProvider } from '../utils';
import { token } from '../constant';

export function hc() {
  return HC__factory.connect(token().HC, getProvider());
}