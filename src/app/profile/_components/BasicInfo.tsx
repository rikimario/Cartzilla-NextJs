import { Input } from "@/components/ui/input";
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
import { PersonalInformation } from "@/lib/types";
import { formatDate } from "date-fns";

export default function BasicInfo({
  addNewInfo,
  isOpen,
  setIsOpen,
  personalInfo,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  language,
  setLanguage,
  birthDate,
  setBirthDate,
}: {
  addNewInfo: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  personalInfo: PersonalInformation | null;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  birthDate: Date | null;
  setBirthDate: (birthDate: Date | null) => void;
}) {
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
            {!personalInfo?.date_of_birth ||
            !personalInfo?.first_name ||
            !personalInfo?.last_name ||
            !personalInfo?.language ? null : (
              <AccordionTrigger
                className="[&>svg]:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-sm font-medium underline">Edit</span>
              </AccordionTrigger>
            )}
          </div>

          {isOpen !== true && personalInfo ? (
            <div className="flex flex-col text-gray-600 my-2 space-y-2">
              <span>
                {personalInfo.first_name} {personalInfo.last_name}
              </span>
              {personalInfo.date_of_birth && (
                <span>
                  {formatDate(new Date(personalInfo.date_of_birth), "PPP")}
                </span>
              )}
              <span>{personalInfo.language}</span>
            </div>
          ) : (
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

                <BasicInfoBtns
                  personalInfo={personalInfo}
                  addNewInfo={addNewInfo}
                  setIsOpen={setIsOpen}
                />
              </div>
            </AccordionContent>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
}
