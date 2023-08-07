import {GetStaticProps, GetStaticPaths} from "next";
import path from "path";
import fs from "fs";
import HeaderImage from "view/blogDetail/component/HeaderImage";
import {IBlog} from "types/interfaceBlog";

interface IBlogDetail {
  data: IBlog;
}

export default function BlogDetailPage(props: IBlogDetail) {
  const {data} = props;
  return (
    <>
      <HeaderImage image={data.mainImage} />
      <div>
        {data.blog.map((item) => (
          <>
            <h1 className="text-[16px] font-bold my-6 px-6 md:px-0">{item?.title}</h1>
            <p className="text-[13px] leading-8	px-6 md:px-0 text-iconColor text-justify">{item.description}</p>
          </>
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const blogId = params?.id;
  const filePath = path.join(process.cwd(), "src", "utils", "fakeBlogs.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());
  const blog = data.blogs.find((blog: IBlog) => blog.id === blogId);
  return {
    props: {
      data: blog,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{params: {id: "1"}}, {params: {id: "2"}}, {params: {id: "3"}}, {params: {id: "4"}}, {params: {id: "5"}}],
    fallback: false,
  };
};
