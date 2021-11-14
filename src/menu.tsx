import { useRecoilState } from "recoil";
import { view as viewAtom } from "./atoms";

const Menu = () => {
  const viewOptions = ["5", "10", "15"];
  const [view, setView] = useRecoilState(viewAtom);
  return (
    <nav className="menu">
      {viewOptions.map((v) => (
        <button
          className={`menu-item ${view === v ? "text-bold" : ""}`}
          onClick={() => setView(v)}
          key={v}
        >
          Trending {v} /
        </button>
      ))}
    </nav>
  );
};

export default Menu;
