import { useRouter } from 'next/router';

export default function BlogSlugs() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1> All routes page </h1>
    </div>
  );
}
