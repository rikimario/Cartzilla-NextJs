import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
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
import { getUser } from "../../../../utils/supabase/actions";
import { createClient } from "../../../../utils/supabase/client";
import { PersonalInfo } from "@/lib/types";
import { formatDate } from "date-fns";

export default function BasicInfo() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [birthDate, setBirthDate] = useState<Date | null>(null);

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
        setPersonalInfo(info);
        setFirstName(info.first_name);
        setLastName(info.last_name);
        setLanguage(info.language);
        setBirthDate(info.date_of_birth ? new Date(info.date_of_birth) : null);
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    fetchInfo();
  }, []);

  const addNewInfo = async () => {
    const user = await getUser();
    if (!user) {
      console.error("No user found");
      return;
    }

    const payload = {
      user_id: user.id,
      first_name: firstName,
      last_name: lastName,
      language: language,
      date_of_birth: birthDate,
    };

    const query = personalInfo
      ? supabase.from("personal_info").update(payload).eq("id", personalInfo.id)
      : supabase.from("personal_info").insert(payload);

    const { data, error } = await query.select().single();

    if (error) {
      console.error(error);
      return;
    }

    setPersonalInfo(data);
    setIsOpen(false);
  };

  return (
    <>
      <Accordion
        type="single"
        collapsible
        value={isOpen ? "item-1" : ""}
        onValueChange={(value) => setIsOpen(value === "item-1")}
      >
        <AccordionItem value="item-1">
          <div className="flex justify-between items-center">
            <h1 className="mb-4 font-semibold">Basic info</h1>
            {personalInfo && (
              <AccordionTrigger
                className="[&>svg]:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-sm font-medium underline">Edit</span>
              </AccordionTrigger>
            )}
          </div>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <BasicInfoDatePicker
                  birthDate={birthDate}
                  setBirthDate={setBirthDate}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select
                  value={language}
                  onValueChange={(value) => setLanguage(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Bulgarian">Bulgarian</SelectItem>
                    <SelectItem value="French">French</SelectItem>
                    <SelectItem value="Spanish">Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <BasicInfoBtns addNewInfo={addNewInfo} setIsOpen={setIsOpen} />
            </div>
          </AccordionContent>
          {isOpen !== true && personalInfo && (
            <div className="flex flex-col text-gray-600 my-2 space-y-2">
              <span>
                {personalInfo.first_name} {personalInfo.last_name}
              </span>
              <span>
                {personalInfo.date_of_birth
                  ? formatDate(new Date(personalInfo.date_of_birth), "PPP")
                  : "No date"}
              </span>
              <span>{personalInfo.language}</span>
            </div>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
}
