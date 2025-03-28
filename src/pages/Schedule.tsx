
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar as CalendarIcon, Truck, MapPin, Clock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

interface ScheduleEvent {
  id: string;
  title: string;
  type: "pickup" | "delivery" | "maintenance";
  time: string;
  location: string;
  description: string;
  date: Date;
}

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Example schedule events
  const [events, setEvents] = useState<ScheduleEvent[]>([
    {
      id: "1",
      title: "Pickup: Order #1235",
      type: "pickup",
      time: "9:00 AM",
      location: "Houston, TX",
      description: "Building Materials for Construction Corp",
      date: new Date()
    },
    {
      id: "2",
      title: "Delivery: Order #1233",
      type: "delivery",
      time: "3:30 PM",
      location: "Tucson, AZ",
      description: "Office Supplies for Office Solutions Inc",
      date: new Date(new Date().setDate(new Date().getDate() + 1))
    },
    {
      id: "3",
      title: "Vehicle Maintenance",
      type: "maintenance",
      time: "10:00 AM",
      location: "FleetCare Service Center",
      description: "Regular maintenance and oil change",
      date: new Date(new Date().setDate(new Date().getDate() + 3))
    }
  ]);

  // Filter events for the selected date
  const filteredEvents = events.filter(event => 
    date && 
    event.date.getDate() === date.getDate() && 
    event.date.getMonth() === date.getMonth() && 
    event.date.getFullYear() === date.getFullYear()
  );
  
  // Get all dates with events for highlighting in calendar
  const datesWithEvents = events.map(event => event.date);
  
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Schedule</h1>
        <p className="text-gray-600">Manage your upcoming pickups, deliveries, and maintenance.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>Select a date to view scheduled events</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                modifiers={{
                  event: datesWithEvents,
                }}
                modifiersStyles={{
                  event: {
                    fontWeight: 'bold',
                    backgroundColor: 'hsl(var(--primary) / 0.1)',
                    color: 'hsl(var(--primary))',
                    borderRadius: '100%',
                  },
                }}
              />
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                {date ? (
                  <div className="flex items-center">
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    <span>{format(date, "MMMM d, yyyy")}</span>
                  </div>
                ) : (
                  "Select a date"
                )}
              </CardTitle>
              <CardDescription>
                {filteredEvents.length 
                  ? `You have ${filteredEvents.length} scheduled event${filteredEvents.length !== 1 ? 's' : ''}`
                  : "No events scheduled for this day"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredEvents.length > 0 ? (
                <div className="space-y-4">
                  {filteredEvents.map((event) => (
                    <div 
                      key={event.id} 
                      className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="mr-4">
                        {event.type === "pickup" ? (
                          <div className="bg-blue-100 p-2 rounded-full">
                            <Truck className="h-6 w-6 text-blue-600" />
                          </div>
                        ) : event.type === "delivery" ? (
                          <div className="bg-green-100 p-2 rounded-full">
                            <Truck className="h-6 w-6 text-green-600" />
                          </div>
                        ) : (
                          <div className="bg-amber-100 p-2 rounded-full">
                            <Truck className="h-6 w-6 text-amber-600" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{event.title}</h3>
                          <Badge variant="outline" className={cn(
                            event.type === "pickup" && "bg-blue-50 text-blue-700 border-blue-200",
                            event.type === "delivery" && "bg-green-50 text-green-700 border-green-200",
                            event.type === "maintenance" && "bg-amber-50 text-amber-700 border-amber-200"
                          )}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </Badge>
                        </div>
                        
                        <div className="mt-2 space-y-1">
                          <p className="text-sm flex items-center text-gray-500">
                            <Clock className="h-3 w-3 mr-1.5" /> {event.time}
                          </p>
                          <p className="text-sm flex items-center text-gray-500">
                            <MapPin className="h-3 w-3 mr-1.5" /> {event.location}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CalendarIcon className="mx-auto h-12 w-12 text-gray-300" />
                  <h3 className="mt-4 text-lg font-medium">No Events Scheduled</h3>
                  <p className="mt-2 text-gray-500 max-w-md mx-auto">
                    You don't have any events scheduled for this day. Your pickups, deliveries, and maintenance will appear here.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
