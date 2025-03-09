"use client";

import { makeStore } from "@/features/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./loading";
import { ToastContainer } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  const { store, persistor } = makeStore();

  return (
    <Provider store={store}>
      <ToastContainer />
      <PersistGate
        loading={
          <div className="flex items-center justify-center h-screen">
            <Loading />
          </div>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
