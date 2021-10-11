import { ethers } from 'ethers';
import { HN__factory } from 'hashland-core/typechain'
import { getProvider, getSigner, token } from '../constant';

export function hn() {
  return HN__factory.connect(token().HN, getProvider()).connect(getSigner());
}