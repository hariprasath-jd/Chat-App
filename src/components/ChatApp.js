import React from 'react'
import UserList from './UserList'
import ChatRoom from './ChatRoom'
import SearchBar from './SearchBar'


export default function ChatApp() {
    return (
        <>
            <div className='row pt-1 mx-1 me-1'>
                <div className='d-lg-none m-1 main-nav' style={{ height: 'max-content' }}>
                    <SearchBar />
                </div>

                <div className='col-md-3 d-none d-lg-block p-0 m-1 overflow-hidden rounded'>
                    <div className="d-flex flex-column align-items-stretch flex-shrink-0 overflow-hidden" style={{ maxHeight: '98.4svh' }} >
                        <SearchBar />
                        <UserList />
                    </div>
                </div>
                <div className='col-md border m-1 p-0 border-secondary rounded main-room' style={{ minHeight: '85svh' }}><ChatRoom /></div>
            </div>
        </>
    )
}
