import {FC, useEffect, useState} from "react";

const privateRoute = (Component: FC<any>) => {
  return function HOC(props: any) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setIsLoading(false), 2000);
    }, []);
    if (isLoading) return <div>loading ...</div>;

    return <Component {...props} />;
  };
};

export default privateRoute;
