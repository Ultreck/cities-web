'use client';

import { useState } from "react";
import { Users, Calendar, Briefcase, Store, Globe, Home, Settings, Ban } from "lucide-react";
import CommunityProfile from "./CommunityProfile";
import Events from "./Events";
import Jobs from "./Jobs";
import Providers from "./Providers";
import Diaspora from "./Diaspora";
import Rent from "./Rent";
import { SettingsPage } from "@/components/pages/SettingsPage";
import BlockedUsers from "./BlockedUsers";

// Import all pages


function MainDetailsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Community Profile", icon: Users },
    { id: "events", label: "Events", icon: Calendar },
    { id: "jobs", label: "Jobs", icon: Briefcase },
    { id: "providers", label: "Providers", icon: Store },
    { id: "diaspora", label: "Diaspora", icon: Globe },
    { id: "rent", label: "Rent", icon: Home },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "blocked", label: "Blocked Users", icon: Ban },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <CommunityProfile />;
      case "events":
        return <Events />;
      case "jobs":
        return <Jobs />;
      case "providers":
        return <Providers />;
      case "diaspora":
        return <Diaspora />;
      case "rent":
        return <Rent />;
      case "settings":
        return <SettingsPage />;
      case "blocked":
        return <BlockedUsers />;
      default:
        return <CommunityProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Community Details Flow</h1>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline text-sm font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">About</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Guidelines</a></li>
                <li><a href="#" className="hover:text-blue-600">Safety</a></li>
                <li><a href="#" className="hover:text-blue-600">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms</a></li>
                <li><a href="#" className="hover:text-blue-600">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 Community Details Flow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default MainDetailsPage;

