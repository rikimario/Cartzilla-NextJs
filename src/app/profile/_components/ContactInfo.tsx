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
  const handleContact = () => {
    if (!email.trim() || !phone.trim()) {
      toast.error("Please fill in all fields.");
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
            <h1 className="mb-4 font-semibold">Contact</h1>
            {!contact?.email || !contact?.phone ? null : (
              <AccordionTrigger
                className="[&>svg]:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-sm font-medium underline">Edit</span>
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
                  <Label htmlFor="Phone">Phone</Label>
                  <Input
                    placeholder="+91 123456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
