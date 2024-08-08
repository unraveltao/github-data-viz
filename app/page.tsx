import RepoAnalyzer from "@/components/RepoAnalyzer";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        GitHub Repository Analyzer
      </h1>
      <RepoAnalyzer />
    </main>
  );
}
