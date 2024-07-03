import Layout from "../components/Layout";
import { useStore } from "../store";

const CategoriesPage = () => {
  const expanded = useStore((state) => state.expanded);

  return (
    <Layout>
      <div
        className="bg-[var(--dark)] h-screen py-20 pt-[90px]"
        style={
          expanded
            ? {
                paddingLeft: "130px",
                paddingRight: "10px",
                transition: "all 0.5s",
              }
            : {
                paddingLeft: "280px",
                paddingRight: "10px",
                transition: "all 0.5s",
              }
        }
      >
        <h2 className="text-white">Categories Page</h2>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
