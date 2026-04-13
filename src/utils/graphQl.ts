import { graphql } from "@mysten/sui/graphql/schema";
import { SuiGraphQLClient } from "@mysten/sui/graphql";

export async function getDynamicObjectFields(graphQlClient: SuiGraphQLClient, parent: string, typeFilter: string = "") {
    // Get only bcs
    // const x = await graphQLClient.listDynamicFields({ parentId: parent, include: { value: true } });

    // Get json
    const x = await graphQlClient.query({
        query: dynamicFieldsQuery,
        variables: {
            id: parent,
        },
    });

    // @ts-ignore
    return (
        x.data?.address?.dynamicFields?.nodes
            // @ts-ignore
            .filter((a) => a.value?.contents && a.value?.contents.type.repr.endsWith(typeFilter))
            .sort((a, b) => Number(a.name?.json) - Number(b.name?.json))
            .map((x_1) => {
                // @ts-ignore
                const json = x_1.value?.contents.json;
                // console.dir(json, { depth: null });
                return json;
            })
    );
}

const dynamicFieldsQuery = graphql(`
    query ($id: SuiAddress!) {
        address(address: $id) {
            dynamicFields {
                nodes {
                    name {
                        ...Value
                    }
                    value {
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

const eventsQuery = graphql(`
    query QueryEvents($type: String, $before: String, $sender: SuiAddress) {
        events(last: 50, before: $before, filter: { type: $type, sender: $sender }) {
            pageInfo {
                hasPreviousPage
                hasNextPage
                startCursor
                endCursor
            }
            edges {
                cursor
            }
            nodes {
                transaction {
                    digest
                }
                transactionModule {
                    name
                    package {
                        digest
                    }
                }
                sender {
                    address
                }
                timestamp
                contents {
                    type {
                        repr
                    }
                    json
                }
            }
        }
    }
`);

export interface Event {
    transaction: {
        digest: string;
    } | null;
    transactionModule: {
        name: string;
        package: {
            digest: string | null;
        } | null;
    } | null;
    sender: {
        address: string;
    } | null;
    timestamp: string | null;
    contents: {
        type: {
            repr: string;
        } | null;
        json: unknown;
    } | null;
}

export async function getEvents(
    graphQlClient: SuiGraphQLClient,
    module: string | null,
    sender: string | null,
    beforeCursor: string | null = null,
    getAll: boolean = true
) {
    var hasPreviousPage = true;

    const events: Event[] = [];

    while (hasPreviousPage) {
        const x = await graphQlClient.query({
            query: eventsQuery,
            variables: {
                type: module,
                before: beforeCursor,
                sender: sender,
            },
        });

        // console.dir(x.data?.events?.nodes, { depth: null })

        events.push(...(x.data?.events?.nodes.reverse() ?? []));

        if (!getAll) {
            break;
        }
        hasPreviousPage = x.data?.events?.pageInfo.hasPreviousPage ?? false;
        beforeCursor = x.data?.events?.pageInfo.startCursor ?? null;
    }

    return events;
}
