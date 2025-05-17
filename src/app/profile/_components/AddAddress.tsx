import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const countries = [
  { value: "USA", label: "United States" },
  { value: "Canada", label: "Canada" },
  { value: "Mexico", label: "Mexico" },
  { value: "Brazil", label: "Brazil" },
  { value: "Germany", label: "Germany" },
  { value: "France", label: "France" },
  { value: "Italy", label: "Italy" },
  { value: "Spain", label: "Spain" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Australia", label: "Australia" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "South Africa", label: "South Africa" },
  { value: "South Korea", label: "South Korea" },
  { value: "Japan", label: "Japan" },
];

const cities = [
  { value: "New York", label: "New York" },
  { value: "Los Angeles", label: "Los Angeles" },
  { value: "San Francisco", label: "San Francisco" },
  { value: "Chicago", label: "Chicago" },
  { value: "Houston", label: "Houston" },
  { value: "Dallas", label: "Dallas" },
  { value: "Miami", label: "Miami" },
  { value: "Seattle", label: "Seattle" },
  { value: "Denver", label: "Denver" },
  { value: "Washington", label: "Washington" },
  { value: "Boston", label: "Boston" },
];

export default function AddAddress() {
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [city, setCity] = useState<string | undefined>(undefined);
  const [zip, setZip] = useState<string | undefined>(undefined);
  const [address, setAddress] = useState<string | undefined>(undefined);
  return (
    <div>
      <Dialog>
        <DialogTrigger className="hover:underline underline-offset-4">
          <span className="flex items-center gap-2">
            <Plus className="w-5 h-5" strokeWidth={1} />
            Add Address
          </span>{" "}
        </DialogTrigger>
        <DialogContent className="dark:bg-inherit">
          <DialogDescription className="text-xl text-gray-900 dark:text-white font-semibold pb-4  border-b border-gray-400">
            Add new address
          </DialogDescription>
          <DialogTitle></DialogTitle>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-full space-y-2">
                <Label htmlFor="Country">Country</Label>
                <Select
                  value={country || undefined}
                  onValueChange={(value) => setCountry(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country..." />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full space-y-2">
                <Label htmlFor="City">City</Label>
                <Select
                  value={city || undefined}
                  onValueChange={(value) => setCity(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select city..." />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input
                  placeholder=""
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  placeholder=""
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
