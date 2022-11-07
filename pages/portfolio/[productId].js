import { useRouter } from 'next/router';

export default function ProductIdPage() {
  const router = useRouter();
  console.log(router);
  const { productId } = router.query;
  return (
    <div>
      <h1> Product list page : {productId} </h1>
    </div>
  );
}
