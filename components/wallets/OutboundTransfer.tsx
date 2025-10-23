'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const banks = [
  { id: 1, name: "Guarantee Trust Bank", code: "GTB" },
  { id: 2, name: "First Bank of Nigeria", code: "FBN" },
  { id: 3, name: "Access Bank", code: "ACB" },
  { id: 4, name: "Zenith Bank", code: "ZB" },
  { id: 5, name: "United Bank for Africa", code: "UBA" },
  { id: 6, name: "FCMB", code: "FCMB" },
];

export default function OutboundTransfer() {
  const router = useRouter();
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleContinue = () => {
    if (selectedBank && accountNumber && amount) {
      router.push("/success");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ArrowLeft size={24} className="text-gray-900" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            Outbound Transfer
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Alert */}
        <Card className="bg-orange-50 border-orange-200 mb-8">
          <div className="p-4 flex gap-3">
            <AlertCircle
              size={20}
              className="text-orange-600 flex-shrink-0 mt-0.5"
            />
            <div>
              <p className="font-semibold text-orange-900">
                Transfer to Other Banks
              </p>
              <p className="text-sm text-orange-800 mt-1">
                At least ₦500 views is required in a week to get your reward
              </p>
            </div>
          </div>
        </Card>

        {/* Transfer Form */}
        <Card className="bg-white">
          <div className="p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Transfer Details
            </h2>

            <div className="space-y-6">
              {/* Bank Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Select Bank
                </label>
                <Select value={selectedBank} onValueChange={setSelectedBank}>
                  <SelectTrigger className="h-12 border-gray-300">
                    <SelectValue placeholder="Choose a bank" />
                  </SelectTrigger>
                  <SelectContent>
                    {banks.map((bank) => (
                      <SelectItem key={bank.id} value={bank.id.toString()}>
                        {bank.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Account Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Account Number
                </label>
                <Input
                  type="text"
                  placeholder="Enter account number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="h-12 border-gray-300"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Amount (₦)
                </label>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-12 border-gray-300"
                />
              </div>

              {/* Narration */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Narration (Optional)
                </label>
                <Input
                  type="text"
                  placeholder="What is this transfer for?"
                  className="h-12 border-gray-300"
                />
              </div>

              {/* Transfer Fee Info */}
              {amount && (
                <Card className="bg-blue-50 border-blue-200 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-blue-600">Transfer Amount</p>
                      <p className="text-lg font-bold text-blue-900">
                        ₦{amount}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-600">Transfer Fee</p>
                      <p className="text-lg font-bold text-blue-900">₦0</p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={() => router.back()}
                  variant="outline"
                  className="flex-1 h-12 border-gray-300 text-gray-900"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleContinue}
                  disabled={!selectedBank || !accountNumber || !amount}
                  className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold disabled:opacity-50"
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
