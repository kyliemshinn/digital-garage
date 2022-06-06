import React, { useContext } from 'react';
import { Provider } from "react-redux";
import Store from "./store"

export default function CarProvider(props) {

  // The provider component will wrap all other components inside of it that need access to our global state
  return <Provider store={ Store } {...props} />;
}
