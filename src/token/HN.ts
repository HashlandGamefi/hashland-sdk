import { ethers } from 'ethers';
import { abi } from 'hashland-core/artifacts/contracts/token/HN.sol/HN.json'
import { network, token } from '../../constant';

const provider = new ethers.providers.JsonRpcProvider(network());
const signer = provider.getSigner();

const hn = new ethers.Contract(token().HN, abi);
const hnWithSigner = hn.connect(signer);

export const hnContract = {
  level: async function (hnId: number) {
    return await hn.level(hnId);
  },
  transferBatch: async function (to: string, hnIds: number[]) {
    return await hnWithSigner.transferBatch(to, hnIds);
  }
}
