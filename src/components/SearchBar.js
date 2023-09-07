import React from 'react'
import './ChatRoom.css'
import UserList from './UserList'

export default function SearchBar() {
    return (
        <>
            <div className="offcanvas offcanvas-start rounded d-lg-none me-0" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header ">
                    <div className='align-items-center flex-shrink-0 my-auto py-3 ps-3 link-body-emphasis text-decoration-none'>
                        <i className="bi bi-twitter me-2 fs-4"></i>
                        <span className="fs-4 fw-semibold">Chat App</span>
                    </div>
                    <button type="button" className="btn-close justify-content-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-0 overflow-hidden">
                    <UserList />
                </div>
            </div>


            <div className='d-inline-flex rounded mb-2 border border-secondary w-100 navbar'>
                <div className='d-lg-none ms-2' style={{ height: 'max-content' }}>
                    <button className="btn rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                <a href="/" className="align-items-center flex-shrink-0 name my-auto py-3 ps-3 link-body-emphasis text-decoration-none">
                    <i className="bi bi-twitter me-2 fs-4"></i>
                    <span className="fs-4 fw-semibold">Chat App</span>
                </a>
                <div className="my-auto mx-auto px-2 search-nav">
                    <div className="input-group">
                        <input type="text" placeholder="Search..." name="" className="form-control search" />
                        <div className="input-group-prepend">
                            <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
