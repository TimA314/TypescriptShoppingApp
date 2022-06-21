import { useState } from 'react';
import { useQuery } from 'react-query';

import { Drawer, Grid } from '@mui/material';
import LinearProgress from '@mui/material';
import Badge from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { Wrapper } from './App.styles';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}
const getProducts = async (): Promise<CartItemType[]> => 
  await(await fetch('https://fakestoreapi.com/products')).json();

function App() {
  const {data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);
  return (
    <div className="App">
      Start
    </div>
  );
}

export default App;
