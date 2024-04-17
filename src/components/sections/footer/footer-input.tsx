"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const FooterInput = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      toast.error("Please enter your email.");
    } else {
      toast.success("Thank you for subscribing to our newsletter.");
    }
  };

  return (
    <div className="relative w-full md:w-[80%] text-secondary/80">
      <input
        type="email"
        placeholder="Your Email"
        className="p-2 md:p-5 border border-border bg-muted/30 text-xl backdrop-blur-md rounded-2xl outline-none w-full"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <ArrowRight
        className="absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 cursor-pointer"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default FooterInput;
