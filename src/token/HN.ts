import { ethers } from 'ethers';
import { HN__factory } from 'hashland-core/typechain'
import { token } from '../constant';

const provider = new ethers.providers.Web3Provider((window as any).ethereum);
const signer = provider.getSigner();

export const hn = HN__factory.connect(token().HN, signer);