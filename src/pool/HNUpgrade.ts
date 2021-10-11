import { ethers } from 'ethers';
import { HNUpgrade__factory } from 'hashland-core/typechain'
import { network, contract } from '../constant';

const provider = new ethers.providers.JsonRpcProvider(network());
const signer = provider.getSigner();

export const hnUpgrade = HNUpgrade__factory.connect(contract().HNUpgrade, signer);