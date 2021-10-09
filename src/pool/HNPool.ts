import { ethers } from 'ethers';
import { abi } from 'hashland-core/artifacts/contracts/pool/HNPool.sol/HNPool.json'
import { network, contract } from '../constant';

const provider = new ethers.providers.JsonRpcProvider(network());
const signer = provider.getSigner();

const hnPool = new ethers.Contract(contract().HNPool, abi);
const hnPoolWithSigner = hnPool.connect(signer);

export const hnPoolContract = {
  stakes: async function (tokenId: number) {
    return await hnPool.stakes(tokenId);
  },
  deposit: async function (hnIds: number[]) {
    return await hnPoolWithSigner.deposit(hnIds);
  }
}
