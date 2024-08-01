import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Mail, MapPin, PhoneOutgoing } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="py-6 px-4 xl:px-20 2xl:px-[7.8rem] dark:bg-[#181D25]">
      <div className="text-center py-6">
        <h1 className="text-3xl lg:text-4xl text-gray-900 dark:text-white font-semibold py-4">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-300 pb-4">
          Fill out the form below and we will reply within 24 hours
        </p>
      </div>

      <div className="md:flex">
        <div className="p-8 md:px-14 xl:px-24 bg-gray-100 dark:bg-[#222934] w-full rounded-2xl md:rounded-r-none md:rounded-br-none">
          <form>
            <div className="pb-6 flex flex-col gap-2">
              <label
                className="text-sm text-gray-900 dark:text-white"
                htmlFor=""
              >
                Name *
              </label>
              <input
                className="w-full h-12 dark:bg-inherit rounded-3xl border border-gray-300 px-4"
                type="text"
              />
            </div>

            <div className="pb-6 flex flex-col gap-2">
              <label
                className="text-sm text-gray-900 dark:text-white"
                htmlFor=""
              >
                Email *
              </label>
              <input
                className="w-full h-12 dark:bg-inherit rounded-3xl border border-gray-300 px-4"
                type="email"
              />
            </div>

            <div className="pb-6 flex flex-col gap-2">
              <label
                className="text-sm text-gray-900 dark:text-white"
                htmlFor=""
              >
                Subject *
              </label>
              <Select>
                <SelectTrigger className="w-full h-12 dark:bg-inherit rounded-3xl border border-gray-300 text-gray-600 dark:text-white px-4">
                  <SelectValue
                    className="text-gray-300"
                    placeholder="Select subject"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="general-inquiry">
                      General inquiry
                    </SelectItem>
                    <SelectItem value="order-status">Order status</SelectItem>
                    <SelectItem value="product-information">
                      Product information
                    </SelectItem>
                    <SelectItem value="technical-support">
                      Technical support
                    </SelectItem>
                    <SelectItem value="website-feedback">
                      Website feedback
                    </SelectItem>
                    <SelectItem value="account-assistance">
                      Account assistance
                    </SelectItem>
                    <SelectItem value="security-concerns">
                      Security concerns
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="pb-6 flex flex-col gap-2">
              <label
                className="text-sm text-gray-900 dark:text-white"
                htmlFor=""
              >
                Message *
              </label>
              <textarea
                className="w-full min-h-44 bg-white dark:bg-inherit rounded-3xl border border-gray-300 p-4"
                name=""
                id=""
              ></textarea>
            </div>

            <div>
              <Button className="rounded-3xl" size="lg">
                Send message
              </Button>
            </div>
          </form>
        </div>
        <div className="hidden md:block w-full">
          <Image
            className="h-full w-full object-cover rounded-r-2xl rounded-br-2xl"
            src="/form-image.jpg"
            alt="form-image"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b-[1px] border-gray-200">
        <div className="flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 dark:bg-[#222934] p-3 rounded-full">
            <PhoneOutgoing className="w-5 h-5" strokeWidth={2} />
          </div>
          <p className="text-gray-900 dark:text-white font-semibold text-lg py-3">
            Call us directly
          </p>
          <div className="flex lg:flex-col xl:flex-row text-center gap-2">
            <p className="text-gray-500 dark:text-gray-300">Customers:</p>
            <p>+1 50 537 53 082</p>
          </div>
          <div className="flex lg:flex-col xl:flex-row text-center gap-2">
            <p className="text-gray-500 dark:text-gray-300">Franchise:</p>
            <p>+1 50 537 53 000</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 dark:bg-[#222934] p-3 rounded-full">
            <Mail className="w-5 h-5" strokeWidth={2} />
          </div>
          <p className="text-gray-900 dark:text-white font-semibold text-lg py-3">
            Send a message
          </p>
          <div className="flex lg:flex-col xl:flex-row text-center gap-2">
            <p className="text-gray-500 dark:text-gray-300">Customers:</p>
            <p>info@cartzilla.com</p>
          </div>
          <div className="flex lg:flex-col xl:flex-row text-center gap-2">
            <p className="text-gray-500 dark:text-gray-300">Franchise:</p>
            <p>franchise@cartzilla.com</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 dark:bg-[#222934] p-3 rounded-full">
            <MapPin className="w-5 h-5" strokeWidth={2} />
          </div>
          <p className="text-gray-900 dark:text-white font-semibold text-lg py-3">
            Store location
          </p>
          <div className="text-center h-full">
            <p className="text-gray-500 dark:text-gray-300">
              New York 11741, USA
            </p>
            <p className="text-gray-500 dark:text-gray-300">
              396 Lillian Bolavandy, Holbrook
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 dark:bg-[#222934] p-3 rounded-full">
            <Clock className="w-5 h-5" strokeWidth={2} />
          </div>
          <p className="text-gray-900 dark:text-white font-semibold text-lg py-3">
            Working hours
          </p>
          <div className="text-center h-full">
            <p className="text-gray-500 dark:text-gray-300">
              Mon - Fri 8:00 - 18:00
            </p>
            <p className="text-gray-500 dark:text-gray-300">
              Sat - Sun 10:00 - 16:00
            </p>
          </div>
        </div>
      </div>

      <div className="py-14 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white pb-5">
          Looking for support?
        </h1>
        <p className="text-gray-500 dark:text-gray-300 pb-5">
          We might already have what you are looking for. See our FAQs or head
          to our dedicated Help Center
        </p>
        <Button
          size="lg"
          variant="outline"
          className="rounded-3xl bg-inherit text-gray-900 dark:text-white border-gray-800 dark:border-white text-lg"
        >
          Help Center
        </Button>
      </div>
    </div>
  );
}
