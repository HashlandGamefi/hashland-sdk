import { ethers } from 'ethers';
import { HNUpgrade__factory } from 'hashland-core/typechain'
import { contract } from '../constant';

const provider = new ethers.providers.Web3Provider((window as any).ethereum);
const signer = provider.getSigner();

export const hnUpgrade = HNUpgrade__factory.connect(contract().HNUpgrade, signer);