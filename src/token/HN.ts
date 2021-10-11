import { HN__factory } from 'hashland-core/typechain'
import { signer, token } from '../constant';

export const hn = HN__factory.connect(token().HN, signer);