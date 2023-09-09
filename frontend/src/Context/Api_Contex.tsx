import { createContext, useState } from "react";

type ApiContextType = {
  createGroup: () => void;
  createChannel: () => void;
};

const Api_Context = createContext<ApiContextType>({} as ApiContextType);

const ApiContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [channel, setChannel] = useState<string>("");
  const createGroup = () => {
    console.log("create group");
  };
  const createChannel = async () => {
    const channel_name = prompt("Enter channel name") || ""
    console.log("create channel");
    setChannel(channel_name)
    try {
      // console.log(channel)
      // if (!channel) return
      const res = await fetch("http://localhost:5000/api/v1/group/122/new/channel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          channelName: channel_name
        }),
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await res.json();
      console.log(data);
    }
    catch (err: any) {
      console.log(err)
    }
  };

  const ApiContextValue: ApiContextType = {
    createGroup,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    createChannel,
  };
  return (
    <Api_Context.Provider value={ApiContextValue}>
      {children}
    </Api_Context.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { Api_Context, ApiContextProvider };
