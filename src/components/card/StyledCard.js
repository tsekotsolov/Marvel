import styled from "styled-components";

const StyledCard = {};

const CardFooter = styled.div`
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
`;

const Paragraph = styled.p`
  color: gray;
  margin: 0;
  font-size: 0.85rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    white-space: wrap;
    overflow: visible;
    cursor: pointer;
  }
`;

const Link = styled.p`
  color: #f44336 !important;
  font-family: Avengeance;
  margin-bottom: 0.1rem;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #f44336;
  }
`;

StyledCard.Footer = CardFooter;
StyledCard.Image = Image;
StyledCard.Paragraph = Paragraph;
StyledCard.Link = Link;

export default StyledCard;
