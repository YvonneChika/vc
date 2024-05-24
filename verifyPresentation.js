import * as vc from '@digitalbazaar/vc';



const vc1 = {
    "@context" : [ "https://www.w3.org/2018/credentials/v1", "https://www.w3.org/2018/credentials/examples/v1" ],
    "type" : [ "VerifiableCredential", "UniversityDegreeCredential" ],
    "id" : "http://example.edu/credentials/3732",
    "issuer" : "did:example:76e12ec712ebc6f1c221ebfeb1f",
    "issuanceDate" : "2019-06-16T18:56:59Z",
    "expirationDate" : "2029-06-17T18:56:59Z",
    "credentialSubject" : {
      "id" : "did:example:ebfeb1f712ebc6f1c276e12ec21",
      "college" : "Test University",
      "degree" : {
        "name" : "Bachelor of Science and Arts",
        "type" : "BachelorDegree"
      }
    },
    "proof" : {
      "type" : "Ed25519Signature2018",
      "created" : "2021-11-17T22:20:27Z",
      "proofPurpose" : "assertionMethod",
      "verificationMethod" : "did:example:76e12ec712ebc6f1c221ebfeb1f#keys-1",
      "jws" : "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFZERTQSJ9..JNerzfrK46Mq4XxYZEnY9xOK80xsEaWCLAHuZsFie1-NTJD17wWWENn_DAlA_OwxGF5dhxUJ05P6Dm8lcmF5Cg"
    }
};

const verifiableCredential = vc1; // either array or single object

// optional `id` and `holder`
const id = 'http://example.edu/credentials/3732';
const holder = 'did:ex:12345';

const presentation = vc.createPresentation({
  verifiableCredential, id, holder
});

console.log(JSON.stringify(presentation, null, 2));