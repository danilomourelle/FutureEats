import styled from 'styled-components';

export const Wrapper = styled.div`
  width:calc(100% - 32px);
  height: 102px;
  margin: 0 16px 8px 16px;
  padding:16px;
  border: solid 1px #b8b8b8;
  border-radius: 8px;
  display:flex;
  flex-flow: column wrap;
  justify-content:space-between;
  &:last-of-type{
    margin-bottom:64px;
  }
`;
export const Infos = styled.p`
  margin:0;
  width:100%;
  &:first-child{
    color:#5cb646;
    font-size:16px;
  }
  &:nth-child(2){
    color: #000;
    font-size:12px
  }
  &:last-child{
    color:#000;
    font-size:18px;
    font-weight:bold;
    line-height:normal;
  }
`;
