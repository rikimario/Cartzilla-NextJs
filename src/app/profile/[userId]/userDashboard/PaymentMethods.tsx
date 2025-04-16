import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { createClient } from "../../../../../utils/supabase/client";
import { getUser } from "../../../../../utils/supabase/actions";
import { Cards } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { ChevronDown, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function PaymentMethods() {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [nameOnCard, setNameOnCard] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [card, setCard] = useState<Cards[]>([]);

  const fetchCards = async () => {
    const user = await getUser();
    const supabase = createClient();

    const { data: cards, error } = await supabase
      .from("payment_methods")
      .select("*")
      .eq("user_id", user?.id);

    if (error) {
      console.log(error);
      return;
    }

    setCard(cards.reverse() as Cards[]);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleAddCard = async () => {
    const user = await getUser();
    const supabase = createClient();

    const { data: cards, error } = await supabase
      .from("payment_methods")
      .insert({
        user_id: user?.id,
        card_number: cardNumber,
        name_on_card: nameOnCard,
        expiry_date: expiryDate,
        cvc: cvc,
        brand: brand,
      })
      .select();

    if (error) {
      console.log(error);
      return;
    }

    setCard(cards);

    setCardNumber("");
    setNameOnCard("");
    setExpiryDate("");
    setCvc("");
    setBrand("");
  };

  const handleRemoveCard = async (id: string) => {
    const user = await getUser();
    const supabase = createClient();

    const { error } = await supabase
      .from("payment_methods")
      .delete()
      .eq("user_id", user?.id)
      .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }
  };

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
        {card.length === 0
          ? null
          : card.map((c, index) => (
              <Card
                key={index}
                className="min-w-[300px] h-[220px] flex flex-col p-3"
              >
                {c.brand === "visa" ? (
                  <Image
                    width={50}
                    height={50}
                    src="/visa.svg"
                    alt="visa"
                    className="w-20"
                  />
                ) : (
                  <Image
                    width={50}
                    height={50}
                    src="/mastercard-svgrepo.svg"
                    alt="mastercard"
                    className="w-20"
                  />
                )}
                <p className="font-semibold">
                  **** **** **** {c.card_number.slice(-4)}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  Expiration {c.expiry_date}
                </p>

                <div className="flex gap-2 mt-auto">
                  <Button variant={"outline"} className="">
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleRemoveCard(c.id)}
                    variant={"outline"}
                    className=""
                  >
                    Remove
                  </Button>
                </div>
              </Card>
            ))}
        <div>
          <Dialog>
            <Card className="min-w-[300px] h-[220px] flex justify-center items-center border-dashed border-gray-300">
              <DialogTrigger className="hover:underline underline-offset-4">
                <span className="flex items-center gap-2">
                  <Plus className="w-5 h-5" strokeWidth={1} />
                  Add payment method
                </span>{" "}
              </DialogTrigger>
            </Card>
            <DialogContent>
              <DialogDescription className="text-xl text-gray-900 font-semibold pb-4  border-b border-gray-400">
                Add new payment method
              </DialogDescription>
              <DialogTitle className="text-lg text-gray-700 text-center font-medium">
                Card
              </DialogTitle>
              <Label>Card number</Label>
              <Input
                required
                onChange={(e) =>
                  setCardNumber(formatCardNumber(e.target.value))
                }
                value={cardNumber}
                placeholder="xxxx xxxx xxxx xxxx"
                className="placeholder:text-lg"
              />
              <Label>Name on card</Label>
              <Input
                required
                pattern="[a-zA-Z\s]+"
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^[a-zA-Z\s]+$/.test(inputValue)) {
                    setNameOnCard(inputValue);
                  } else {
                    setNameOnCard("");
                  }
                }}
                value={nameOnCard}
                placeholder="Full name"
                className="placeholder:text-lg"
              />
              <div className="flex gap-2">
                <div className="space-y-3 w-full">
                  <Label>Expiration date</Label>
                  <Input
                    required
                    onChange={(e) =>
                      setExpiryDate(formatExpiryDate(e.target.value))
                    }
                    value={expiryDate}
                    placeholder="MM/YY"
                    className="placeholder:text-lg"
                  />
                </div>
                <div className="space-y-3 w-full">
                  <Label>CVV</Label>
                  <Input
                    required
                    onChange={(e) => {
                      setCvc(e.target.value.replace(/\D/g, "").slice(0, 3));
                    }}
                    value={cvc}
                    placeholder="xxx"
                    className="placeholder:text-lg"
                  />
                </div>
              </div>

              <div className="space-y-3 w-1/3">
                <Label>Brand</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      {brand ? brand : "Select brand"}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={brand}
                      onValueChange={setBrand}
                    >
                      <DropdownMenuRadioItem value="Visa">
                        Visa
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Mastercard">
                        Mastercard
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex gap-2">
                <Button className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Cancle
                </Button>
                <Button
                  onClick={handleAddCard}
                  variant={"destructive"}
                  className="w-full"
                >
                  Add card
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
