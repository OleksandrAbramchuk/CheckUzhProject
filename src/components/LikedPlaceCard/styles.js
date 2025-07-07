import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 320px;
    height: 370px;
    padding: 20px;
    background: #fff;
    border-radius: 20px;
    box-shadow:
            0 4px 15px rgba(97, 164, 116, 0.3),
            0 1px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-10px);
        box-shadow:
                0 10px 25px rgba(97, 164, 116, 0.45),
                0 4px 15px rgba(0, 0, 0, 0.15);
    }
`;


export const Image = styled.img`
    width: 250px;
    height: 160px;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 10px;
`;

export const Title = styled.h2`
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
    margin-bottom: 8px;
`;

export const RatingContainer = styled.div`
    font-size: 1em;
    color: #444;
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const DetailsButton = styled.button`
    padding: 8px 16px;
    font-size: 1em;
    background-color: #61a474;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #4e8a5c;
    }
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 12px;
  width: 100%;
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  font-size: 1em;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;