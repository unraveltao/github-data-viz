import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface RepoFormProps {
  onSubmit: (owner: string, repo: string) => void;
}

export function RepoForm({ onSubmit }: RepoFormProps) {
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(owner, repo);
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        placeholder="Repository Owner"
        required
      />
      <Input
        value={repo}
        onChange={(e) => setRepo(e.target.value)}
        placeholder="Repository Name"
        required
      />
      <Button type="submit">Analyze</Button>
    </form>
  );
}
