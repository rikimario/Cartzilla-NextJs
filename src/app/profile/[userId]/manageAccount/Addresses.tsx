import React, { useEffect, useState } from "react";
import AddAddress from "../../_components/AddAddress";
import { createClient } from "../../../../../utils/supabase/client";
import { getUser } from "../../../../../utils/supabase/actions";
import { AddressInfo } from "@/lib/types";

export default function Addresses() {
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [addressInfo, setAddressInfo] = useState<AddressInfo | null>(null);

  const supabase = createClient();

  useEffect(() => {
    const fetchInfo = async () => {
      const user = await getUser();

      const { data: info, error } = await supabase
        .from("personal_info")
        .select("*")
        .eq("user_id", user?.id)
        .single();

      if (error && error.code !== "PGRST116") {
        console.log(error);
        return;
      }

      if (info) {
        setAddressInfo(info);
        setCountry(info.country);
        setCity(info.city);
        setZip(info.zip);
        setAddress(info.address);
      }
    };

    fetchInfo();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700 mb-4 pb-2 dark:text-white">
        Addresses
      </h1>

      {addressInfo ? (
        <div className="flex flex-col text-gray-600 my-2 space-y-2 mb-6 border-b pb-4 dark:text-gray-400">
          <div className="flex gap-1">
            <span className=""></span> {addressInfo?.city}
            <span className=""></span> {addressInfo?.zip},
            <span className=""></span> {addressInfo?.country}
          </div>
          <div className="flex gap-1">
            <span className=""></span> {addressInfo?.address}
          </div>
        </div>
      ) : null}

      <AddAddress
        country={country}
        setCountry={setCountry}
        city={city}
        setCity={setCity}
        zip={zip}
        setZip={setZip}
        address={address}
        setAddress={setAddress}
        addressInfo={addressInfo}
        setAddressInfo={setAddressInfo}
      />
    </div>
  );
}
