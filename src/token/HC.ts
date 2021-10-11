import { ethers } from 'ethers';
import { HC__factory } from 'hashland-core/typechain'
import { network, token } from '../constant';

const provider = new ethers.providers.JsonRpcProvider(network());
const signer = provider.getSigner();

export const hc = HC__factory.connect(token().HC, provider);
export const hcWithSigner = hc.connect(signer);