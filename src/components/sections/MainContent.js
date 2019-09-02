import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Section() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "grid-pattern.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div
      css={`
        position: absolute;
        top: 0;
        clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
      `}
    >
      <Img
        style={{ maxHeight: 400 }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </div>
  );
}

export default Section;