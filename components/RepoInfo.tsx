import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RepoData } from "@/types/github";

interface RepoInfoProps {
  data: RepoData;
}

export function RepoInfo({ data }: RepoInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.full_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{data.description}</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm font-medium">Stars</p>
            <p className="text-2xl font-bold">{data.stargazers_count}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Forks</p>
            <p className="text-2xl font-bold">{data.forks_count}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Open Issues</p>
            <p className="text-2xl font-bold">{data.open_issues_count}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
