import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface props {
  loading: boolean;
}
export default function ButtonLoader({ loading }: props) {
  return (
    <div className="ml-2">
      <ClipLoader
        color="white"
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
