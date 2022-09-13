const MainLayout = (props) => {
  return (
    <div>
      <body>{props.childeren}</body>
      <footer>
        <div className="footer-top">
          <div className="footer-top-nav">
            <div className="footer-top-nav-main">
              <img src="" alt="" />
            </div>
            <div className="footer-top-nav-sns"></div>
            <div className="footer-top-nav-info"></div>
          </div>
          <div className="footer-top-description"></div>
        </div>
        <div className="footer-bottom">
          <img src="" alt=""></img>
          <div className="footer-bottom-copyright"></div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
