import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  let updatedAtText = "Carregando...";
  let connectionsText = "";
  let maxConnectionsText = "";
  let versionText = "";

  if (!isLoading) {
    const databaseDependencies = data.dependencies.database;
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
    connectionsText = databaseDependencies.opened_connections;
    maxConnectionsText = databaseDependencies.max_connections;
    versionText = databaseDependencies.version;
  }
  return (
    <div>
      <p>
        <strong>Ultima atualização:</strong> {updatedAtText}
      </p>
      <p>
        <strong>Versão do Postgres:</strong> {versionText}
      </p>
      <p>
        <strong>Conexões:</strong> {connectionsText} / {maxConnectionsText}
      </p>
    </div>
  );
}
