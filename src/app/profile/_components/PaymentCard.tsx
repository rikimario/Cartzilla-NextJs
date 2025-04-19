import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cards } from "@/lib/types";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { createClient } from "../../../../utils/supabase/client";
import toast from "react-hot-toast";
import { getUser } from "../../../../utils/supabase/actions";

export default function PaymentCard({
  card,
  formatCardNumber,
  formatExpiryDate,
}: {
  card: Cards[];
  formatCardNumber: (value: string) => string;
  formatExpiryDate: (value: string) => string;
}) {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [nameOnCard, setNameOnCard] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [brand, setBrand] = useState<string>("");

  const supabase = createClient();

  const handleEditCard = async (id: string) => {
    const user = await getUser();

    const { error } = await supabase
      .from("payment_methods")
      .update({
        card_number: cardNumber,
        name_on_card: nameOnCard,
        expiry_date: expiryDate,
        cvc: cvc,
        brand: brand,
      })
      .eq("user_id", user?.id)
      .eq("id", id);

    if (error) {
      console.log("Error updating card:", error.message);
      return;
    }

    toast.success("Card updated successfully");
    setCardNumber("");
    setNameOnCard("");
    setExpiryDate("");
    setCvc("");
    setBrand("");
  };

  const handleRemoveCard = async (id: string) => {
    const user = await getUser();

    const { error } = await supabase
      .from("payment_methods")
      .delete()
      .eq("user_id", user?.id)
      .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }

    toast.success("Card removed from wishlist");
  };

  return (
    <>
      {" "}
      {card.length === 0
        ? null
        : card.map((c, index) => (
            <Card
              key={index}
              className="min-w-[300px] h-[220px] flex flex-col p-3 dark:bg-inherit"
            >
              {c.brand.toLowerCase() === "visa" ? (
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
                {/* Edit */}
                <Dialog>
                  <DialogTrigger>
                    <Button className="dark:bg-inherit" variant={"outline"}>
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="dark:bg-inherit">
                    <DialogDescription className="text-xl text-gray-900 font-semibold pb-4  border-b border-gray-400 dark:text-white">
                      Edit payment method
                    </DialogDescription>
                    <DialogTitle className="text-lg text-gray-700 text-center font-medium dark:text-white">
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
                      className="placeholder:text-lg dark:bg-inherit"
                    />
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
                      className="placeholder:text-lg dark:bg-inherit"
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
                          className="placeholder:text-lg dark:bg-inherit"
                        />
                      </div>
                      <div className="space-y-3 w-full">
                        <Label>CVV</Label>
                        <Input
                          required
                          onChange={(e) => {
                            setCvc(
                              e.target.value.replace(/\D/g, "").slice(0, 3)
                            );
                          }}
                          value={cvc}
                          placeholder="xxx"
                          className="placeholder:text-lg dark:bg-inherit"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 w-1/3">
                      <Label>Brand</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between dark:bg-inherit"
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

                    <DialogClose className="w-full flex gap-2">
                      <Button className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                        Cancle
                      </Button>
                      <Button
                        className="w-full"
                        onClick={() => handleEditCard(c.id)}
                        variant={"destructive"}
                      >
                        Edit card
                      </Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>

                {/* Remove */}
                <Button
                  className="dark:bg-inherit"
                  onClick={() => handleRemoveCard(c.id)}
                  variant={"outline"}
                >
                  Remove
                </Button>
              </div>
            </Card>
          ))}
    </>
  );
}
