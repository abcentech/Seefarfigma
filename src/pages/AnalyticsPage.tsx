import { useState } from 'react';
import { Users, Eye, Clock, TrendingUp, Download, Filter, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { MetricCard } from '../components/analytics/MetricCard';
import { EngagementChart } from '../components/analytics/EngagementChart';
import { DeviceDistribution } from '../components/analytics/DeviceDistribution';
import {
  mockAnalyticsMetrics,
  mockEngagementData,
  mockGeoData,
  mockDeviceData,
} from '../lib/mockData';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { COUNTRIES } from '../lib/constants';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { toast } from 'sonner@2.0.3';

export function AnalyticsPage() {
  const { t } = useLanguage();
  const { user, hasRole } = useAuth();
  const [dateRange, setDateRange] = useState('7days');
  const [countryFilter, setCountryFilter] = useState('all');
  const [exportFormat, setExportFormat] = useState('csv');

  // Check if user has permission to view analytics
  if (!user || (!hasRole('analyst') && !hasRole('admin'))) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Alert>
          <AlertDescription>
            You do not have permission to view this page. Analytics access is restricted to 
            Analysts and Administrators.
          </AlertDescription>
        </Alert>
        <div className="mt-6">
          <Button asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    );
  }

  const handleExport = () => {
    toast.success(`Exporting analytics data as ${exportFormat.toUpperCase()}...`);
    // In production, this would trigger a download
  };

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <h1>{t.analytics.title}</h1>
          <p className="text-xl text-orange-100 max-w-3xl mt-2">
            Track engagement, user behavior, and platform impact across all countries
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="text-sm mb-2 block">
                  <Calendar className="h-4 w-4 inline mr-2" />
                  Date Range
                </label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">Last 7 Days</SelectItem>
                    <SelectItem value="30days">Last 30 Days</SelectItem>
                    <SelectItem value="90days">Last 90 Days</SelectItem>
                    <SelectItem value="year">Last Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <label className="text-sm mb-2 block">
                  <Filter className="h-4 w-4 inline mr-2" />
                  Country Filter
                </label>
                <Select value={countryFilter} onValueChange={setCountryFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Countries</SelectItem>
                    <SelectItem value="nigeria">Nigeria</SelectItem>
                    <SelectItem value="kenya">Kenya</SelectItem>
                    <SelectItem value="senegal">Senegal</SelectItem>
                    <SelectItem value="morocco">Morocco</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleExport} className="gap-2">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Metrics */}
      <div className="container mx-auto px-4">
        <div>
          <h2 className="mb-6">{t.analytics.overview}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockAnalyticsMetrics.map((metric) => {
              const icons: Record<string, React.ReactNode> = {
                'Total Users': <Users className="h-5 w-5" />,
                'Page Views': <Eye className="h-5 w-5" />,
                'Training Enrollments': <TrendingUp className="h-5 w-5" />,
                'Campaign Downloads': <Clock className="h-5 w-5" />,
              };
              return (
                <MetricCard
                  key={metric.id}
                  metric={metric}
                  icon={icons[metric.metric]}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Engagement Chart */}
      <div className="container mx-auto px-4">
        <EngagementChart data={mockEngagementData} />
      </div>

      {/* Geographic Distribution */}
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <h3>{t.analytics.geography}</h3>
            <p className="text-sm text-gray-600">User sessions by country</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockGeoData.map((geo) => {
                const country = COUNTRIES[geo.country];
                const totalSessions = mockGeoData.reduce((sum, g) => sum + g.sessions, 0);
                const percentage = ((geo.sessions / totalSessions) * 100).toFixed(1);

                return (
                  <div
                    key={geo.country}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="text-2xl">{country.flag}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span>{country.name}</span>
                          <span className="text-sm text-gray-600">{percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ml-6 text-right">
                      <div>{geo.sessions.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">sessions</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Device Distribution */}
      <div className="container mx-auto px-4">
        <DeviceDistribution data={mockDeviceData} />
      </div>

      {/* Session Metrics */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <h4 className="text-sm text-gray-600">{t.analytics.metrics.avgSessionDuration}</h4>
            </CardHeader>
            <CardContent>
              <div className="text-3xl">4:15</div>
              <p className="text-sm text-gray-600">minutes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h4 className="text-sm text-gray-600">{t.analytics.metrics.bounceRate}</h4>
            </CardHeader>
            <CardContent>
              <div className="text-3xl">40.5%</div>
              <p className="text-sm text-gray-600">of sessions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h4 className="text-sm text-gray-600">Pages per Session</h4>
            </CardHeader>
            <CardContent>
              <div className="text-3xl">3.8</div>
              <p className="text-sm text-gray-600">average</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Export Options */}
      <div className="container mx-auto px-4 pb-8">
        <Card className="bg-gradient-to-r from-orange-50 to-blue-50 border-orange-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="mb-2">Export Detailed Analytics</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Download comprehensive analytics data for deeper analysis and reporting
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={exportFormat === 'csv' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setExportFormat('csv')}
                  >
                    CSV Format
                  </Button>
                  <Button
                    variant={exportFormat === 'excel' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setExportFormat('excel')}
                  >
                    Excel Format
                  </Button>
                  <Button
                    variant={exportFormat === 'pdf' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setExportFormat('pdf')}
                  >
                    PDF Report
                  </Button>
                </div>
              </div>
              <Button onClick={handleExport} size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Export as {exportFormat.toUpperCase()}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
