import { SuiGraphQLClient } from "@mysten/sui/graphql";
import { graphql } from "@mysten/sui/graphql/schemas/latest";

const gqlClient = new SuiGraphQLClient({
    url: "https://graphql.testnet.sui.io/graphql",
});

const chainIdentifierQuery = graphql(`
    query {
        chainIdentifier
    }
`);

async function getChainIdentifier() {
    const result = await gqlClient.query({
        query: chainIdentifierQuery,
    });

    return result.data?.chainIdentifier;
}

const getSuinsName = graphql(`
    query getSuiName($address: SuiAddress!) {
        address(address: $address) {
            defaultSuinsName
        }
    }
`);

async function getDefaultSuinsName(address: string) {
    const result = await gqlClient.query({
        query: getSuinsName,
        variables: {
            address,
        },
    });

    return result.data?.address?.defaultSuinsName;
}

// getDefaultSuinsName("0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee").then((x) => console.log(x));

const dynamicFieldQuery = graphql(`
    query DynamicField($address: SuiAddress!) {
        object(address: $address) {
            dynamicField(name: { type: "0x2::kiosk::Lock", bcs: "NLArx1UJguOUYmXgNG8Pv8KbKXLjWtCi6i0Yeq1Vhfw=" }) {
                ...DynamicFieldSelect
            }
        }
    }

    fragment DynamicFieldSelect on DynamicField {
        name {
            ...MoveValueFields
        }
        value {
            ...DynamicFieldValueSelection
        }
    }

    fragment DynamicFieldValueSelection on DynamicFieldValue {
        __typename
        ... on MoveValue {
            ...MoveValueFields
        }
        ... on MoveObject {
            hasPublicTransfer
            contents {
                ...MoveValueFields
            }
        }
    }

    fragment MoveValueFields on MoveValue {
        type {
            repr
        }
        json
        bcs
    }
`);

async function getDynamicField(address: string) {
    const result = await gqlClient.query({
        query: dynamicFieldQuery,
        variables: {
            address,
        },
    });

    return result.data?.object?.dynamicField;
}

// getDynamicField("0xb57fba584a700a5bcb40991e1b2e6bf68b0f3896d767a0da92e69de73de226ac").then((x) => console.log(x));

const dynamicFieldsQuery = graphql(`
    query ($id: SuiAddress!) {
        address(address: $id) {
            dynamicFields {
                nodes {
                    name {
                        ...Value
                    }
                    value {
                        __typename
                        ... on MoveValue {
                            ...Value
                        }
                        ... on MoveObject {
                            contents {
                                ...Value
                            }
                        }
                    }
                }
            }
        }
    }

    fragment Value on MoveValue {
        type {
            repr
        }
        json
    }
`);

async function getDynamicFields(id: string) {
    const result = await gqlClient.query({
        query: dynamicFieldsQuery,
        variables: {
            id,
        },
    });

    return result.data?.address?.dynamicFields;
}

getDynamicFields("0x0285cbf4aa8585be6c978235d11d06fa35773266ede040d38d34e1d79b049460").then((x) => console.dir(x, { depth: null }));
