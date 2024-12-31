import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';

import '@mantine/core/styles.css';
import 'mantine-datatable/styles.layer.css';

import App from './App.tsx';
import { myColor } from '@/constants/colors.ts';

const theme = createTheme({
  colors: { myColor },
  fontFamily: "Plus Jakarta Sans, sans-serif"
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
