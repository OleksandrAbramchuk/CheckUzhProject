import styled from 'styled-components';

export const ContentSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const ImagePlaceholder = styled.div`
    width: 450px;
    height: 650px;
    box-shadow: 1px 15px 8px rgba(0, 0, 0, 0.37);
    background: linear-gradient(181deg, rgba(97, 164, 116, 0.22) 58%, rgb(97, 164, 116) 100%);
`;

export const Description = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: row;
    flex-flow: row wrap;
    align-items: center;
`;

export const PageButton = styled.button`
    min-width: 40px;
    padding: 8px 14px;
    border: none;
    background-color: ${({ active }) => (active ? '#3b7a57' : '#61a474')};
    color: white;
    font-weight: ${({ active }) => (active ? '700' : '500')};
    border-radius: 8px;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
    box-shadow: ${({ active }) => (active ? '0 4px 8px rgba(59, 122, 87, 0.5)' : 'none')};
    transition:
        background-color 0.3s,
        box-shadow 0.3s;

    &:hover {
        background-color: ${({ disabled, active }) => (disabled || active ? null : '#4e8969')};
    }
`;

export const CategoryButtons = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin: 30px auto;
`;

export const CategoryButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #61a474;
    background-color: white;
    color: #61a474;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;

    &.active,
    &:hover {
        background-color: #61a474;
        color: white;
    }
`;
export const MapWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 500px;
    margin: 40px auto;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    background: #f8fdfb;
    padding: 10px;
`;
