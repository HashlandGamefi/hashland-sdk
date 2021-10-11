import { HNPool__factory } from 'hashland-core/typechain'
import { signer, contract } from '../constant';

export const hnPool = HNPool__factory.connect(contract().HNPool, signer);