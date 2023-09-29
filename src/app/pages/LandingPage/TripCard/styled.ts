import styled from 'styled-components';

export const TripCardDiv = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;

export const StyledCard = styled.div`
  width: 300px;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  overflow: hidden;
`;

export const CardCover = styled.div`
  img {
    width: 100%;
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  border-top: 1px solid #e8e8e8;
`;

export const ActionIcon = styled.div`
  cursor: pointer;
  font-size: 20px;
  &:hover {
    opacity: 0.7;
  }
`;

export const Meta = styled.div`
  padding: 12px 24px;
  display: flex;
  align-items: center;
`;

export const MetaAvatar = styled.div`
  margin-right: 12px;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

export const MetaContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MetaTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const MetaDescription = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
`;
