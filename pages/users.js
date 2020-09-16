import useSWR from "swr";

export default function Users() {
  const { data, error } = useSWR("/api/users");

  if (error) return <p>fail</p>;

  if (!data) return <p>Loading</p>;

  if (data) console.log(data);

  return (
    <div>
      <h1>USERS</h1>
      <ul>
        {data.map(d => (
            <li key={d.id}>{d.name}, {d.email}</li>
        ))}
      </ul>
    </div>
  );
}
