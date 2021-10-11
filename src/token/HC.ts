import { HC__factory } from 'hashland-core/typechain'
import { signer, token } from '../constant';

export const hc = HC__factory.connect(token().HC, signer);