import { Link } from "remix";

const Index = () => (
  <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <h1>Welcome to Remix</h1>
    <ul>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
    </ul>
  </div>
);

export default Index;
