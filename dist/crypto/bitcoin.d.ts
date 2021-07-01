import { ICrypto, DerivationMode } from './types';
declare class Bitcoin implements ICrypto {
    network: any;
    DerivationMode: DerivationMode;
    constructor({ network }: {
        network: any;
    });
    getLegacyAddress(xpub: string, account: number, index: number): string;
    getNativeSegWitAddress(xpub: string, account: number, index: number): string;
    getSegWitAddress(xpub: string, account: number, index: number): string;
    getAddress(derivationMode: string, xpub: string, account: number, index: number): string;
    getDerivationMode(address: string): string;
    toOutputScript(address: string): any;
}
export default Bitcoin;
