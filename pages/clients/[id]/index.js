import { useRouter } from 'next/router';

export default function ClientsIdPage() {
  // const clients = [
  //   { id: 'arunav', cpId: 'Project A' },
  //   { id: 'harsh', cpId: 'Project H' },
  // ];

  const router = useRouter();
  const { id } = router.query;

  const loadProjectHandler = () => {
    router.push('/clients/arunav/projectA');
    // clients.forEach((client) => {
    //   router.push({
    //     pathname: '/clients/[id]/[cpId]',
    //     query: { id: client.id, cpId: client.cpId },
    //   });
    // });
  };

  return (
    <div>
      <h1>Specific Client page: {id}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
