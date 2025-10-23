'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { useLocation } from "wouter";
import { CheckCircle, Download, Share2, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TransferSuccess() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <Card className="bg-white max-w-md w-full shadow-2xl">
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle size={48} className="text-green-600" />
              </div>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Transfer Successful!
          </h1>
          <p className="text-gray-600 mb-8">
            You have successfully transferred ₦200,000 to @draddo
          </p>

          {/* Transaction Details */}
          <Card className="bg-gray-50 border-gray-200 p-6 mb-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Recipient</span>
                <span className="font-semibold text-gray-900">@draddo</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Amount</span>
                <span className="font-semibold text-gray-900">₦200,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Reference</span>
                <span className="font-mono text-sm text-gray-900">TXN2024001</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Time</span>
                <span className="text-sm text-gray-900">9:41 PM</span>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3 mb-6">
            <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2">
              <Download size={20} />
              Download Receipt
            </Button>

            <Button
              variant="outline"
              className="w-full h-12 border-gray-300 text-gray-900 font-semibold rounded-lg flex items-center justify-center gap-2"
            >
              <Share2 size={20} />
              Share Receipt
            </Button>
          </div>

          {/* Back to Dashboard */}
          <Button
            onClick={() => router.push("/n/wallets/")}
            className="w-full h-12 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Back to Dashboard
          </Button>
        </div>
      </Card>
    </div>
  );
}

