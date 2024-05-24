// jsonld-signatures has a secure context loader
// by requiring this first you ensure security
// contexts are loaded from jsonld-signatures
// and not an insecure source.
//import * as extendContextLoader from 'jsonld-signatures';
import jsigs from 'jsonld-signatures';
import * as vc from '@digitalbazaar/vc';
import {Ed25519VerificationKey2018} from
  '@digitalbazaar/ed25519-verification-key-2018';
import {Ed25519Signature2018} from '@digitalbazaar/ed25519-signature-2018';
import {secu} from '@'

// @digitalbazaar/vc exports its own secure documentLoader.
const {defaultDocumentLoader} = vc;
// a valid json-ld @context.
const myCustomContext = "https://schemas.preprod.digitalcredentials.iata.org/contexts/iata_credential.jsonld";

const keyPair = await Ed25519VerificationKey2018.generate();

const suite = new Ed25519Signature2018({key: keyPair});

const documentLoader = jsigs.extendContextLoader(async url => {
  if(url === 'did:test:context:foo') {
    return {
      contextUrl: null,
      documentUrl: url,
      document: myCustomContext
    };
  }
  return defaultDocumentLoader(url);
});

const challenge = "12ec21"

const  presentation = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "type": [
    "VerifiablePresentation"
  ],
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        //"https://www.w3.org/2018/credentials/examples/v1"
      ],
      "type": [
        "VerifiableCredential",
        "UniversityDegreeCredential"
      ],
      "id": "http://example.edu/credentials/3732",
      "issuer": "did:example:76e12ec712ebc6f1c221ebfeb1f",
      "issuanceDate": "2019-06-16T18:56:59Z",
      "expirationDate": "2029-06-17T18:56:59Z",
      "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "college": "Test University",
        "degree": {
          "name": "Bachelor of Science and Arts",
          "type": "BachelorDegree"
        }
      },
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2021-11-17T22:20:27Z",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:example:76e12ec712ebc6f1c221ebfeb1f#keys-1",
        "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFZERTQSJ9..JNerzfrK46Mq4XxYZEnY9xOK80xsEaWCLAHuZsFie1-NTJD17wWWENn_DAlA_OwxGF5dhxUJ05P6Dm8lcmF5Cg"
      }
    }
  ],
  "id": "http://example.edu/credentials/3732",
  "holder": "did:ex:12345"
}


// you can now use your custom documentLoader
// with multiple vc methods such as:

const vp = await vc.signPresentation({
  presentation, suite, challenge, documentLoader
});

// // or
// const signedVC = await vc.issue({credential, suite, documentLoader});

console.log(JSON.stringify(vp, null, 2));

// or
//const result = await vc.verifyCredential({credential: signedVC, suite, documentLoader});
