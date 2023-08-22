import {IconRoundedLeft} from "assets/icons";
import {AppHeader, AppHeaderBackBtn} from "components";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import path from "path";
import fs from "fs";
import Link from "next/link";

interface IMessage {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface IMessageListPage {
  data: IMessage[];
}

const MessageListPage = (props: IMessageListPage) => {
  const {data} = props;
  const router = useRouter();
  return (
    <>
      <AppHeader
        body={<h1 className="font-bold ml-6">پیام ها</h1>}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
      {data.map((message) => (
        <Link
          href={`/messages/${message.id}`}
          key={message.id}
          className="bg-white flex mx-2 rounded-lg gap-1 p-1 my-2"
        >
          <div>
            <img className="rounded-[20px]" src={message.image} />
          </div>

          <div className="w-full">
            <div className="flex justify-between items-center">
              <h5 className="text-[11px] font-bold">{message.title}</h5>
              <div className="flex">
                <span className="text-[9px] mr-2">{message.date}</span>
                <IconRoundedLeft className="w-3 mr-1" />
              </div>
            </div>
            <p className="text-[11px] mt-1">{message.description.slice(0, 100) + "..."}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default MessageListPage;

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "src", "utils", "fakeMessages.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());
  return {
    props: {
      data: data.blogs,
    },
  };
};
