import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FinishSetup() {
const router = useRouter();
    const [formData, setFormData] = useState({
    country: "Nigeria",
    state: "Lagos",
    city: "Amuwo odofin",
    socialMediaHandle: "Facebook",
    socialMediaUsername: "jdoe2020",
    mCityUsername: "jdoe2020",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle setup completion
    console.log("Account Setup Complete:", formData);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Finish setting up your account
            </h1>
            <p className="text-gray-600">
              Provide the following information to finish setting up your
              account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Country
              </label>
              <Input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="bg-gray-100 border-gray-200"
              />
            </div>

            {/* State & City */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Rivers</option>
                  <option>Oyo</option>
                  <option>Kano</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  City
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Amuwo odofin</option>
                  <option>Lekki</option>
                  <option>Victoria Island</option>
                  <option>Ikoyi</option>
                  <option>Yaba</option>
                </select>
              </div>
            </div>

            {/* Social Media Handle & Username */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Social media handle
                </label>
                <select
                  name="socialMediaHandle"
                  value={formData.socialMediaHandle}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Facebook</option>
                  <option>Twitter</option>
                  <option>Instagram</option>
                  <option>LinkedIn</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Facebook username
                </label>
                <Input
                  type="text"
                  name="socialMediaUsername"
                  value={formData.socialMediaUsername}
                  onChange={handleChange}
                  className="bg-gray-100 border-gray-200"
                />
              </div>
            </div>

            {/* mCity Username */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                mCity username
              </label>
              <Input
                type="text"
                name="mCityUsername"
                value={formData.mCityUsername}
                onChange={handleChange}
                className="bg-gray-100 border-gray-200"
              />
              <p className="text-sm text-red-500 mt-2">
                Username already in use
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-full font-semibold"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

