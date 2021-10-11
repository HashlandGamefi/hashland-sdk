import { HN__factory, HN } from 'hashland-core/typechain'
import { getProvider, token } from '../constant';

export function hn(): HN {
  return HN__factory.connect(token().HN, getProvider());
}