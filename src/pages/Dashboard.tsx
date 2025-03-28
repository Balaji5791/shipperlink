
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Truck,
  Package,
  Calendar,
  DollarSign,
  Star,
  Bell,
  MapPin,
  User,
  LogOut,
  Settings,
  Menu,
  X,
} from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // In a real app, user data would come from your auth context
  const userRole = "driver"; // or "company"
  const userName = "John Smith";

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm z-30">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex items-center gap-2">
              <Truck className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">ShipperLink</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="hidden md:flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                {userName.charAt(0)}
              </div>
              <span className="font-medium">{userName}</span>
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`bg-white shadow-md w-64 flex-shrink-0 fixed inset-y-0 left-0 z-20 transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:inset-auto md:z-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col">
            <div className="p-4 flex items-center justify-between border-b md:hidden">
              <div className="flex items-center gap-2">
                <Truck className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">ShipperLink</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="flex-1 py-6 px-4 overflow-y-auto">
              <nav className="space-y-1">
                <Link 
                  to="/dashboard"
                  className="flex items-center gap-3 px-3 py-2 text-gray-800 bg-gray-100 rounded-md"
                >
                  <Package className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
                
                {userRole === "driver" ? (
                  <>
                    <Link 
                      to="/available-orders"
                      className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                    >
                      <Package className="h-5 w-5" />
                      <span>Available Orders</span>
                    </Link>
                    <Link 
                      to="/my-deliveries"
                      className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                    >
                      <Truck className="h-5 w-5" />
                      <span>My Deliveries</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <a 
                      href="#" 
                      className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                    >
                      <Package className="h-5 w-5" />
                      <span>My Shipments</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                    >
                      <DollarSign className="h-5 w-5" />
                      <span>Post New Shipment</span>
                    </a>
                  </>
                )}
                
                <Link 
                  to="/schedule"
                  className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule</span>
                </Link>
                
                <Link 
                  to="/payments"
                  className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  <DollarSign className="h-5 w-5" />
                  <span>Payments</span>
                </Link>
                
                <Link 
                  to="/reviews"
                  className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  <Star className="h-5 w-5" />
                  <span>Reviews</span>
                </Link>
                
                <Link 
                  to="/profile"
                  className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                
                <Link 
                  to="/settings"
                  className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </nav>
            </div>
            
            <div className="p-4 border-t">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
            <p className="text-gray-600">Here's what's happening with your shipments today.</p>
          </div>
          
          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="orders">
                {userRole === "driver" ? "Available Orders" : "My Shipments"}
              </TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      {userRole === "driver" ? "Available Orders" : "Active Shipments"}
                    </CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">
                      +3 from yesterday
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      {userRole === "driver" ? "In Progress" : "In Transit"}
                    </CardTitle>
                    <Truck className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4</div>
                    <p className="text-xs text-muted-foreground">
                      +1 from yesterday
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      {userRole === "driver" ? "Earnings This Month" : "Spending This Month"}
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2,650</div>
                    <p className="text-xs text-muted-foreground">
                      +15% from last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      Rating
                    </CardTitle>
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.8/5</div>
                    <p className="text-xs text-muted-foreground">
                      From 56 reviews
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent Activity Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your latest updates and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <DollarSign className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Payment Received</p>
                        <p className="text-sm text-gray-500">
                          You received a payment of $850 for order #1234
                        </p>
                        <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-secondary/10 p-2 rounded-full">
                        <Star className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">New Review</p>
                        <p className="text-sm text-gray-500">
                          {userRole === "driver" 
                            ? "ABC Company rated you 5 stars for order #1235" 
                            : "Driver John D. rated your shipment 5 stars for order #1235"}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <Package className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Order Completed</p>
                        <p className="text-sm text-gray-500">
                          Order #1236 was delivered successfully
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {userRole === "driver" ? "Available Orders" : "My Shipments"}
                  </CardTitle>
                  <CardDescription>
                    {userRole === "driver" 
                      ? "Orders that match your route and vehicle type" 
                      : "Track and manage your shipments"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 hover:bg-gray-50 cursor-pointer border-b">
                        <div>
                          <p className="font-medium">Order #1237</p>
                          <p className="text-sm text-gray-500">Furniture</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Pickup</p>
                          <p className="text-sm font-medium flex items-center">
                            <MapPin className="h-3 w-3 mr-1" /> New York, NY
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Delivery</p>
                          <p className="text-sm font-medium flex items-center">
                            <MapPin className="h-3 w-3 mr-1" /> Boston, MA
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Amount</p>
                          <p className="text-sm font-medium">$750</p>
                        </div>
                        <div className="flex items-center justify-end">
                          <Button className="bg-primary hover:bg-primary-600">
                            {userRole === "driver" ? "Accept" : "View Details"}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 hover:bg-gray-50 cursor-pointer border-b">
                        <div>
                          <p className="font-medium">Order #1238</p>
                          <p className="text-sm text-gray-500">Electronics</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Pickup</p>
                          <p className="text-sm font-medium flex items-center">
                            <MapPin className="h-3 w-3 mr-1" /> Chicago, IL
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Delivery</p>
                          <p className="text-sm font-medium flex items-center">
                            <MapPin className="h-3 w-3 mr-1" /> Detroit, MI
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Amount</p>
                          <p className="text-sm font-medium">$550</p>
                        </div>
                        <div className="flex items-center justify-end">
                          <Button className="bg-primary hover:bg-primary-600">
                            {userRole === "driver" ? "Accept" : "View Details"}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 hover:bg-gray-50 cursor-pointer">
                        <div>
                          <p className="font-medium">Order #1239</p>
                          <p className="text-sm text-gray-500">Food Products</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Pickup</p>
                          <p className="text-sm font-medium flex items-center">
                            <MapPin className="h-3 w-3 mr-1" /> Los Angeles, CA
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Delivery</p>
                          <p className="text-sm font-medium flex items-center">
                            <MapPin className="h-3 w-3 mr-1" /> San Francisco, CA
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Amount</p>
                          <p className="text-sm font-medium">$850</p>
                        </div>
                        <div className="flex items-center justify-end">
                          <Button className="bg-primary hover:bg-primary-600">
                            {userRole === "driver" ? "Accept" : "View Details"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Timeline</CardTitle>
                  <CardDescription>
                    Your activity history for the past 30 days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative pl-6 border-l border-gray-200 space-y-6">
                    <div className="relative">
                      <div className="absolute -left-9 p-1 rounded-full bg-primary">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <div>
                        <p className="font-medium">Payment Received</p>
                        <p className="text-sm text-gray-500">
                          You received a payment of $850 for order #1234
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Today, 2:34 PM</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-9 p-1 rounded-full bg-primary">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <div>
                        <p className="font-medium">Order Completed</p>
                        <p className="text-sm text-gray-500">
                          Order #1236 was delivered successfully
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Yesterday, 4:17 PM</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-9 p-1 rounded-full bg-primary">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <div>
                        <p className="font-medium">Order Accepted</p>
                        <p className="text-sm text-gray-500">
                          You accepted order #1236 from Company XYZ
                        </p>
                        <p className="text-xs text-gray-400 mt-1">June 14, 10:23 AM</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-9 p-1 rounded-full bg-gray-300">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <div>
                        <p className="font-medium">Account Created</p>
                        <p className="text-sm text-gray-500">
                          You created your ShipperLink account
                        </p>
                        <p className="text-xs text-gray-400 mt-1">June 10, 9:41 AM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
