import { FunctionComponent, PropsWithChildren, useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person, User } from "@/utils/common/person";
import ProfileCard from "@/components/ProfileCard";
import Skeleton from "@/components/Skeleton";
import { fetchData } from "@/utils/client/fetchData";
import DateTime from "@/components/DateTime";
import EnableConsole from "@/components/EnableConsole";
import useOverrideConsole from "@/hooks/useOverrideConsole";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const datas = useOverrideConsole()
  const [selectedValue, setSelectedValue] = useState<Person | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<User | null>(null);
  const [controller, setController] = useState<AbortController | null>(null);
  const [currentTime, setCurrentTime] = useState('');


  const getCurrentTime = () => {
    const now = new Date();
    const formattedDate = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()}`;
    const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    return `${formattedDate} : ${formattedTime}`;
  };

  const handleClick = useCallback((person: Person) => {
    setSelectedValue(person);
    setLoading(true);
    setError(null);
    setData(null);

    if (controller) {
      controller.abort();
    }

    const newController = new AbortController();
    setController(newController);
    fetchData<User>(`/api/person?person=${person}`, newController.signal)
      .then((result) => {
        setLoading(result.loading);
        if(result.error !=="signal is aborted without reason"){
          setError(result.error);
        }
        setData(result.data);
        console.log(result.data);
      console.log("currentTime : ",getCurrentTime()); 
      }).catch((error) => {
        setError(error.error);
      });
  }, [controller]);

  useEffect(() => {
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [controller]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center",
      )}
    >
      <div className="fixed top-20 right-10">
        <EnableConsole />
      </div>
      <div className={classNames("flex gap-2")}>
        {Object.values(Person).map((person) => (
          <Button key={person} onClick={() => handleClick(person)} selected={selectedValue === person}>{person}</Button>
        ))}
        <button />
      </div>

      {selectedValue && !data && !error ? <div className="mt-5 h-56"> <Skeleton /> </div> : data ?  (
        <div className="mt-5 h-56">   
            <ProfileCard
              user={data}
            />
        </div>
      ) : 
        error &&
        <div className="mt-5 h-32 w-fit flex items-center bg-white px-4 rounded-md"> {error} </div>
      }
      <div className="fixed bottom-20 right-10">
        <DateTime currentTime={currentTime} />
      </div>
    </main>
  );
};
