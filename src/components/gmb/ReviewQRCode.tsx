import React from 'react';
import { QrCode, Download, Printer, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ReviewQRCode = () => {
  const reviewUrl = "https://g.page/r/CfNPuh8d4DNAEAI/review";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(reviewUrl)}`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = 'xera-google-review-qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>XERA Review QR Code</title>
            <style>
              body { 
                display: flex; 
                flex-direction: column;
                justify-content: center; 
                align-items: center; 
                height: 100vh;
                font-family: Arial, sans-serif;
                text-align: center;
              }
              h1 { color: #EF4444; margin-bottom: 10px; }
              p { margin: 10px 0; }
              img { margin: 20px 0; }
            </style>
          </head>
          <body>
            <h1>XERA Car Wash & Auto Detailing</h1>
            <p>We'd love your feedback!</p>
            <p><strong>Scan to leave us a Google Review</strong></p>
            <img src="${qrCodeUrl}" alt="Google Review QR Code" />
            <p>Or visit: ${reviewUrl}</p>
            <p style="margin-top: 30px; font-size: 14px; color: #666;">
              Get ₹100 off your next service when you leave a verified review!
            </p>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <Card className="p-6 bg-card">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <QrCode className="h-8 w-8 text-primary" />
        </div>
        
        <h3 className="text-xl font-bold mb-2">Review QR Code</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Print and display at your payment counter to collect more reviews
        </p>

        {/* QR Code Display */}
        <div className="bg-white p-4 rounded-lg inline-block mb-6">
          <img
            src={qrCodeUrl}
            alt="Google Review QR Code"
            className="w-64 h-64"
          />
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-700">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium">Scan to Review</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          <Button
            onClick={handleDownload}
            variant="outline"
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
          <Button
            onClick={handlePrint}
            className="gap-2 bg-primary hover:bg-primary/90"
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
        </div>

        {/* Promotional Text */}
        <div className="mt-6 p-4 bg-primary/5 rounded-lg">
          <p className="text-sm font-medium mb-1">Special Offer!</p>
          <p className="text-xs text-muted-foreground">
            Show customers: "Get ₹100 off your next service when you leave a verified Google review!"
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ReviewQRCode;
