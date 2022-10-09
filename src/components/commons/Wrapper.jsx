const Wrapper = (props) => {
  return (
    <div
      css={{
        width: "100%",
      }}
      {...props}
    >
      <div
        css={{
          width: "100%",
          maxWidth: "120rem",
          margin: "0 auto",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Wrapper;
