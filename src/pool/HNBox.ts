import { ethers } from 'ethers';
import { HNBox__factory } from 'hashland-core/typechain'
import { contract } from '../constant';

const provider = new ethers.providers.Web3Provider((window as any).ethereum);
const signer = provider.getSigner();

export const hnBox = HNBox__factory.connect(contract().HNBox, signer);