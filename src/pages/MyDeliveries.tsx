
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Truck, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type DeliveryStatus = "in-progress" | "completed";

interface Delivery {
  id: string;
  type: string;
  pickup: string;
  delivery: string;
  amount: number;
  status: DeliveryStatus;
  progress: number; // 0-100
  pickupDate?: string;
  deliveryDate?: string;
  customerName: string;
}

const MyDeliveries = () => {
  const { toast } = useToast();
  const [deliveries, setDeliveries] = useState<Delivery[]>([
    {
      id: "1235",
      type: "Building Materials",
      pickup: "Houston, TX",
      delivery: "Dallas, TX",
      amount: 950,
      status: "in-progress",
      progress: 25,
      pickupDate: "Jun 22, 2023",
      customerName: "Construction Corp"
    },
    {
      id: "1233",
      type: "Office Supplies",
      pickup: "Phoenix, AZ",
      delivery: "Tucson, AZ",
      amount: 450,
      status: "in-progress",
      progress: 75,
      pickupDate: "Jun 21, 2023",
      customerName: "Office Solutions Inc"
    },
    {
      id: "1230",
      type: "Furniture",
      pickup: "Miami, FL",
      delivery: "Orlando, FL",
      amount: 850,
      status: "completed",
      progress: 100,
      pickupDate: "Jun 18, 2023",
      deliveryDate: "Jun 19, 2023",
      customerName: "Home Furnishings Ltd"
    },
    {
      id: "1228",
      type: "Electronics",
      pickup: "Denver, CO",
      delivery: "Salt Lake City, UT",
      amount: 1250,
      status: "completed",
      progress: 100,
      pickupDate: "Jun 15, 2023",
      deliveryDate: "Jun 17, 2023",
      customerName: "Tech Distributors"
    }
  ]);

  const updateDeliveryStatus = (id: string) => {
    setDeliveries(prevDeliveries => 
      prevDeliveries.map(delivery => {
        if (delivery.id === id) {
          const updatedDelivery = { 
            ...delivery, 
            status: "completed" as DeliveryStatus,
            progress: 100,
            deliveryDate: new Date().toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })
          };
          toast({
            title: "Delivery Completed",
            description: `Order #${id} has been marked as delivered.`,
          });
          return updatedDelivery;
        }
        return delivery;
      })
    );
  };

  const activeDeliveries = deliveries.filter(d => d.status === "in-progress");
  const completedDeliveries = deliveries.filter(d => d.status === "completed");

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">My Deliveries</h1>
        <p className="text-gray-600">Manage your ongoing and completed deliveries.</p>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">
            Active Deliveries ({activeDeliveries.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({completedDeliveries.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4">
          {activeDeliveries.length > 0 ? (
            activeDeliveries.map((delivery) => (
              <Card key={delivery.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="border-b px-4 py-3 flex justify-between items-center bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        In Progress
                      </Badge>
                      <span className="text-sm font-medium">Order #{delivery.id}</span>
                    </div>
                    <span className="text-sm">{delivery.customerName}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
                    <div className="md:col-span-3">
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary/10 p-2 rounded-full mt-1">
                          <Truck className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{delivery.type}</p>
                          <p className="text-sm text-gray-500">Picked up: {delivery.pickupDate}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-3">
                      <p className="text-sm text-gray-500">From</p>
                      <p className="text-sm font-medium flex items-center">
                        <MapPin className="h-3 w-3 mr-1 text-gray-400" /> {delivery.pickup}
                      </p>
                    </div>
                    
                    <div className="md:col-span-3">
                      <p className="text-sm text-gray-500">To</p>
                      <p className="text-sm font-medium flex items-center">
                        <MapPin className="h-3 w-3 mr-1 text-gray-400" /> {delivery.delivery}
                      </p>
                    </div>
                    
                    <div className="md:col-span-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">{delivery.progress}% Complete</span>
                        <span className="text-sm font-medium">${delivery.amount}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary rounded-full h-2" 
                          style={{ width: `${delivery.progress}%` }}
                        ></div>
                      </div>
                      <div className="mt-3">
                        <Button 
                          className="w-full"
                          onClick={() => updateDeliveryStatus(delivery.id)}
                        >
                          Mark as Delivered
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <div className="flex flex-col items-center justify-center space-y-3">
                  <Truck className="h-12 w-12 text-gray-300" />
                  <h3 className="text-lg font-medium">No Active Deliveries</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    You don't have any active deliveries at the moment. Accept new orders to start delivering.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          {completedDeliveries.length > 0 ? (
            completedDeliveries.map((delivery) => (
              <Card key={delivery.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="border-b px-4 py-3 flex justify-between items-center bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Completed
                      </Badge>
                      <span className="text-sm font-medium">Order #{delivery.id}</span>
                    </div>
                    <span className="text-sm">{delivery.customerName}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
                    <div className="md:col-span-3">
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">{delivery.type}</p>
                          <p className="text-sm text-gray-500">Completed: {delivery.deliveryDate}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-3">
                      <p className="text-sm text-gray-500">From</p>
                      <p className="text-sm font-medium flex items-center">
                        <MapPin className="h-3 w-3 mr-1 text-gray-400" /> {delivery.pickup}
                      </p>
                    </div>
                    
                    <div className="md:col-span-3">
                      <p className="text-sm text-gray-500">To</p>
                      <p className="text-sm font-medium flex items-center">
                        <MapPin className="h-3 w-3 mr-1 text-gray-400" /> {delivery.delivery}
                      </p>
                    </div>
                    
                    <div className="md:col-span-3 flex items-center justify-end">
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Earned</p>
                        <p className="font-medium">${delivery.amount}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <div className="flex flex-col items-center justify-center space-y-3">
                  <CheckCircle className="h-12 w-12 text-gray-300" />
                  <h3 className="text-lg font-medium">No Completed Deliveries</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    You haven't completed any deliveries yet. Your finished deliveries will appear here.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyDeliveries;
