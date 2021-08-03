import { graphql } from 'gatsby';

export const oneOf = (items: string[]): string => new RegExp(`^(${items.join('|')})$`).toString();

export const GhostPageTitles = graphql`
  fragment GhostPageTitles on GhostPageConnection {
    edges {
      node {
        title,
        slug,
        tags {
          slug,
        }
      }
    }
  }
`;

export const GhostPageFields = graphql`
  fragment GhostPageFields on GhostPageConnection {
    edges {
      node {
        title,
        slug,
        feature_image,
        excerpt,
        primary_author {
          name,
        },
        tags {
          slug,
        }
        html,
        meta_description,
        meta_title,
        og_description,
        og_image,
        og_title,
        published_at,
        twitter_description,
        twitter_image,
        twitter_title,
      }
    }
  }
`;

export const GhostPostFields = graphql`
  fragment GhostPostFields on GhostPostConnection {
    edges {
      node {
        title,
        slug,
        feature_image,
        excerpt,
        primary_author {
          name,
        },
        tags {
          slug,
        }
        html,
        meta_description,
        meta_title,
        og_description,
        og_image,
        og_title,
        published_at,
        twitter_description,
        twitter_image,
        twitter_title,
      }
    }
  }
`;
