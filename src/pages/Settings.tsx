
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  Bell,
  Mail,
  Phone,
  Lock,
  CreditCard,
  LogOut,
  Shield,
  Map,
  AlertTriangle,
} from "lucide-react";

const Settings = () => {
  const { toast } = useToast();
  
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    newOrders: true,
    orderUpdates: true,
    payments: true,
    marketing: false,
  });

  const [preferences, setPreferences] = useState({
    theme: "light",
    language: "english",
    distanceUnit: "miles",
    currency: "usd",
    maxDistance: "200",
  });

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handlePreferenceChange = (key: string, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been updated successfully.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion Requested",
      description: "We've sent you an email with further instructions.",
      variant: "destructive",
    });
  };

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-600">Manage your preferences and account settings.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Configure how and when you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notification Channels</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={notifications.email}
                      onCheckedChange={() => handleNotificationChange("email")}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-gray-500" />
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={notifications.push}
                      onCheckedChange={() => handleNotificationChange("push")}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    </div>
                    <Switch
                      id="sms-notifications"
                      checked={notifications.sms}
                      onCheckedChange={() => handleNotificationChange("sms")}
                    />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notification Types</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="new-orders">New Order Alerts</Label>
                    <Switch
                      id="new-orders"
                      checked={notifications.newOrders}
                      onCheckedChange={() => handleNotificationChange("newOrders")}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="order-updates">Order Status Updates</Label>
                    <Switch
                      id="order-updates"
                      checked={notifications.orderUpdates}
                      onCheckedChange={() => handleNotificationChange("orderUpdates")}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="payment-notifications">Payment Notifications</Label>
                    <Switch
                      id="payment-notifications"
                      checked={notifications.payments}
                      onCheckedChange={() => handleNotificationChange("payments")}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="marketing-emails">Marketing & Promotions</Label>
                    <Switch
                      id="marketing-emails"
                      checked={notifications.marketing}
                      onCheckedChange={() => handleNotificationChange("marketing")}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="h-5 w-5 mr-2" />
                App Preferences
              </CardTitle>
              <CardDescription>
                Customize your experience with ShipperLink
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select 
                    value={preferences.theme}
                    onValueChange={(value) => handlePreferenceChange("theme", value)}
                  >
                    <SelectTrigger id="theme">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System Default</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select 
                    value={preferences.language}
                    onValueChange={(value) => handlePreferenceChange("language", value)}
                  >
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="distance-unit">Distance Unit</Label>
                  <Select 
                    value={preferences.distanceUnit}
                    onValueChange={(value) => handlePreferenceChange("distanceUnit", value)}
                  >
                    <SelectTrigger id="distance-unit">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="miles">Miles</SelectItem>
                      <SelectItem value="kilometers">Kilometers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select 
                    value={preferences.currency}
                    onValueChange={(value) => handlePreferenceChange("currency", value)}
                  >
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                      <SelectItem value="cad">CAD (C$)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="max-distance">
                    Maximum Distance for Order Notifications
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="max-distance"
                      type="number"
                      value={preferences.maxDistance}
                      onChange={(e) => handlePreferenceChange("maxDistance", e.target.value)}
                      className="max-w-[100px]"
                    />
                    <span className="text-sm text-gray-500">
                      {preferences.distanceUnit}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security
              </CardTitle>
              <CardDescription>
                Manage your account security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Button variant="outline" className="w-full flex justify-between items-center">
                  <span className="flex items-center">
                    <Lock className="h-4 w-4 mr-2" /> Change Password
                  </span>
                  <span>→</span>
                </Button>
                
                <Button variant="outline" className="w-full flex justify-between items-center">
                  <span className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" /> Two-Factor Authentication
                  </span>
                  <span>→</span>
                </Button>
                
                <Button variant="outline" className="w-full flex justify-between items-center">
                  <span className="flex items-center">
                    <CreditCard className="h-4 w-4 mr-2" /> Payment Methods
                  </span>
                  <span>→</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Danger Zone
              </CardTitle>
              <CardDescription>
                Actions that cannot be undone
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border border-red-200 rounded-md p-4 bg-red-50">
                <h3 className="font-medium text-red-600 mb-2">Delete Account</h3>
                <p className="text-sm text-gray-700 mb-4">
                  This will permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <Button 
                  variant="destructive" 
                  className="w-full"
                  onClick={handleDeleteAccount}
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Delete My Account
                </Button>
              </div>
              
              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-2">Sign Out Everywhere</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Sign out from all devices where you're currently logged in.
                </p>
                <Button variant="outline" className="w-full">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out Everywhere
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <Button onClick={handleSaveSettings}>
          Save All Settings
        </Button>
      </div>
    </div>
  );
};

export default Settings;
