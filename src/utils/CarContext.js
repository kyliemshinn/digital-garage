import React from 'react';
import { Provider } from "react-redux";
import Store from "./store"

export default function CarProvider(props) {

  return <Provider store={ Store } {...props} />;
}
