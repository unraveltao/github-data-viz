"use client";

import { useState } from "react";
import { RepoForm } from "./RepoForm";
import { RepoInfo } from "./RepoInfo";
import { RepoCharts } from "./RepoCharts";
import { RepoData } from "@/types/github";

export default function RepoAnalyzer() {
  const [repoData, setRepoData] = useState<RepoData | null>(null);

  const fetchRepoData = async (owner: string, repo: string) => {
    try {
      const response = await fetch(`/api/repo?owner=${owner}&repo=${repo}`);
      if (!response.ok) throw new Error("Failed to fetch repo data");
      const data = await response.json();
      setRepoData(data);
    } catch (error) {
      console.error("Error fetching repo data:", error);
      // Here you could set an error state and display it to the user
    }
  };

  return (
    <div className="space-y-8">
      <RepoForm onSubmit={fetchRepoData} />
      {repoData && (
        <>
          <RepoInfo data={repoData} />
          <RepoCharts data={repoData} />
        </>
      )}
    </div>
  );
}
