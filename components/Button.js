import styled,{css} from "styled-components";

export const ButtonStyle = css`
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  ${props => props.size === 'l' && css`
  font-size: .8rem;
  padding: 5px 10px;
  svg{
    height: 16px;
    margin-right: 5px;
  }
  `}
  ${props => props.size === 'xl' && css`
  font-size: .9rem;
  padding: 10px 10px;
  svg{
    height: 16px;
    margin-right: 5px;
  }
  `}
  
  ${props => props.block && css`
  display: block;
  width: 100%;
  `}
  ${props => props.primary && !props.outline && css`
  background-color: #ffb11b;
  `}
  ${props => props.primary && props.outline && css`
  background-color: transparent;
  `}
  ${props => props.white && !props.outline && css`
  background-color: #fff;
  border: 1px solid black;
  `}
  ${props => props.white && props.outline && css`
  background-color: transparent;
  border: 1px solid white;
  color: #fff;
  `}
`;

const StyledBtn = styled.button`
  ${ButtonStyle}
`;


export default function Button({ children, ...rest }) {
  return <StyledBtn {...rest}>{children}</StyledBtn>;
}
