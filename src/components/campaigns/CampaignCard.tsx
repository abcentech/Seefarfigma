import { Play, FileAudio, FileImage, FileText, Eye, Download, Share2, Clock } from 'lucide-react';
import type { Campaign } from '../../types';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CampaignCardProps {
  campaign: Campaign;
  onView?: () => void;
}

export function CampaignCard({ campaign, onView }: CampaignCardProps) {
  const { t } = useLanguage();

  const mediaTypeIcons = {
    video: <Play className="h-5 w-5" />,
    audio: <FileAudio className="h-5 w-5" />,
    infographic: <FileImage className="h-5 w-5" />,
    document: <FileText className="h-5 w-5" />,
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gray-100">
        <ImageWithFallback
          src={campaign.thumbnailUrl}
          alt={campaign.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 left-2">
          <Badge className="bg-white/90 text-gray-900 gap-1">
            {mediaTypeIcons[campaign.mediaType]}
            <span>{t.campaigns.mediaTypes[campaign.mediaType]}</span>
          </Badge>
        </div>
        {campaign.duration && (
          <div className="absolute bottom-2 right-2">
            <Badge className="bg-black/70 text-white gap-1">
              <Clock className="h-3 w-3" />
              {formatDuration(campaign.duration)}
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 flex-1">{campaign.title}</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          {campaign.country.map((country) => (
            <Badge key={country} variant="outline" className="text-xs">
              {country}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-gray-600 text-sm line-clamp-2">{campaign.description}</p>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 border-t pt-4">
        {/* Stats */}
        <div className="flex items-center justify-between w-full text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            <span>{campaign.views.toLocaleString()} {t.campaigns.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            <span>{campaign.downloads.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Share2 className="h-3 w-3" />
            <span>{campaign.shares.toLocaleString()}</span>
          </div>
        </div>

        {campaign.fileSize && (
          <div className="text-xs text-gray-500 w-full">
            File size: {formatFileSize(campaign.fileSize)}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 w-full">
          <Button
            className="flex-1"
            onClick={onView}
            asChild={!onView}
          >
            {onView ? (
              <span>View</span>
            ) : (
              <a href={`/campaigns/${campaign.slug}`}>View</a>
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label={t.common.download}
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label={t.common.share}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Tags */}
        {campaign.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 w-full">
            {campaign.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
