import { HNBox__factory } from 'hashland-core/typechain'
import { signer, contract } from '../constant';

export const hnBox = HNBox__factory.connect(contract().HNBox, signer);