
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AvailableOrders = () => {
  const { toast } = useToast();
  const [orders, setOrders] = useState([
    {
      id: "1237",
      type: "Furniture",
      pickup: "New York, NY",
      delivery: "Boston, MA",
      amount: 750,
      distance: "215 miles",
      deadline: "Jun 25, 2023"
    },
    {
      id: "1238",
      type: "Electronics",
      pickup: "Chicago, IL",
      delivery: "Detroit, MI",
      amount: 550,
      distance: "280 miles",
      deadline: "Jun 26, 2023"
    },
    {
      id: "1239",
      type: "Food Products",
      pickup: "Los Angeles, CA",
      delivery: "San Francisco, CA",
      amount: 850,
      distance: "380 miles",
      deadline: "Jun 27, 2023"
    },
    {
      id: "1240",
      type: "Machinery",
      pickup: "Seattle, WA",
      delivery: "Portland, OR",
      amount: 650,
      distance: "175 miles",
      deadline: "Jun 28, 2023"
    }
  ]);

  const handleAcceptOrder = (orderId: string) => {
    setOrders(orders.filter(order => order.id !== orderId));
    toast({
      title: "Order Accepted",
      description: `You've accepted order #${orderId}. Check your deliveries tab.`,
    });
  };

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Available Orders</h1>
        <p className="text-gray-600">Browse and accept orders that match your route and vehicle type.</p>
      </div>

      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
                  <div className="md:col-span-2">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Package className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Order #{order.id}</p>
                        <p className="text-sm text-gray-500">{order.type}</p>
                        <p className="text-sm font-medium mt-1">{order.distance}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Pickup</p>
                    <p className="text-sm font-medium flex items-center">
                      <MapPin className="h-3 w-3 mr-1 text-gray-400" /> {order.pickup}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Delivery</p>
                    <p className="text-sm font-medium flex items-center">
                      <MapPin className="h-3 w-3 mr-1 text-gray-400" /> {order.delivery}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Payment</p>
                    <p className="text-sm font-medium">${order.amount}</p>
                    <p className="text-xs text-gray-400">Due by {order.deadline}</p>
                  </div>
                  
                  <div className="flex items-center justify-end">
                    <Button 
                      className="bg-primary hover:bg-primary-600 w-full md:w-auto"
                      onClick={() => handleAcceptOrder(order.id)}
                    >
                      Accept Order
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <CardContent>
            <div className="flex flex-col items-center justify-center space-y-3">
              <Package className="h-12 w-12 text-gray-300" />
              <h3 className="text-lg font-medium">No Available Orders</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                There are no available orders at this time. Check back soon for new opportunities.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AvailableOrders;
