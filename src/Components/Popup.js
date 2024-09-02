import styled from "styled-components";

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 10px;
`;

const Popup = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <PopupWrapper>
      <PopupContent>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <CloseButton onClick={onClose}>Close</CloseButton>
      </PopupContent>
    </PopupWrapper>
  );
};

export default Popup;