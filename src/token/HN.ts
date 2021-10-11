import { ethers } from 'ethers';
import { HN__factory } from 'hashland-core/typechain'
import { network, token } from '../constant';

const provider = new ethers.providers.JsonRpcProvider(network());
const signer = provider.getSigner();

export const hn = HN__factory.connect(token().HN, provider);
export const hnWithSigner = hn.connect(signer);