import { createFileRepositoryTools } from "../app/file-repository-tools";

// Configuration of the repository to avoid the "constrained construction" antipattern
export const repositoryTools = createFileRepositoryTools(
  __dirname + "/test-file-repository.json",
);
