import { useState } from 'react';
import { Search, Filter, Grid3x3, List } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CampaignCard } from '../components/campaigns/CampaignCard';
import { mockCampaigns } from '../lib/mockData';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Badge } from '../components/ui/badge';

export function CampaignLibraryPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [mediaTypeFilter, setMediaTypeFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter campaigns
  const filteredCampaigns = mockCampaigns.filter((campaign) => {
    const matchesSearch =
      !searchQuery ||
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      mediaTypeFilter === 'all' || campaign.mediaType === mediaTypeFilter;
    return matchesSearch && matchesType;
  });

  // Group campaigns by category
  const featuredCampaigns = filteredCampaigns.filter((c) =>
    c.category === 'awareness' && c.views > 10000
  );

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 px-4">
        <div className="container mx-auto text-center space-y-4">
          <h1>{t.campaigns.title}</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            {t.campaigns.subtitle}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={`${t.common.search} campaigns...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={mediaTypeFilter} onValueChange={setMediaTypeFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Media Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="video">{t.campaigns.mediaTypes.video}</SelectItem>
              <SelectItem value="audio">{t.campaigns.mediaTypes.audio}</SelectItem>
              <SelectItem value="infographic">{t.campaigns.mediaTypes.infographic}</SelectItem>
              <SelectItem value="document">{t.campaigns.mediaTypes.document}</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">
              {t.campaigns.allCampaigns}
              <Badge variant="secondary" className="ml-2">
                {filteredCampaigns.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="featured">
              {t.campaigns.featured}
              <Badge variant="secondary" className="ml-2">
                {featuredCampaigns.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            {filteredCampaigns.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No campaigns found matching your filters</p>
              </div>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-4'
                }
              >
                {filteredCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="featured" className="mt-6">
            {featuredCampaigns.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No featured campaigns available</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Stats Banner */}
      <div className="container mx-auto px-4">
        <div className="bg-purple-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2 text-purple-600">
                {mockCampaigns.length}
              </div>
              <p className="text-gray-600">Total Campaigns</p>
            </div>
            <div>
              <div className="text-3xl mb-2 text-purple-600">
                {mockCampaigns.reduce((sum, c) => sum + c.views, 0).toLocaleString()}
              </div>
              <p className="text-gray-600">Total Views</p>
            </div>
            <div>
              <div className="text-3xl mb-2 text-purple-600">
                {mockCampaigns.reduce((sum, c) => sum + c.downloads, 0).toLocaleString()}
              </div>
              <p className="text-gray-600">Total Downloads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
