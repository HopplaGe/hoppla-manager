import logoImage from '@/assets/logo.svg';
import { Button } from "@/components/ui/button";
import { Minus, Square, X } from "lucide-react";
import { ipcRenderer } from "electron";

type NavbarProps = {
    users: {
        name: string;
        email: string;
        image: string;
    }[];
}

const Navbar = ({ users }: NavbarProps) => {


    return (
        <div className=" border-b px-5 py-1 flex justify-between items-center draggable">
            <span className="draggable">
                <img src={logoImage} className={"w-20"} alt={"Hoppla"} />
            </span>

            <div className=" w-1/2 relative focus-within:shadow-lg not-draggable rounded-xl">
                <div
                    className="flex items-center w-full px-3 py-2 fira-go">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-slate-300 mr-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="ძებნა.."
                        className=" w-full outline-none placeholder:text-default-400 text-sm" />
                </div>

                <div className="hidden absolute w-full border bg-white">
                    <div className="px-4 py-1 flex justify-between items-center border-b">
                        <p className="text-sm font-medium text-slate-600">Recent Search</p>
                        <p className="text-xs text-slate-400 cursor-pointer">Clear All</p>

                    </div>
                    <div
                        className="w-full px-4 py-3 border-b last:border-b-0 flex items-start hover:bg-slate-50 cursor-pointer">
                        <img src={users[0].image} className="h-12 w-12 border rounded-full" alt="" />
                        <div className="ml-4">
                            <p className="text-md font-semibold text-slate-600 m-0 p-0">{users[0].name}</p>
                            <p className="text-xs text-slate-400 -mt-0.5">{users[0].email}</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex space-x-4 items-center not-draggable">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                        console.log("clicked");
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-400 " fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </Button>
                <img src="https://source.unsplash.com/random/500x500/?face" className="h-8 w-8 rounded-xl"
                    alt="" />
                <div className={"flex items-center space-x-2"}>


                    <Button
                        variant="minimize"
                        size="icon-sm"
                        onClick={() => ipcRenderer.send("minimize")}
                    >
                        <Minus size={14} />
                    </Button>
                    <Button
                        variant="maximize"
                        size="icon-sm"
                        onClick={() => ipcRenderer.send("maximize")}
                    >
                        <Square size={14} />
                    </Button>
                    <Button
                        variant="close"
                        size="icon-sm"
                        onClick={() => ipcRenderer.send("close")}
                    >
                        <X size={14} />
                    </Button>
                </div>

            </div>

        </div >
    );
};

export default Navbar;
