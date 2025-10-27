import { Clock, Calendar, Tag } from 'lucide-react';
import type { InfoArticle } from '../../types';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';

interface ArticleCardProps {
  article: InfoArticle;
  onReadMore?: () => void;
}

export function ArticleCard({ article, onReadMore }: ArticleCardProps) {
  const { t } = useLanguage();

  const categoryColors: Record<string, string> = {
    legal: 'bg-blue-100 text-blue-800',
    safety: 'bg-red-100 text-red-800',
    employment: 'bg-green-100 text-green-800',
    health: 'bg-purple-100 text-purple-800',
    rights: 'bg-orange-100 text-orange-800',
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <Badge className={categoryColors[article.category] || 'bg-gray-100 text-gray-800'}>
            {t.infoHub.categories[article.category as keyof typeof t.infoHub.categories] || article.category}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="h-3 w-3" />
            <span>{article.readTime} min</span>
          </div>
        </div>
        <h3 className="line-clamp-2">{article.title}</h3>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-gray-600 line-clamp-3">{article.content}</p>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 border-t pt-4">
        <div className="flex items-center justify-between w-full text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(article.lastUpdated).toLocaleDateString()}</span>
          </div>
          <span>By {article.author}</span>
        </div>

        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 w-full">
            {article.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                <Tag className="h-2 w-2 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <Button
          className="w-full"
          variant="outline"
          onClick={onReadMore}
          asChild={!onReadMore}
        >
          {onReadMore ? (
            <span>{t.common.readMore}</span>
          ) : (
            <a href={`/info-hub/article/${article.slug}`}>{t.common.readMore}</a>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
