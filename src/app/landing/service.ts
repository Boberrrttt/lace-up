import { graphql } from "@/lib/graphql";
import { storefront } from "@/lib/storefront";
import { invariant } from "@esmate/utils";

export async function getCollections() {
  const CollectionsQuery = graphql(`
    query Collections($first: Int!) {
      collections(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            image {
              url
              altText
            }
            products(first: 5) {
              edges {
                node {
                  id
                  title
                  handle
                  priceRange {
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                  featuredImage {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const { data } = await storefront.query(CollectionsQuery, {
    first: 10,
  });

  invariant(data?.collections, "collections are not available");

  return data.collections;
}