'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import img from "../../assets/images/image 3.png"

export default function ForgotPasswordPhone() {
    const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle phone verification
    console.log("Phone verification:", phone);
    router.push("/security-question");
  };

  return (
    <div className="max-h-screen bg-white flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 items-center justify-center">
        <div className="text-center w-full h-full text-white">
          <div className="w-full h-full">
            <img
              src={img.src}
              alt="Modern building"
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button
            onClick={() => router.push("/login")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Reset your PIN
            </h1>
            <p className="text-gray-600">
              Enter your account's phone number, a reset token will be sent for
              verification
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Phone number
              </label>
              <div className="flex gap-2">
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 border border-gray-200">
                  <span className="text-gray-700 font-medium">🇳🇬 +234</span>
                </div>
                <Input
                  type="tel"
                  placeholder="7066198768"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 bg-gray-100 border-gray-200"
                  required
                />
              </div>
            </div>

            {/* Continue Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-full font-semibold"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

