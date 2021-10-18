import { InvitePool__factory } from 'hashland-core/typechain'
import { getProvider } from '../utils';
import { contract } from '../constant';

export function invitePool() {
  return InvitePool__factory.connect(contract().InvitePool, getProvider());
}