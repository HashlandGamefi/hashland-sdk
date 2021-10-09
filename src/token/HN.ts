import { ethers } from 'ethers';
import { abi } from 'hashland-core/artifacts/contracts/token/HN.sol/HN.json'
import { network, token } from '../../constant';

const provider = new ethers.providers.JsonRpcProvider(network.testnet);
const signer = provider.getSigner();

const hn = new ethers.Contract(token.HN, abi);
const hnWithSigner = hn.connect(signer);

export async function level(hnId: number) {
  return await hn.level(hnId);
}

export async function transferBatch(to: string, hnIds: number[]) {
  return await hnWithSigner.transferBatch(to, hnIds);
}