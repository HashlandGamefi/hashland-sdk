import { HC__factory, HC } from 'hashland-core/typechain'
import { getProvider } from '../utils';
import { token } from '../constant';

export function hc(): HC {
  return HC__factory.connect(token().HC, getProvider());
}