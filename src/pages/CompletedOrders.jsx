import React, { useState, useEffect } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const CompletedOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch completed orders data from localStorage or an API endpoint
    const completedOrders = JSON.parse(localStorage.getItem('completedOrders')) || [];
    setOrders(completedOrders);
  }, []);

  return (
    <Box p="4">
      <Table mt="4">
        <Thead>
          <Tr>
            <Th>Invoice No</Th>
            <Th>Customer ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Invoice Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.invoice_no}</Td>
              <Td>{order.customer_id}</Td>
              <Td>{order.customer_name}</Td>
              <Td>{order.items[0].price}</Td>
              <Td>{order.invoice_date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CompletedOrders;
