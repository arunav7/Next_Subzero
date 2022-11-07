import { useRouter } from 'next/router';

export default function ClientsProductsPage() {
  const router = useRouter();
  const { cpId: clientProjectId, id } = router.query;
  return (
    <div>
      <h1>
        {' '}
        {id} project page : {clientProjectId}{' '}
      </h1>
    </div>
  );
}
