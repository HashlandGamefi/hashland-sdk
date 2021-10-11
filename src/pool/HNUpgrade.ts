import { HNUpgrade__factory } from 'hashland-core/typechain'
import { signer, contract } from '../constant';

export const hnUpgrade = HNUpgrade__factory.connect(contract().HNUpgrade, signer);