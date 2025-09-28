import { X } from 'lucide-react';
import './Sidebar.css';
import { useState } from 'react';
function SideBar({ setIsSidebarvisible}) {
    return (
        <div>
            <div className='cover'>x</div>
            <div className='sidebar-container'>
                <div className="sidebar-row">
                    <p>Edit profile</p>
                    <button onClick={()=>setIsSidebarvisible(false)} id='sidebar-close-button'><X size={10}/></button>
                </div>
                <div className="sidebar-row">
                    <div>Name: </div>
                    <input />
                </div>
                <div className="sidebar-row">
                    <div>Username: </div>
                    <input />
                </div>
                <div style={{ marginTop: "auto" }}>
                    <div className="sidebar-row">
                        <button>Submit</button>
                    </div>
                    <div className="sidebar-row">
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function SideBarDemo() {
    const [issidebarVisibile, setIsSidebarvisible] = useState(true);
    return (
        <div>
            <button onClick={()=>setIsSidebarvisible(true)}>Show sidebar</button>
            {issidebarVisibile && <SideBar setIsSidebarvisible={setIsSidebarvisible} />}
        </div>
    )
}