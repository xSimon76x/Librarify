import React, {useState, useEffect} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import ListIntermedioBlist_BlistItem from '../../components/Book/ListIntermedioBlist_BlistItem';

const queryClient = new QueryClient();

export default function BookList() {
  return <ListIntermedioBlist_BlistItem />;
}
