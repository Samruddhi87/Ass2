

import * as React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Box,styled, Typography} from '@mui/material'

import { Divider } from '@mui/material';
import Data from './data.json'
console.log(Data)

const Component = styled(Box)`
    width: 400px;
    margin-left: 20px;
    background: #212121;
    display: flex;
    padding: 25px 35px;
   color:#fafafa;
   text-align:left;
  
 
`;


export default function Employee() {
  return (
   
    <Component  >
<Typography >Employee Dummy 
       
        <TableBody>
          {Data.employees.map((row) => (
            
          <>
         
              <TableRow align="left">{row.name}</TableRow> 
              <TableRow align="left">{row.age}</TableRow>
              <TableRow align="left" >{row.salary} </TableRow>
               <hr style={{borderRadius: '5px' }}/>
              
              </>
          ))}
        </TableBody>
        </Typography> 
     
    </Component>
  
  );
}
