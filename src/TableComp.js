import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
const dataList = [
  { id: 1, name: 'me', email: 'me@email.com', location: 'oregon' },
  { id: 2, name: 'you', email: 'you@email.com', location: 'florida' },
  { id: 3, name: 'us', email: 'us@email.com', location: 'US' },
];

export default function TableComp() {
  return (
    <Table data={dataList}>
      <Column width={100}>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>
      <Column width={100}>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>
      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column width={100}>
        <HeaderCell>Location</HeaderCell>
        <Cell dataKey="location" />
      </Column>
    </Table>
  );
}
