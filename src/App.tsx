import Navbar from "@/components/partials/Navbar.tsx";
import Page from "@/components/page.tsx";
import Sidebar from "@/components/partials/Sidebar.tsx";

const users = [
    {
        id: 1,
        name: 'Marcel Jones ',
        email: "atuny0@sohu.com",
        phone: "+63 791 675 8914",
        show: false,
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
    },
    {
        id: 2,
        name: 'Sheldon Quigley ',
        "email": "hbingley1@plala.or.jp",
        "phone": "+7 813 117 7139",
        show: false,
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
    },
    {
        id: 3,
        name: 'Leonard Leach ',
        "email": "rshawe2@51.la",
        "phone": "+63 739 292 7942",
        show: true,
        image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
    },


]

function App() {

    return (
        <div className="h-screen w-full">
            <div className=" h-full bg-white overflow-hidden flex flex-col rounded-xl shadow-xl">
                <Navbar users={users}/>
                <div className="h-full flex">
                    <Sidebar/>
                    <Page/>
                </div>
            </div>
        </div>
    )
}

export default App
