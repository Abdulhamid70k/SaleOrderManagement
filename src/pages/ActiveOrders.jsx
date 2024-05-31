import React, { useState, useEffect } from 'react';
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import SaleOrderForm from '../Components/SaleOrderForm';

const ActiveOrders = () => {
  // State variables
  const [orders, setOrders] = useState([]); // State for active orders
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [editOrder, setEditOrder] = useState(null); // State to track order being edited
  const [customers, setCustomers] = useState([]); // State for customers data

  // Fetch customers data on component mount
  useEffect(() => {
    // Dummy customers data (replace with actual fetch operation)
    const dummyCustomers = [
      { id: 11908, name: 'Ram' },
      { id: 11909, name: 'Shyam' },
      { id: 11910, name: 'Raj' },
      { id: 11911, name: 'Gita' },
      { id: 11912, name: 'Sita' }
    ];
    setCustomers(dummyCustomers);
  }, []);

  // Function to open modal for adding a new order
  const handleAddOrder = () => {
    setEditOrder(null); // Reset editOrder state
    setIsModalOpen(true); // Open modal
  };

  // Function to open modal for editing an order
  const handleEditOrder = (order) => {
    setEditOrder(order); // Set order to be edited
    setIsModalOpen(true); // Open modal
  };

  // Function to handle form submission from SaleOrderForm
  const handleFormSubmit = (data) => {
    // Find customer based on customer_id from form data
    const customer = customers.find(c => c.id === data.customer_id);
    // Add customer_name to form data
    const orderWithCustomerName = { ...data, customer_name: customer.name };

    // Update orders based on whether it's an edit or addition
    if (editOrder) {
      // If editing, update the specific order
      setOrders(orders.map((order) => (order.id === editOrder.id ? orderWithCustomerName : order)));
    } else {
      // If adding, append the new order to existing orders
      setOrders([...orders, { ...orderWithCustomerName, id: orders.length + 1 }]);
    }
    setIsModalOpen(false); // Close modal
  };

  // Function to mark an order as completed
  const handleMarkAsCompleted = (order) => {
    // Remove the completed order from active orders
    const updatedOrders = orders.filter((o) => o.id !== order.id);
    setOrders(updatedOrders);

    // Store completed orders in localStorage
    const completedOrders = JSON.parse(localStorage.getItem('completedOrders')) || [];
    completedOrders.push(order);
    localStorage.setItem('completedOrders', JSON.stringify(completedOrders));
  };

  // Render component
  return (
    <Box p="4">
      {/* Button to add new order */}
      <Button colorScheme='teal' onClick={handleAddOrder}>Add Sell Product</Button>
      {/* Table to display active orders */}
      <Table mt="4">
        <Thead>
          <Tr>
            <Th>Invoice No</Th>
            <Th>Customer ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* Render each order row */}
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.invoice_no}</Td>
              <Td>{order.customer_id}</Td>
              <Td>{order.customer_name}</Td>
              <Td>{order.items[0].price}</Td>
              <Td>
                {/* Button to edit order */}
                <Button onClick={() => handleEditOrder(order)}>Edit</Button>
                {/* Button to mark order as completed */}
                <Button ml={2} onClick={() => handleMarkAsCompleted(order)}>Mark as Completed</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {/* SaleOrderForm component */}
      <SaleOrderForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        defaultValues={editOrder}
      />
    </Box>
  );
};

export default ActiveOrders;
