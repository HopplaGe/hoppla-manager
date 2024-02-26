import {navItems} from "@/config/nav.config.ts";

const Sidebar = () => {
    return (
        <div className="h-full w-72 border-r pt-4 px-5 fira-go">
            <p className="text-xs font-medium text-gray-400">ნავიგაცია</p>
            <div
                className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                მთავარი
            </div>

            <p className="text-xs font-medium text-gray-400 mt-8">მართვა</p>
            {
                navItems.map((item, index) => (
                    <div
                        key={index}
                        className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
                        <item.icon className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500"/>
                        {item.label}
                    </div>
                ))
            }

        </div>
    );
};

export default Sidebar;
