import { createContext, useContext } from 'react';

export const CreateContext = createContext(null);

export const useCreateContext = () => useContext(CreateContext);