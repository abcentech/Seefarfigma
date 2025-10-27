import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CountrySelector } from '../components/info-hub/CountrySelector';
import { FAQSection } from '../components/info-hub/FAQSection';
import { ArticleCard } from '../components/info-hub/ArticleCard';
import { mockInfoArticles, mockFAQs } from '../lib/mockData';
import type { Country } from '../types';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function InfoHubPage() {
  const { t } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles by country and search query
  const filteredArticles = mockInfoArticles.filter((article) => {
    const matchesCountry = !selectedCountry || article.country === selectedCountry;
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  // Filter FAQs by country
  const filteredFAQs = selectedCountry
    ? mockFAQs.filter((faq) => faq.country === selectedCountry)
    : mockFAQs;

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto text-center space-y-4">
          <h1>{t.infoHub.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t.infoHub.subtitle}
          </p>
        </div>
      </div>

      {/* Country Selector */}
      <div className="container mx-auto px-4">
        <CountrySelector
          selectedCountry={selectedCountry}
          onCountrySelect={setSelectedCountry}
        />
      </div>

      {/* Content Tabs */}
      {selectedCountry && (
        <div className="container mx-auto px-4">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="faq">{t.infoHub.faq}</TabsTrigger>
              <TabsTrigger value="decision">{t.infoHub.decisionTree}</TabsTrigger>
            </TabsList>

            {/* Articles Tab */}
            <TabsContent value="articles" className="space-y-6">
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder={t.common.search}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  {t.common.filter}
                </Button>
              </div>

              {/* Articles Grid */}
              {filteredArticles.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No articles found for the selected filters</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq">
              <FAQSection faqs={filteredFAQs} />
            </TabsContent>

            {/* Decision Tree Tab */}
            <TabsContent value="decision">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                <h3 className="mb-4">Migration Decision Guide</h3>
                <p className="text-gray-600 mb-6">
                  Answer a series of questions to get personalized guidance for your migration journey.
                </p>
                <Button size="lg">Start Decision Guide</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {/* Call to Action */}
      {!selectedCountry && (
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-600">
              Select your country above to access localized migration information and resources
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
