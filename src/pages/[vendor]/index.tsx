import React from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";
import {vendorsAddress} from "utils/Const";

function VendorsPage() {
  const router = useRouter();
  return (
    <div>
      <span>vendor: </span>
      <span>{router.query.vendor}</span>
    </div>
  );
}

export default VendorsPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = vendorsAddress.map((item) => ({params: {vendor: item.name}}));
  return {
    paths,
    fallback: false,
  };
};
