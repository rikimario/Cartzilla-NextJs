import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContactInformation } from "@/lib/types";
import React from "react";
import ContactInfoBtns from "./ContactInfoBtns";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

export default function ContactInfo({
  email,
  setEmail,
  phone,
  setPhone,
  addContactInfo,
  isOpen,
  setIsOpen,
  contact,
}: {
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  addContactInfo: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  contact: ContactInformation | null;
}) {
  const t = useTranslations("Profile");
  const handleContact = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!email.trim() || !phone.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Invalid email format.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be 10 digits.");
      return;
    }

    addContactInfo();
    setIsOpen(false);
  };
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full mt-8"
        value={isOpen ? "item-2" : ""}
        onValueChange={(value) => setIsOpen(value === "item-2")}
      >
        <AccordionItem value="item-2">
          <div className="flex justify-between items-center">
            <h1 className="mb-4 font-semibold">{t("contact")}</h1>
            {!contact?.email || !contact?.phone ? null : (
              <AccordionTrigger
                className="[&>svg]:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-sm font-medium underline">
                  {t("edit")}
                </span>
              </AccordionTrigger>
            )}
          </div>

          {isOpen !== true && contact ? (
            <div className="flex flex-col text-gray-600 my-2 space-y-2">
              <span>{contact.email}</span>

              <span>{contact.phone}</span>
            </div>
          ) : (
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    placeholder="WtC6f@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="Phone">{t("phone")}</Label>
                  <Input
                    placeholder="+91 123456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={10}
                  />
                </div>
              </div>

              <ContactInfoBtns
                setIsOpen={setIsOpen}
                addContactInfo={handleContact}
                contact={contact}
              />
            </AccordionContent>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
}
