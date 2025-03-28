
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, ThumbsUp, MessageSquare, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Review {
  id: string;
  fromName: string;
  fromCompany?: string;
  orderId: string;
  date: string;
  rating: number;
  comment: string;
  replied?: boolean;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "rev-001",
      fromName: "Jennifer Smith",
      fromCompany: "ABC Logistics",
      orderId: "1230",
      date: "Jun 19, 2023",
      rating: 5,
      comment: "Excellent service! Delivery was on time and the driver was very professional.",
    },
    {
      id: "rev-002",
      fromName: "Robert Johnson",
      fromCompany: "Tech Distributors",
      orderId: "1228",
      date: "Jun 17, 2023",
      rating: 4,
      comment: "Good service, slight delay but kept us informed throughout.",
      replied: true,
    },
    {
      id: "rev-003",
      fromName: "Michael Williams",
      fromCompany: "Office Solutions Inc",
      orderId: "1222",
      date: "Jun 12, 2023",
      rating: 3,
      comment: "Average service, delivery was a bit late.",
    }
  ]);

  const [replyText, setReplyText] = useState("");
  const [activeReview, setActiveReview] = useState<string | null>(null);

  const toggleReplyForm = (reviewId: string) => {
    if (activeReview === reviewId) {
      setActiveReview(null);
    } else {
      setActiveReview(reviewId);
      setReplyText("");
    }
  };

  const handleReply = (reviewId: string) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, replied: true } 
        : review
    ));
    setActiveReview(null);
    setReplyText("");
  };

  // Calculate average rating
  const avgRating = reviews.length 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  // Calculate rating distribution
  const ratingDistribution = [0, 0, 0, 0, 0]; // 1-star, 2-star, 3-star, 4-star, 5-star
  reviews.forEach(review => {
    if (review.rating >= 1 && review.rating <= 5) {
      ratingDistribution[review.rating - 1]++;
    }
  });

  const ratingPercentages = ratingDistribution.map(count => 
    reviews.length ? (count / reviews.length) * 100 : 0
  );

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Reviews</h1>
        <p className="text-gray-600">View and respond to reviews from your clients.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall Rating</CardTitle>
            <CardDescription>
              Based on {reviews.length} reviews
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center flex-col">
              <div className="text-5xl font-bold flex items-center space-x-2 mb-2">
                <span>{avgRating}</span>
                <Star className="h-8 w-8 fill-amber-400 text-amber-400" />
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.round(Number(avgRating))
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Rating Breakdown</CardTitle>
            <CardDescription>
              Distribution of ratings from clients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={rating} className="flex items-center">
                  <div className="w-10 text-sm flex items-center">
                    <span>{rating}</span>
                    <Star className="h-4 w-4 ml-1 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="flex-1 mx-3">
                    <Progress value={ratingPercentages[4 - index]} className="h-2" />
                  </div>
                  <div className="w-12 text-sm text-gray-500">
                    {ratingDistribution[4 - index]} {ratingDistribution[4 - index] === 1 ? 'review' : 'reviews'}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Client Reviews</CardTitle>
          <CardDescription>
            Reviews left by your clients after completed deliveries
          </CardDescription>
        </CardHeader>
        <CardContent>
          {reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>{review.fromName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{review.fromName}</p>
                        <p className="text-sm text-gray-500">{review.fromCompany}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star}
                            className={`h-4 w-4 ${
                              star <= review.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Order #{review.orderId} • {review.date}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{review.comment}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="text-xs h-8">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        Helpful
                      </Button>
                    </div>
                    
                    {review.replied ? (
                      <span className="text-xs text-green-600 flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Replied
                      </span>
                    ) : (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs h-8"
                        onClick={() => toggleReplyForm(review.id)}
                      >
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Reply
                      </Button>
                    )}
                  </div>
                  
                  {activeReview === review.id && (
                    <div className="mt-4 border-t pt-4">
                      <Textarea 
                        placeholder="Write your reply here..." 
                        className="mb-3 min-h-[100px]"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                      />
                      <div className="flex justify-end space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setActiveReview(null)}
                        >
                          Cancel
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleReply(review.id)}
                          disabled={!replyText.trim()}
                        >
                          Send Reply
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Star className="mx-auto h-12 w-12 text-gray-300" />
              <h3 className="mt-4 text-lg font-medium">No Reviews Yet</h3>
              <p className="mt-2 text-gray-500 max-w-md mx-auto">
                You haven't received any reviews yet. Reviews will appear here after clients rate your services.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Reviews;
