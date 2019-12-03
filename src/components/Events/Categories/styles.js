import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div``;

export const CategoryList = styled.ul`
  display: flex;
`;

// export const Category = styled.li`
//   display: flex;
//   padding: 4px 16px;
//   justify-content: center;
//   color: #fff;
//   background: ${props => props.color};
//   border-radius: 4px;
//   margin-right: 8px;
// `;

export const Category = styled.li`
  color: ${props => props.color};
  font-size: 13px;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 8px;
`;
