import { useState } from 'react';
import { ChevronDown, ThumbsUp, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { FAQ } from '../../types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  // Filter FAQs by category
  const filteredFAQs =
    selectedCategory === 'all'
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  // Separate myths from regular FAQs
  const myths = filteredFAQs.filter((faq) => faq.isMyth);
  const regularFAQs = filteredFAQs.filter((faq) => !faq.isMyth);

  return (
    <div className="space-y-6">
      <div>
        <h2>{t.infoHub.faq}</h2>
        <p className="text-gray-600 mt-2">
          Find answers to common questions about safe migration
        </p>
      </div>

      <Tabs defaultValue="faqs" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="faqs">
            {t.infoHub.faq}
          </TabsTrigger>
          <TabsTrigger value="myths" className="gap-2">
            {t.infoHub.mythVsFact}
            {myths.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {myths.length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        {/* Category Filter */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All' : category}
            </Button>
          ))}
        </div>

        <TabsContent value="faqs" className="space-y-4">
          {regularFAQs.length === 0 ? (
            <p className="text-center py-8 text-gray-500">
              No FAQs found for this category
            </p>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {regularFAQs.map((faq, index) => (
                <AccordionItem key={faq.id} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    <span className="flex items-start gap-3">
                      <span>{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p className="text-gray-700">{faq.answer}</p>
                      <div className="flex items-center gap-4 pt-2 border-t">
                        <Badge variant="outline">{faq.category}</Badge>
                        <button
                          className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          aria-label="Helpful"
                        >
                          <ThumbsUp className="h-4 w-4" />
                          <span>{faq.votes}</span>
                        </button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </TabsContent>

        <TabsContent value="myths" className="space-y-4">
          {myths.length === 0 ? (
            <p className="text-center py-8 text-gray-500">
              No myths found for this category
            </p>
          ) : (
            <div className="space-y-4">
              {myths.map((myth) => (
                <div
                  key={myth.id}
                  className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-2">
                      <h4 className="text-red-900">{myth.question}</h4>
                      <p className="text-red-800">{myth.answer}</p>
                      <div className="flex items-center gap-4 pt-2">
                        <Badge variant="destructive">MYTH</Badge>
                        <Badge variant="outline">{myth.category}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
