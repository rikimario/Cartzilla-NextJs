"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTranslations } from "next-intl";

export default function BasicInfoDatePicker({
  birthDate,
  setBirthDate,
}: {
  birthDate: Date | null;
  setBirthDate: (date: Date | null) => void;
}) {
  const t = useTranslations("Profile");
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between text-left font-normal px-3",
            !birthDate && "text-muted-foreground"
          )}
        >
          {birthDate ? format(birthDate, "PPP") : <span>{t("pickDate")}</span>}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={birthDate ?? undefined}
          onSelect={(date) => setBirthDate(date ?? null)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
