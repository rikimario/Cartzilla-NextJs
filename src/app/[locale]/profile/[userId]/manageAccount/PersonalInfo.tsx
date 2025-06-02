import React, { useEffect, useState } from "react";
import BasicInfo from "../../_components/BasicInfo";
import ContactInfo from "../../_components/ContactInfo";
import { ContactInformation, PersonalInformation } from "@/lib/types";
import { createClient } from "../../../../../../utils/supabase/client";
import { getUser } from "../../../../../../utils/supabase/actions";
import DeleteAccount from "../../_components/DeleteAccount";

export default function PersonalInfo() {
  const [isBasicOpen, setIsBasicOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInformation | null>(
    null
  );
  const [contact, setContact] = useState<ContactInformation | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

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

        if (
          !info.first_name ||
          !info.last_name ||
          !info.language ||
          !info.date_of_birth
        ) {
          setIsBasicOpen(true);
        } else {
          setIsBasicOpen(false);
        }
      } else {
        setIsBasicOpen(true);
      }
    };

    fetchInfo();
  }, []);

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
        setContact(info);
        setEmail(info.email);
        setPhone(info.phone);

        if (!info.email || !info.phone) {
          setIsContactOpen(true);
        } else {
          setIsContactOpen(false);
        }
      } else {
        setIsContactOpen(true);
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
    setIsBasicOpen(false);
  };

  const addContactInfo = async () => {
    const user = await getUser();
    if (!user) {
      console.error("No user found");
      return;
    }

    const payload = {
      user_id: user.id,
      email: email,
      phone: phone,
    };

    const query = contact
      ? supabase.from("personal_info").update(payload).eq("id", contact.id)
      : supabase.from("personal_info").insert(payload);

    const { data, error } = await query.select().single();

    if (error) {
      console.error(error);
      return;
    }

    setContact(data);
    setIsContactOpen(false);
  };
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-700 mb-4 pb-2 dark:text-white">
        Persianal info
      </h1>

      <BasicInfo
        isOpen={isBasicOpen}
        setIsOpen={setIsBasicOpen}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        language={language}
        setLanguage={setLanguage}
        birthDate={birthDate}
        setBirthDate={setBirthDate}
        addNewInfo={addNewInfo}
        personalInfo={personalInfo}
      />
      <ContactInfo
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        addContactInfo={addContactInfo}
        isOpen={isContactOpen}
        setIsOpen={setIsContactOpen}
        contact={contact}
      />

      <DeleteAccount />
    </>
  );
}
