import { ethers } from 'ethers';
import { HNBox__factory } from 'hashland-core/typechain'
import { network, contract } from '../constant';

const provider = new ethers.providers.JsonRpcProvider(network());
const signer = provider.getSigner();

export const hnBox = HNBox__factory.connect(contract().HNBox, signer);