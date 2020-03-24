import React from 'react';
import styled from 'styled-components';

export const CardWrapper = styled.div`  
   border-radius: 20px;
   margin-bottom: 2.5%;
   margin-right: 1.25%;
   margin-left: 1.25%;
   width: 250px;
   background-color: #233748;
`;

export const AppContainer = styled.div`
   text-align: center;
   width: 80%;
   margin: 0 auto;
`;

export const CardContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-top: 5%;
`;

export const NameTag = styled.h2`
   color: #bfc8d4;  
`;

export const StatsWrapper = styled.div`
   background-color: #f7dbba;
   padding-top: 4px;
   padding-bottom: 4px;
   border: 1px solid #443e3e;
   color: #443e3e;
`;
