import { HN__factory } from 'hashland-core/typechain'
import { getProvider } from '../utils';
import { token } from '../constant';

export function hn() {
  return HN__factory.connect(token().HN, getProvider());
}