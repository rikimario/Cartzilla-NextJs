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
import { ChevronDown, Plus } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { getUser } from "../../../../../utils/supabase/actions";
import { createClient } from "../../../../../utils/supabase/client";
import { Cards } from "@/lib/types";
import { useTranslations } from "next-intl";

export default function AddNewCard({
  setCard,
  formatCardNumber,
  formatExpiryDate,
}: {
  setCard: React.Dispatch<React.SetStateAction<Cards[]>>;
  formatCardNumber: (value: string) => string;
  formatExpiryDate: (value: string) => string;
}) {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [nameOnCard, setNameOnCard] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const t = useTranslations("Profile");

  const handleAddCard = async () => {
    if (cardNumber.replace(/\s/g, "").length !== 16) {
      toast.error("Card number must be 16 digits.");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(nameOnCard) || nameOnCard.trim() === "") {
      toast.error("Name on card is required and must be letters only.");
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      toast.error("Expiry date must be in MM/YY format.");
      return;
    }

    if (cvc.length !== 3 || !/^\d{3}$/.test(cvc)) {
      toast.error("CVC must be exactly 3 digits.");
      return;
    }

    if (!brand) {
      toast.error("Please select a card brand.");
      return;
    }

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

    setCard((prev) => [...cards, ...prev]);

    setCardNumber("");
    setNameOnCard("");
    setExpiryDate("");
    setCvc("");
    setBrand("");
  };

  return (
    <div>
      <Dialog>
        <Card className="min-w-[300px] h-[220px] flex justify-center items-center border-dashed border-gray-300 dark:bg-inherit">
          <DialogTrigger className="hover:underline underline-offset-4">
            <span className="flex items-center gap-2">
              <Plus className="w-5 h-5" strokeWidth={1} />
              {t("addPayment")}
            </span>{" "}
          </DialogTrigger>
        </Card>
        <DialogContent className="dark:bg-inherit">
          <DialogDescription className="text-xl text-gray-900 dark:text-white font-semibold pb-4  border-b border-gray-400">
            {t("dialogDescriptioon")}
          </DialogDescription>
          <DialogTitle className="text-lg text-gray-700 dark:text-white text-center font-medium">
            {t("dialogTitle")}
          </DialogTitle>
          <Label>{t("cardNumber")}</Label>
          <Input
            required
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            value={cardNumber}
            placeholder="xxxx xxxx xxxx xxxx"
            className="placeholder:text-lg dark:bg-inherit"
          />
          <Label>{t("cardHolderName")}</Label>
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
            placeholder={t("namePlaceholder")}
            className="placeholder:text-lg dark:bg-inherit"
          />
          <div className="flex gap-2">
            <div className="space-y-3 w-full">
              <Label>{t("expiryDate")}</Label>
              <Input
                required
                onChange={(e) =>
                  setExpiryDate(formatExpiryDate(e.target.value))
                }
                value={expiryDate}
                placeholder={t("datePlaceholder")}
                className="placeholder:text-lg dark:bg-inherit"
              />
            </div>
            <div className="space-y-3 w-full">
              <Label>{t("cvv")}</Label>
              <Input
                required
                onChange={(e) => {
                  setCvc(e.target.value.replace(/\D/g, "").slice(0, 3));
                }}
                value={cvc}
                placeholder="xxx"
                className="placeholder:text-lg dark:bg-inherit"
              />
            </div>
          </div>

          <div className="space-y-3 w-1/3">
            <Label>{t("brand")}</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between dark:bg-inherit"
                >
                  {brand ? brand : t("brandSelect")}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={brand} onValueChange={setBrand}>
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
              {t("cancle")}
            </Button>
            <Button
              className="w-full"
              onClick={handleAddCard}
              variant={"destructive"}
            >
              {t("addCard")}
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}
