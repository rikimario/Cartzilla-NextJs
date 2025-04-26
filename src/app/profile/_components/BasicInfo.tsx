import { Input } from "@/components/ui/input";
import React from "react";
import BasicInfoDatePicker from "./BasicInfoDatePicker";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BasicInfoBtns from "./BasicInfoBtns";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BasicInfo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <div className="flex justify-between items-center">
          <h1 className="mb-4 font-semibold">Basic info</h1>
          <AccordionTrigger className="[&>svg]:hidden">
            <span className="text-sm font-medium underline">Edit</span>
          </AccordionTrigger>
        </div>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input placeholder="John" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input placeholder="Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <BasicInfoDatePicker />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="bg">Bulgarian</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <BasicInfoBtns />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
