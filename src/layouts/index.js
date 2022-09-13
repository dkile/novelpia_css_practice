import { Header, Footer } from "../components/commons";

const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <body>{props.childeren}</body>
      <Footer />
    </div>
  );
};

export default MainLayout;
