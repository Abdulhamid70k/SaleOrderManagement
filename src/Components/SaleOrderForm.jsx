import React, { useEffect, useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import Select from 'react-select';

const SaleOrderForm = ({ isOpen, onClose, onSubmit, defaultValues }) => {
  const { handleSubmit, control, reset, watch } = useForm({
    defaultValues: defaultValues || {
      customer_id: '',
      items: [],
      paid: false,
      invoice_no: '',
      invoice_date: '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Dummy customers data
    const dummyCustomers = [
      {
        id: 11908,
        name: 'Ram',
        color: [182, 73, 99],
        email: 'ram@example.com',
        pincode: 'Mumbai',
        location_name: 'Mumbai, Maharashtra, India',
        type: 'C',
        profile_pic: null,
        gst: ''
      },
      {
        id: 11909,
        name: 'Shyam',
        color: [92, 173, 59],
        email: 'shyam@example.com',
        pincode: 'Delhi',
        location_name: 'Delhi, India',
        type: 'C',
        profile_pic: null,
        gst: ''
      },
      {
        id: 11910,
        name: 'Raj',
        color: [12, 123, 200],
        email: 'raj@example.com',
        pincode: 'Jaipur',
        location_name: 'Jaipur, Rajasthan, India',
        type: 'C',
        profile_pic: null,
        gst: ''
      },
      {
        id: 11911,
        name: 'Gita',
        color: [255, 0, 0],
        email: 'gita@example.com',
        pincode: 'Bangalore',
        location_name: 'Bangalore, Karnataka, India',
        type: 'C',
        profile_pic: null,
        gst: ''
      },
      {
        id: 11912,
        name: 'Sita',
        color: [0, 255, 0],
        email: 'sita@example.com',
        pincode: 'Chennai',
        location_name: 'Chennai, Tamil Nadu, India',
        type: 'C',
        profile_pic: null,
        gst: ''
      }
    ];

    // Dummy products data
    const dummyProducts = [
      {
        id: 209,
        display_id: 8,
        owner: 1079,
        name: 'paneer',
        category: 'Category 1',
        characteristics: 'Characteristics 1',
        features: '',
        brand: 'Brand 1',
        sku: [
          {
            id: 248,
            selling_price: 54,
            max_retail_price: 44,
            amount: 33,
            unit: 'kg',
            quantity_in_inventory: 0,
            product: 209
          },
          // Additional SKU items for Product 1
        ],
        updated_on: '2024-05-24T12:46:41.995873Z',
        adding_date: '2024-05-24T12:46:41.995828Z'
      },
      {
        id: 210,
        display_id: 9,
        owner: 1080,
        name: 'Maida',
        category: 'Category 2',
        characteristics: 'Characteristics 2',
        features: '',
        brand: 'Brand 2',
        sku: [
          {
            id: 249,
            selling_price: 42,
            max_retail_price: 40,
            amount: 30,
            unit: 'kg',
            quantity_in_inventory: 0,
            product: 210
          },
          // Additional SKU items for Product 2
        ],
        updated_on: '2024-05-25T12:46:41.995873Z',
        adding_date: '2024-05-25T12:46:41.995828Z'
      },
      {
        id: 211,
        display_id: 10,
        owner: 1081,
        name: 'wheat Aata',
        category: 'Category 3',
        characteristics: 'Characteristics 3',
        features: '',
        brand: 'Brand 3',
        sku: [
          {
            id: 250,
            selling_price: 36,
            max_retail_price: 32,
            amount: 28,
            unit: 'kg',
            quantity_in_inventory: 0,
            product: 211
          },
          // Additional SKU items for Product 3
        ],
        updated_on: '2024-05-26T12:46:41.995873Z',
        adding_date: '2024-05-26T12:46:41.995828Z'
      },
      {
        id: 212,
        display_id: 11,
        owner: 1082,
        name: 'Rice',
        category: 'Category 4',
        characteristics: 'Characteristics 4',
        features: '',
        brand: 'Brand 4',
        sku: [
          {
            id: 251,
            selling_price: 48,
            max_retail_price: 42,
            amount: 34,
            unit: 'kg',
            quantity_in_inventory: 0,
            product: 212
          },
          // Additional SKU items for Product 4
        ],
        updated_on: '2024-05-27T12:46:41.995873Z',
        adding_date: '2024-05-27T12:46:41.995828Z'
      },
      {
        id: 213,
        display_id: 12,
        owner: 1083,
        name: 'Maggie',
        category: 'Category 5',
        characteristics: 'Characteristics 5',
        features: '',
        brand: 'Brand 5',
        sku: [
          {
            id: 252,
            selling_price: 60,
            max_retail_price: 50,
            amount: 40,
            unit: 'kg',
            quantity_in_inventory: 0,
            product: 213
          },
          // Additional SKU items for Product 5
        ],
        updated_on: '2024-05-28T12:46:41.995873Z',
        adding_date: '2024-05-28T12:46:41.995828Z'
      }
    ];

    // Set customers and products using dummy data
    setCustomers(dummyCustomers);
    setProducts(dummyProducts);
  }, []);

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const selectedProducts = watch('items');

  const customStyles = {
    control: (provided) => ({
      ...provided,
      color: 'black',
    }),
    option: (provided, state) => ({
      ...provided,
      color: 'black',
      backgroundColor: state.isSelected ? 'lightgray' : 'white',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: 'lightgray',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'black',
    }),
    valueContainer: (provided) => ({
      ...provided,
      color: 'black',
    }),
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create/Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Customer</FormLabel>
              <Controller
                name="customer_id"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={customers.map((customer) => ({
                      value: customer.id,
                      label: customer.name,
                    }))}
                    placeholder="Select customer"
                    styles={customStyles}
                    value={customers.find(c => c.id === field.value) ? { value: field.value, label: customers.find(c => c.id === field.value).name } : null}
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption.value);
                    }}
                  />
                )}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Products</FormLabel>
              <Controller
                name="items"
                control={control}
                render={({ field }) => (
                  <Select
                    isMulti
                    options={products.map((product) => ({
                      value: product.sku[0].id,
                      label: `${product.name} -  ₹${product.sku[0].selling_price}`,
                    }))}
                    value={field.value.map((item) => ({
                      value: item.sku_id,
                      label: products.find((p) => p.sku[0].id === item.sku_id)?.name || '',
                    }))}
                    onChange={(selectedOptions) => {
                      field.onChange(
                        selectedOptions.map((option) => ({
                          sku_id: option.value,
                          price: products.find((p) => p.sku[0].id === option.value).sku[0].selling_price,
                          quantity: 1, // default quantity
                        }))
                      );
                    }}
                    styles={customStyles}
                  />
                )}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Invoice No</FormLabel>
              <Controller
                name="invoice_no"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Invoice Date</FormLabel>
              <Controller
                name="invoice_date"
                control={control}
                render={({ field }) => <Input type="date" {...field} />}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Paid</FormLabel>
              <Controller
                name="paid"
                control={control}
                render={({ field }) => (
                  <Checkbox isChecked={field.value} onChange={field.onChange}>
                    Paid
                  </Checkbox>
                )}
              />
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderForm;