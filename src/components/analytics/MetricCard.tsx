import { TrendingUp, TrendingDown } from 'lucide-react';
import type { AnalyticsMetric } from '../../types';
import { Card, CardContent, CardHeader } from '../ui/card';

interface MetricCardProps {
  metric: AnalyticsMetric;
  icon?: React.ReactNode;
}

export function MetricCard({ metric, icon }: MetricCardProps) {
  const isPositive = metric.change >= 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h4 className="text-sm text-gray-600">{metric.metric}</h4>
        {icon && <div className="text-gray-400">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl">{metric.value.toLocaleString()}</div>
        <div className="flex items-center gap-1 text-xs mt-1">
          {isPositive ? (
            <TrendingUp className="h-3 w-3 text-green-600" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-600" />
          )}
          <span className={isPositive ? 'text-green-600' : 'text-red-600'}>
            {isPositive ? '+' : ''}
            {metric.change}%
          </span>
          <span className="text-gray-500">vs last {metric.period}</span>
        </div>
      </CardContent>
    </Card>
  );
}
