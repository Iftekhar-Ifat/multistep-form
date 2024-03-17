import React from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

export default function PersonalInfoForm() {
  return (
    <div className="max-w-2xl mx-auto p-10 bg-white rounded-2xl shadow-lg min-w-[600px] min-h-[390px]">
      <h1 className="text-3xl font-bold mb-8">Fill out the box</h1>
      <form>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="first-name">
              First Name*
            </label>
            <Input id="first-name" placeholder="David" />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="last-name">
              Last Name*
            </label>
            <Input id="last-name" placeholder="Last Name*" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="email">
              Email*
            </label>
            <Input id="email" placeholder="Your email address" type="email" />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="phone">
              Phone
            </label>
            <Input id="phone" placeholder="Phone number*" type="tel" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Go Next</Button>
        </div>
      </form>
    </div>
  );
}
