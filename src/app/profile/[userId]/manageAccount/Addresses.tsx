import React from "react";
import AddAddress from "../../_components/AddAddress";

export default function Addresses() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700 mb-4 pb-2 dark:text-white">
        Addresses
      </h1>

      <AddAddress />
    </div>
  );
}
