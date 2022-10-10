import Banner from "../components/commons/Banner";
import RealtimeHot from "../components/Home/RealtimeHot";
import ServiceNav from "../components/Home/ServiceNav";
import TopicNovelList from "../components/Novel/TopicNovelList";
import Layout from "../layouts";

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <ServiceNav />
      <TopicNovelList />
      <RealtimeHot />
      <TopicNovelList />
      <TopicNovelList />
    </Layout>
  );
};

export default HomePage;
