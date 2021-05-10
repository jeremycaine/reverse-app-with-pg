import React, { useState } from 'react';
import useSWR from 'swr';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './Styles';

async function fetcher(url) {
  fetch(url).then(res => res.json());
}

function GetEntries ( { data }) {
  const classes = useStyles();

  //const { rows, error } = useSWR('/api/reverse/get-entries', fetcher, { initialData: entries });
  
  //if (error) return <div>failed to load</div>
  //if (!rows) return <div>loading...</div>

  const { rows } = data;
  console.log('rows', rows);

  var arr = [
    { id: 1, txt: 'hello', isreverse: false },
  { id: 2, txt: 'doog yrev', isreverse: true },
  { id: 3, txt: '', isreverse: false },
];
  
  
  return (
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">Text</TableCell>
          <TableCell align="right">Is Reveresed?</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.txt}</TableCell>
            <TableCell align="right">{row.isreverse}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
  
  }
  

export async function getServerSideProps () {
  const data= await fetcher('/api/reverse/get-entries');
  console.log('ssprops', data);
  return { props: { data } }

    /*
  try {
    const result = await fetch('/api/reverse/get-entries');
    const data = await result.json();

    console.log("data ", data);

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: { data }
    };
  } catch {
      res.statusCode = 404;
    return {
      props: {}
    };
  }*/
};

export default GetEntries;



