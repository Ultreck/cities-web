'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import img from "../../assets/images/image 2.png"

export default function BusinessRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    businessName: "",
    businessSector: "Information Technology",
    businessCategory: "unregistered",
    phone: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Business Registration:", formData);
    router.push("/verify");
  };

  return (
    <div className="max-h-screen bg-white flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 items-center justify-center">
        <div className="text-center h-full w-full text-white">
          <div className="w-full h-full">
            <img
              src={img.src}
              alt="Business meeting"
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12 overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Create your business account today!
            </h1>
            <p className="text-gray-600">
              Do you already have an account?{" "}
              <button
                onClick={() => router.push("/login")}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Sign in
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Business Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Business Name
              </label>
              <Input
                type="text"
                name="businessName"
                placeholder="My business"
                value={formData.businessName}
                onChange={handleChange}
                className="bg-gray-100 border-gray-200"
              />
            </div>

            {/* Business Sector */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Business Sector
              </label>
              <select
                name="businessSector"
                value={formData.businessSector}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Information Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Retail</option>
                <option>Manufacturing</option>
                <option>Other</option>
              </select>
            </div>

            {/* Business Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Business Category
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="businessCategory"
                    value="registered"
                    checked={formData.businessCategory === "registered"}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">Registered</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="businessCategory"
                    value="unregistered"
                    checked={formData.businessCategory === "unregistered"}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">Unregistered</span>
                </label>
              </div>
            </div>

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
                  name="phone"
                  placeholder="7000000000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 bg-gray-100 border-gray-200"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                E-mail
              </label>
              <Input
                type="email"
                name="email"
                placeholder="lisa.watson@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-100 border-gray-200"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <Input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-100 border-gray-200"
              />
            </div>

            {/* Terms & Conditions */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 mt-0.5"
              />
              <span className="text-sm text-gray-700">
                I accept the terms and privacy policy
              </span>
            </label>

            {/* Create Business Account Button */}
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg rounded-full font-semibold"
            >
              Create business account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

