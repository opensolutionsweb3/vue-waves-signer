import Signer from '@waves/signer';
import Provider from '@waves.exchange/provider-web';

const VueSigner = {
    install(Vue, options) {
        let signer = null;
        if (!options) {
            options = {
                node: '',
                provider: ''
            }
        }
        let nodeUrl = {
            NODE_URL: options.node ? options.node : 'https://pool.testnet.wavesnodes.com'
        };
        let provider = options.provider ? options.provider : 'https://nodes-testnet.wavesnodes.com';
        if (options.debug) {
            signer = new Signer(nodeUrl);
            signer.setProvider(new Provider(provider));
        } else {
            signer = options.node ? new Signer(nodeUrl) : new Signer();
            signer.setProvider(options.provider ? new Provider(provider) : new Provider());
        }
        Vue.prototype.signer = signer;
    }
};
  
export default VueSigner;