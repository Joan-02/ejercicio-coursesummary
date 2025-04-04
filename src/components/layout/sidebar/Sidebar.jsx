import { Tag } from "../tag/Tag";
import { Nav } from "../nav/Nav";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <>
      <aside className="sidebar-aside">
        <Tag />
        <Nav />
        <Tag />
      </aside>
    </>
  );
}
