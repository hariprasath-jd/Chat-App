import React, { useState } from 'react'
import UserList from './UserList'
import ChatRoom from './ChatRoom'
import SearchBar from './SearchBar'
import '../Styles/CommonStyle.css'


export default function ChatApp() {
    const [icon, setIcon] = useState('');
    const [IsOpen,setIsOpen] = useState(false)

    const handleIconClick = () => {
        if(IsOpen){
            setIcon('');
            setIsOpen(false)
        }
        else{
            setIcon('rotate');
            setIsOpen(true);
        }
    }

    return (
        <>
            <div className='row pt-1 mx-1 '>
                <div className='d-lg-none py-1 px-0' style={{ height: 'max-content' }}>
                    <SearchBar />
                </div>

                <div className='col-sm-3 d-none d-lg-block p-0 m-1 overflow-hidden rounded'>
                    <div className="d-flex flex-column align-items-stretch flex-shrink-0 overflow-hidden" style={{ maxHeight: '98.4svh' }} >
                        <SearchBar />
                        <UserList />
                    </div>
                    <div
                        className={`rounded-circle position-absolute bottom-0 end-0 me-3 mb-3 bg-info text-dark add-icon d-flex justify-content-center ${icon}`}
                        onClick={() => { handleIconClick() }}>
                        <i className="bi bi-plus-lg fs-1 pt-1 align-items-center"></i>
                    </div>
                </div>
                <div className='col-md border p-0 border-secondary rounded me-auto my-1 me-lg-1' style={{ minHeight: '85svh' }}><ChatRoom /></div>
            </div>
        </>
    )
}
