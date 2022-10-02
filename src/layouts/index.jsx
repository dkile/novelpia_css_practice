import { Header, Footer } from "../components/commons";

const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <section>{props.childeren}</section>
      <Footer />
    </div>
  );
};

export default MainLayout;
