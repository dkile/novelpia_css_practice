import { Footer } from "../components/commons";

const MainLayout = (props) => {
  return (
    <div>
      <body>{props.childeren}</body>
      <Footer />
    </div>
  );
};

export default MainLayout;
