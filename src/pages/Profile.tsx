
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Camera, User, Lock, Truck, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  
  // Mock user data
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St",
    city: "Springfield",
    state: "IL",
    zip: "62704",
    vehicleType: "Semi-Truck",
    vehicleCapacity: "40,000 lbs",
    vehicleYear: "2019",
    bio: "Professional truck driver with over 10 years of experience in long-haul logistics and transportation.",
  });

  const [formData, setFormData] = useState({ ...userData });
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    setUserData(formData);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleChangePassword = () => {
    if (password.new !== password.confirm) {
      toast({
        title: "Error",
        description: "New passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Password Updated",
      description: "Your password has been successfully changed.",
    });
    
    setPassword({
      current: "",
      new: "",
      confirm: "",
    });
  };

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <p className="text-gray-600">Manage your account information and settings.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl">
                    {userData.firstName.charAt(0)}{userData.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-xl font-bold">{userData.firstName} {userData.lastName}</h2>
                <p className="text-gray-600">Driver ID: DRV-1234</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="inline-flex items-center text-sm text-gray-500">
                    <Truck className="h-4 w-4 mr-1" />
                    {userData.vehicleType}
                  </div>
                  <div className="inline-flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {userData.city}, {userData.state}
                  </div>
                  <div className="inline-flex items-center text-sm text-gray-500">
                    <Mail className="h-4 w-4 mr-1" />
                    {userData.email}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <Separator />
          
          <CardContent className="pt-6">
            <Tabs defaultValue="personal">
              <TabsList className="mb-6">
                <TabsTrigger value="personal" className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Personal Information
                </TabsTrigger>
                <TabsTrigger value="vehicle" className="flex items-center">
                  <Truck className="h-4 w-4 mr-2" />
                  Vehicle Details
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center">
                  <Lock className="h-4 w-4 mr-2" />
                  Security
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows={4}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Select 
                          value={formData.state}
                          onValueChange={(value) => handleSelectChange("state", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="AL">Alabama</SelectItem>
                            <SelectItem value="AK">Alaska</SelectItem>
                            <SelectItem value="AZ">Arizona</SelectItem>
                            <SelectItem value="IL">Illinois</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            {/* Add more states as needed */}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="zip">Zip Code</Label>
                      <Input
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Button onClick={handleSaveProfile}>
                    Save Changes
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="vehicle">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="vehicleType">Vehicle Type</Label>
                      <Select 
                        value={formData.vehicleType}
                        onValueChange={(value) => handleSelectChange("vehicleType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Semi-Truck">Semi-Truck</SelectItem>
                          <SelectItem value="Box Truck">Box Truck</SelectItem>
                          <SelectItem value="Van">Van</SelectItem>
                          <SelectItem value="Refrigerated Truck">Refrigerated Truck</SelectItem>
                          <SelectItem value="Flatbed Truck">Flatbed Truck</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="vehicleCapacity">Capacity</Label>
                      <Input
                        id="vehicleCapacity"
                        name="vehicleCapacity"
                        value={formData.vehicleCapacity}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="vehicleYear">Year</Label>
                      <Input
                        id="vehicleYear"
                        name="vehicleYear"
                        value={formData.vehicleYear}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <h3 className="font-medium mb-2">Vehicle Documents</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Please upload the required documents for your vehicle
                      </p>
                      
                      <div className="space-y-3">
                        <div className="p-3 border rounded flex justify-between items-center">
                          <span className="text-sm">Registration</span>
                          <Button variant="outline" size="sm">Upload</Button>
                        </div>
                        <div className="p-3 border rounded flex justify-between items-center">
                          <span className="text-sm">Insurance</span>
                          <Button variant="outline" size="sm">Upload</Button>
                        </div>
                        <div className="p-3 border rounded flex justify-between items-center">
                          <span className="text-sm">Inspection Certificate</span>
                          <Button variant="outline" size="sm">Upload</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Button onClick={handleSaveProfile}>
                    Save Changes
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="security">
                <div className="max-w-md mx-auto">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input
                        id="current-password"
                        type="password"
                        value={password.current}
                        onChange={(e) => setPassword({ ...password, current: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        value={password.new}
                        onChange={(e) => setPassword({ ...password, new: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={password.confirm}
                        onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
                      />
                    </div>
                    
                    <div className="mt-6">
                      <Button 
                        onClick={handleChangePassword}
                        disabled={!password.current || !password.new || !password.confirm}
                      >
                        Change Password
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
