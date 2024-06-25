import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkIcon, LogOutIcon } from "lucide-react";

function Header() {
  const navigate = useNavigate();
  const user = false;
  return (
    <nav className="p-6 flex justify-between items-center">
      <Link to={'/'}>
        <img src="https://ashallendesign.co.uk/images/custom/short-url-logo.png" className="w-40 "></img>
      </Link>
      <div>
        {!user ? (
          <Button
            onClick={() => {
              navigate("/auth");
            }}
          >
            Login
          </Button>
        ) : (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full overflow-hidden">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>PM</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Punyakrit Singh Makhni </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><LinkIcon className="mr-2 h-4 w-4"/>Links</DropdownMenuItem>
                <DropdownMenuItem className="text-red-400">
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
