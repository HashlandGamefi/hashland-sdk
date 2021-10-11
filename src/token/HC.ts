import { ethers } from 'ethers';
import { HC__factory } from 'hashland-core/typechain'
import { token } from '../constant';

const provider = new ethers.providers.Web3Provider((window as any).ethereum);
const signer = provider.getSigner();

export const hc = HC__factory.connect(token().HC, signer);