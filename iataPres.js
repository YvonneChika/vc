import * as vc from '@digitalbazaar/vc';



const vc1 = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://schemas.preprod.digitalcredentials.iata.org/contexts/iata_credential.jsonld",
        "https://w3id.org/vc/status-list/2021/v1"
    ],
    "id": "did:web:www.iata.org:credentials:9c3763f4-4430-4f78-b029-e897fec678a6",
    "type": [
      "VerifiableCredential",
      "IATACredential"
    ],
    "issuer": "did:web:www.iata.org",
    "issuanceDate": "2023-09-08T15:27:19.065Z",
    "expirationDate": "2024-09-08T15:27:19.065Z",
    "credentialSchema": {
        "id": "https://schemas.preprod.digitalcredentials.iata.org/iata_credential.json",
        "type": "JsonSchemaValidator2018"
    },
    "credentialStatus": {
        "id": "https://revocation-list-service.p-eu.rapidapi.com/credentials/revocations/1757f4f3-ba7b-4ba8-b5c8-76991222cb42#3388",
        "type": "StatusList2021Entry",
        "statusListIndex": "3388",
        "statusListCredential": "https://revocation-list-service.p-eu.rapidapi.com/credentials/revocations/1757f4f3-ba7b-4ba8-b5c8-76991222cb42"
    },
    "credentialSubject": {
        "id": "did:web:did.dev.udisp8.di-uisp-accenture.com:tenants:agency-iata-1",
        "iata_code": "96546752"
    },
    "proof": {
        "jws": "eyJhbGciOiAiRWREU0EiLCAiYjY0IjogZmFsc2UsICJjcml0IjogWyJiNjQiXX0..3BMDL6HcUjk7efpAWenPuMcljQ7Av7jHsZgte1sw3Si3ScLc9c9qzAV-i-kLq-1mva5fEo1jmL1h2HO7O5XqBA",
        "type": "Ed25519Signature2018",
        "created": "2023-09-08T15:27:38.662823+00:00",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:web:www.iata.org#key-1"
      }
};

const verifiableCredential = vc1; // either array or single object

// optional `id` and `holder`
const id = 'did:web:www.iata.org:credentials:9c3763f4-4430-4f78-b029-e897fec678a6';
const holder = 'did:web:www.iata.org';

const presentation = vc.createPresentation({
  verifiableCredential, id, holder
});

console.log(JSON.stringify(presentation, null, 2));