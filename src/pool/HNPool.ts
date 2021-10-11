import { ethers } from 'ethers';
import { HNPool__factory } from 'hashland-core/typechain'
import { contract } from '../constant';

const provider = new ethers.providers.Web3Provider((window as any).ethereum);
const signer = provider.getSigner();

export const hnPool = HNPool__factory.connect(contract().HNPool, signer);