import React, { useState } from "react";
import AddAddress from "../../_components/AddAddress";

export default function Addresses() {
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [city, setCity] = useState<string | undefined>(undefined);
  const [zip, setZip] = useState<string | undefined>(undefined);
  const [address, setAddress] = useState<string | undefined>(undefined);
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700 mb-4 pb-2 dark:text-white">
        Addresses
      </h1>

      <AddAddress
        country={country}
        setCountry={setCountry}
        city={city}
        setCity={setCity}
        zip={zip}
        setZip={setZip}
        address={address}
        setAddress={setAddress}
      />
    </div>
  );
}
