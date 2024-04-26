import clsx from "clsx";
import MobileMenu from "./mobile-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { routes } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Logout } from "@/app/action";

const AppDrawer = ({ user }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size="icon" className="">
          <Menu width={20} height={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className="flex flex-col items-center justify-center">
          <SheetTitle>
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </SheetTitle>
          <SheetDescription>
            {user ? (
              user?.first_name || user?.last_name
            ) : (
              <div>
                <span className="inline-block mr-2">already singin?</span>
                <Link href="/login" className="text-red-500">
                  Login
                </Link>
              </div>
            )}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {routes.map((route) => (
            <MobileMenu
              key={route.routeName}
              values={route}
              routedriectry={route.href}
              title={route.routeName}
              subMenu={route.children ? route.children : []}
            />
          ))}
        </div>
        {user ? (
          <Button className="w-full" onClick={() => Logout()}>
            <LogOut />
            <span className="mr-2">LogOut</span>
          </Button>
        ) : (
          ""
        )}
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AppDrawer;
