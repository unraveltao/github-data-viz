import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RepoData } from "@/types/github";

interface RepoChartsProps {
  data: RepoData;
}

export function RepoCharts({ data }: RepoChartsProps) {
  const chartData = [
    { name: "Stars", value: data.stargazers_count },
    { name: "Forks", value: data.forks_count },
    { name: "Open Issues", value: data.open_issues_count },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Repository Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
