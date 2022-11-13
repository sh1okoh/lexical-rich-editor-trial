import React from "react";

const index = ({ item } : Record<string, any>) => {
  console.log(item);
  return <div>{item}</div>;
};

export default index;

export const getServerSideProps = async () => {
  console.log("hello next.js");
  return {
    props: {
      item: "hello world",
    },
  };
};