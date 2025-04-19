import React, { useEffect, useState } from "react";
import { createClient } from "../../../../../utils/supabase/client";
import { getUser } from "../../../../../utils/supabase/actions";
import { Cards } from "@/lib/types";

import PaymentCard from "../../_components/PaymentCard";
import AddNewCard from "../../_components/AddNewCard";

export default function PaymentMethods() {
  const [card, setCard] = useState<Cards[]>([]);

  const supabase = createClient();
  const fetchCards = async () => {
    const user = await getUser();

    const { data: cards, error } = await supabase
      .from("payment_methods")
      .select("*")
      .eq("user_id", user?.id);

    if (error) {
      console.log(error);
      return;
    } else {
      setCard(cards.reverse() as Cards[]);
    }
  };

  useEffect(() => {
    fetchCards();

    const subscription = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "payment_methods" },
        (payload) => {
          console.log("Change received!", payload);
          fetchCards();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
  };

  const formatExpiryDate = (value: string) => {
    let cleaned = value.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length > 2) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    return cleaned;
  };

  return (
    <div className="py-2 dark:text-white">
      <h1 className="text-4xl font-bold text-gray-700 mb-4 pb-2 dark:text-white">
        Payment methods
      </h1>

      <div className="md:flex md:flex-row flex flex-col flex-wrap gap-4">
        <PaymentCard
          formatCardNumber={formatCardNumber}
          formatExpiryDate={formatExpiryDate}
          card={card}
        />
        <AddNewCard
          formatCardNumber={formatCardNumber}
          formatExpiryDate={formatExpiryDate}
          setCard={setCard}
        />
      </div>
    </div>
  );
}
