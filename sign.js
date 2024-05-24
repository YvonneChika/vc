import * as vc from '@digitalbazaar/vc';

// Required to set up a suite instance with private key
import {Ed25519VerificationKey2018} from
  '@digitalbazaar/ed25519-verification-key-2018';
import {Ed25519Signature2018} from '@digitalbazaar/ed25519-signature-2018';

const keyPair = await Ed25519VerificationKey2018.generate();

const suite = new Ed25519Signature2018({key: keyPair});

console.log(suite)