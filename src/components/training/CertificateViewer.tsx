import { Award, Download, Share2, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import type { Certificate } from '../../types';

interface CertificateViewerProps {
  certificate: Certificate;
  onDownload: () => void;
  onShare: () => void;
}

export function CertificateViewer({ certificate, onDownload, onShare }: CertificateViewerProps) {
  return (
    <div className="space-y-6">
      {/* Certificate Card */}
      <Card className="border-2 border-blue-600">
        <CardContent className="p-0">
          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
            <Award className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-white mb-2">Certificate of Completion</h2>
            <p className="text-blue-100">SAFE-MIT Digital Platform</p>
          </div>

          {/* Certificate Body */}
          <div className="p-8 md:p-12 space-y-6 text-center">
            <div className="space-y-2">
              <p className="text-gray-600">This is to certify that</p>
              <h3 className="text-2xl md:text-3xl">Certificate Holder</h3>
              <p className="text-gray-600">has successfully completed</p>
            </div>

            <div className="py-4">
              <h2 className="text-blue-600 mb-2">{certificate.moduleName}</h2>
              <Badge variant="secondary" className="mt-2">
                <CheckCircle className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto pt-6 border-t">
              <div>
                <p className="text-sm text-gray-600 mb-1">Issue Date</p>
                <p className="font-medium">
                  {new Date(certificate.issuedDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Verification Code</p>
                <p className="font-medium font-mono text-sm">
                  {certificate.verificationCode}
                </p>
              </div>
            </div>

            {/* Signature Area */}
            <div className="pt-8">
              <div className="inline-block border-t-2 border-gray-300 pt-2 px-8">
                <p className="text-sm text-gray-600">Authorized Signature</p>
              </div>
            </div>
          </div>

          {/* Certificate Footer */}
          <div className="bg-gray-50 p-6 border-t text-center">
            <p className="text-sm text-gray-600">
              This certificate can be verified at safe-mit.org/verify/{certificate.verificationCode}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button onClick={onDownload} className="gap-2">
          <Download className="h-4 w-4" />
          Download Certificate
        </Button>
        <Button onClick={onShare} variant="outline" className="gap-2">
          <Share2 className="h-4 w-4" />
          Share Certificate
        </Button>
      </div>

      {/* Information */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="mb-3">About Your Certificate</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span>This certificate is permanently recorded and can be verified online</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span>Download and share on professional networks or with employers</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span>Demonstrates your commitment to safe and informed migration</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
