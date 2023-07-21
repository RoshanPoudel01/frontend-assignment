import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import chakraTheme from "@chakra-ui/theme";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./helper/Router";
import { theme } from "./theme";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
const {
  Button,
  Heading,
  Input,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Table,
  TableContainer,
} = chakraTheme.components;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 30 * 1000,
    },
  },
  queryCache: new QueryCache({
    onError: async (error) => {
      if (error.request?.status === 401) {
        queryClient.clear();
      }
    },
  }),
});
// const theme = extendBaseTheme({
//   components: {
//     Button,
//     Heading,
//     Input,
//     Text, FormControl, FormLabel
//     , FormErrorMessage,Table,TableContainer

//   },
// })

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    {/* renders the app through the router */}
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
