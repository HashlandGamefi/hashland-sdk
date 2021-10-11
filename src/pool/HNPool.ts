import { ethers } from 'ethers';
import { HNPool__factory } from 'hashland-core/typechain'
import { network, contract } from '../constant';

const provider = new ethers.providers.JsonRpcProvider(network());
const signer = provider.getSigner();

export const hnPool = HNPool__factory.connect(contract().HNPool, provider);
export const hnPoolWithSigner = hnPool.connect(signer);