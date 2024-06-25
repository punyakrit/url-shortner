import { useSearchParams } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import Login from "../components/Login";
import Signup from "../components/Signup";

function Auth() {
  const [searchParam] = useSearchParams();
  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="text-4xl font-extrabold py-10">
        {searchParam.get("createNew")
          ? "Hold Up !! Lets Login First"
          : " Login / Signup"}
      </div>
      <div>
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">SignUp</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
           <Login/>
          </TabsContent>
          <TabsContent value="signup"><Signup/></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Auth;
