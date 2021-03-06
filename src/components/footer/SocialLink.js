import React from "react";
import styled from "styled-components";
import Flex from "../shared/Flex";

const SocialLinkWrapper = styled(Flex).attrs({
  as: "a",
  target: "_blank",
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
})`
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const SocialLinkText = styled.p`
  color: #404042;
  margin-left: 0.75rem;
  margin-bottom: 0;
  font-size: 1.1rem;
  font-weight: 900;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = ({ icon, label, href }) => (
  <SocialLinkWrapper href={href}>
    {icon}
    <SocialLinkText>{label}</SocialLinkText>
  </SocialLinkWrapper>
);

export default SocialLink;
