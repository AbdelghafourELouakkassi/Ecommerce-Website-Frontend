import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from './redux/store.js'
import { Provider} from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';


const graphcmc_api=import.meta.env.VITE_GRAPHCMS_API

const client =new ApolloClient({
  uri:graphcmc_api, 
  cache:new InMemoryCache(),
})



ReactDOM.createRoot(document.getElementById("root")).render
(   
  <Provider store={store}>
        <ApolloProvider client={client}>  
              <BrowserRouter>  
                <App />       
              </BrowserRouter>
        </ApolloProvider>
   </Provider>
);
