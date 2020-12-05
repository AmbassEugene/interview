import styled from 'styled-components';

export const AppText = styled.Text`
  font-size: 15px;
  color: ${(props) => (props.color ? props.color : 'black')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const Space = styled.View`
  margin: ${(props) => (props.size ? props.size : `10px`)};
`;

export const AppBtn = styled.TouchableOpacity`
  background-color: orange;
  padding: 15px 25px;
  border-radius: 10px;
  align-items: center;
`;

export const Wrap = styled.View`
  flex: 1;
  align-items: center;
`;
export const FlexBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  width: 100%;
  align-items: center;
`;
