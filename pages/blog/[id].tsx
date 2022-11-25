import { useRouter } from 'next/router';
import posts from '../../posts.json';

const Page = () => {
  const router = useRouter();
  const { pid } = router.query;
  console.log('router.query', router.query);
  const post = posts[pid];
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {Object.entries(posts).map((value, index) => {
          return <li key={index}>{value[1].title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Page;
