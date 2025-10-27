import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Smartphone, Tablet, Monitor } from 'lucide-react';
import type { DeviceData } from '../../types';
import { Card, CardContent, CardHeader } from '../ui/card';

interface DeviceDistributionProps {
  data: DeviceData[];
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

const deviceIcons = {
  mobile: <Smartphone className="h-4 w-4" />,
  tablet: <Tablet className="h-4 w-4" />,
  desktop: <Monitor className="h-4 w-4" />,
};

export function DeviceDistribution({ data }: DeviceDistributionProps) {
  return (
    <Card>
      <CardHeader>
        <h3>Device Distribution</h3>
        <p className="text-sm text-gray-600">User sessions by device type</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full lg:w-1/2 space-y-3">
            {data.map((device, index) => (
              <div
                key={device.deviceType}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded"
                    style={{ backgroundColor: `${COLORS[index % COLORS.length]}20` }}
                  >
                    <div style={{ color: COLORS[index % COLORS.length] }}>
                      {deviceIcons[device.deviceType]}
                    </div>
                  </div>
                  <div>
                    <p className="capitalize">{device.deviceType}</p>
                    <p className="text-sm text-gray-600">
                      {device.sessions.toLocaleString()} sessions
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p>{device.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
