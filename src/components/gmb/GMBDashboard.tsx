import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Clock, Star, MessageSquare, TrendingUp } from 'lucide-react';
import ReviewQRCode from './ReviewQRCode';

const GMBDashboard = () => {
  // These metrics should be updated regularly from GMB Insights
  const metrics = {
    totalViews: "1,247",
    searchViews: "892",
    mapsViews: "355",
    directionRequests: "189",
    phoneClicks: "156",
    websiteClicks: "234",
    reviewCount: 127,
    averageRating: 4.9,
  };

  const recentActivity = [
    { action: "Direction request", time: "2 hours ago", location: "Palakkad" },
    { action: "Phone call", time: "4 hours ago", location: "Shoranur" },
    { action: "Website click", time: "5 hours ago", location: "Ottapalam" },
    { action: "Review posted", time: "1 day ago", rating: 5 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Google My Business Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your GMB performance and optimize for local search
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-xs text-muted-foreground">Last 30 days</span>
          </div>
          <p className="text-2xl font-bold mb-1">{metrics.totalViews}</p>
          <p className="text-sm text-muted-foreground">Total Views</p>
          <div className="mt-2 flex items-center text-xs text-green-600">
            <TrendingUp className="h-3 w-3 mr-1" />
            +23% vs last month
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-xs text-muted-foreground">Last 30 days</span>
          </div>
          <p className="text-2xl font-bold mb-1">{metrics.phoneClicks}</p>
          <p className="text-sm text-muted-foreground">Phone Clicks</p>
          <div className="mt-2 flex items-center text-xs text-green-600">
            <TrendingUp className="h-3 w-3 mr-1" />
            +18% vs last month
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-muted-foreground">Current</span>
          </div>
          <p className="text-2xl font-bold mb-1">{metrics.averageRating}</p>
          <p className="text-sm text-muted-foreground">{metrics.reviewCount} Reviews</p>
          <div className="mt-2 flex items-center text-xs text-green-600">
            <TrendingUp className="h-3 w-3 mr-1" />
            +12 reviews this month
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <span className="text-xs text-muted-foreground">Last 30 days</span>
          </div>
          <p className="text-2xl font-bold mb-1">{metrics.directionRequests}</p>
          <p className="text-sm text-muted-foreground">Direction Requests</p>
          <div className="mt-2 flex items-center text-xs text-green-600">
            <TrendingUp className="h-3 w-3 mr-1" />
            +31% vs last month
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
              >
                <div>
                  <p className="font-medium text-sm">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.location || `Rating: ${activity.rating} stars`}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="font-semibold mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-sm font-medium text-left transition-colors">
                <Clock className="h-4 w-4 mb-1 text-primary" />
                Update Hours
              </button>
              <button className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-sm font-medium text-left transition-colors">
                <MapPin className="h-4 w-4 mb-1 text-primary" />
                Add Photos
              </button>
              <button className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-sm font-medium text-left transition-colors">
                <MessageSquare className="h-4 w-4 mb-1 text-primary" />
                Post Update
              </button>
              <button className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-sm font-medium text-left transition-colors">
                <Star className="h-4 w-4 mb-1 text-primary" />
                Respond to Reviews
              </button>
            </div>
          </div>
        </Card>

        {/* Review QR Code */}
        <div className="lg:col-span-1">
          <ReviewQRCode />
        </div>
      </div>

      {/* GMB Optimization Tips */}
      <Card className="mt-6 p-6">
        <h2 className="text-xl font-bold mb-4">Optimization Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-2 text-sm">Post 3x per week</h3>
            <p className="text-xs text-muted-foreground">
              Regular GMB posts improve visibility by 70%. Schedule posts about services, offers, and tips.
            </p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-2 text-sm">Collect more reviews</h3>
            <p className="text-xs text-muted-foreground">
              Target 150 reviews for top rankings. Use QR code at checkout and send SMS reminders.
            </p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-2 text-sm">Add 100+ photos</h3>
            <p className="text-xs text-muted-foreground">
              Businesses with 100+ photos get 520% more calls. Upload before/after shots weekly.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GMBDashboard;
