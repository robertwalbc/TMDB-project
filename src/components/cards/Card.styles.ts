import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  background-color: #fff;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
`;

export const CardReleaseDate = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const CardImage = styled.img`
  max-width: 100%;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;