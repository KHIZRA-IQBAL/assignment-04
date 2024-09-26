// app/dashboard/page.tsx
const Dashboard = async () => {
  // Fetch data from a third-party API
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API URL
  const res = await fetch(apiUrl);
  const post = await res.json();
  return (
    <div className="bg-slate-700 text-slate-50  ">
      <h1 className="text-center text-4xl pt-3 pb-5 ">Welcome to your Dashboard</h1>
      <div>
        <h1 className="text-center text-3xl">Post List</h1>
        <ul className="text-white pl-4" >
          {post.map((post: { id: number; title: string; price: number;body:string}) => (
            <li key={post.id} className="pb-4">
              {`${post.id}:${post.title}`}
               ${post.price}
              {post.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
