import {AppHeader, AppHeaderBackBtn} from "components";
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";
import path from "path";
import fs from "fs";
import {IMessage} from "types/interfaceMassage";

interface IMessageDetail {
  data: IMessage;
}

const MessageDetail = (props: IMessageDetail) => {
  const {title, description, date} = props.data;
  const router = useRouter();
  return (
    <>
      <AppHeader
        body={<h1 className="font-bold ml-6">پیام ها</h1>}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
        classNameContainer="border-b-2 mb-4"
      />
      <div className="mx-8">
        <div className="flex justify-between ">
          <h1 className="font-bold text-[24px] text-[#2C3036]">{title}</h1>
          <p className="text-[10px] w-48 mt-2 mr-4 text-left">{date}</p>
        </div>
        <p className="mt-4">{description} </p>
      </div>
    </>
  );
};

export default MessageDetail;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const messageId = params?.id;
  const filePath = path.join(process.cwd(), "src", "utils", "fakeMessages.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());
  const message = data.blogs.find((message: IMessage) => message.id === messageId);
  return {
    props: {
      data: message,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {params: {id: "1"}},
      {params: {id: "2"}},
      {params: {id: "3"}},
      {params: {id: "4"}},
      {params: {id: "5"}},
      {params: {id: "6"}},
      {params: {id: "7"}},
      {params: {id: "8"}},
    ],
    fallback: false,
  };
};
