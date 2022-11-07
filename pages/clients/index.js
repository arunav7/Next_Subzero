import Link from 'next/link';

export default function ClientsPage() {
  const clients = [
    { id: 'arunav', name: 'Arunav' },
    { id: 'harsh', name: 'Harsh' },
  ];

  return (
    <div>
      <h1>Clients Home page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
