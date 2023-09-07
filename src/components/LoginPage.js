import React, { useState } from 'react';
import '../Styles/loginPage.css'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const nav = useNavigate();
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };


    return (
        <div className='my-auto'>
            <MDBContainer fluid >

                <MDBRow>

                    <MDBCol col='10' md='7' className='my-auto d-none d-lg-block'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="my-auto img-fluid" alt="Phone image" />
                    </MDBCol>

                    <MDBCol col='4' md='4' className='mx-auto border border-secondary rounded-4 p-3' style={{ backdropFilter: 'blur(8px)' }}>

                        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                    Login
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                    Register
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>

                        <MDBTabsContent>

                            <MDBTabsPane show={justifyActive === 'tab1'} className='bg-dark'  >

                                <div className="text-center mb-3">
                                    <p>Sign in with:</p>

                                    <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                            <MDBIcon fab icon='facebook-f' size="sm" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                            <MDBIcon fab icon='twitter' size="sm" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                            <MDBIcon fab icon='google' size="sm" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                            <MDBIcon fab icon='github' size="sm" />
                                        </MDBBtn>
                                    </div>

                                    <p className="text-center mt-3">or:</p>
                                </div>

                                <MDBInput wrapperClass='mb-4 w-75 mx-auto' size='lg' placeholder='Email address' id='form1' type='email' />
                                <MDBInput wrapperClass='mb-4 w-75 mx-auto' size='lg' placeholder='Password' id='form2' type='password' />

                                <div className="d-flex justify-content-between mx-4 mb-4">
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                    <a href="!#">Forgot password?</a>
                                </div>
                                <div className='d-lg-none' style={{ minWidth: '82svw' }}>
                                </div>
                                <div className='text-center'>
                                    <button className="mb-4 w-50 btn btn-primary" onClick={() => { nav('/home') }}>Sign in</button>
                                    <p className="text-center">Not a member? <a onClick={() => {handleJustifyClick('tab2')}} className='text-primary text-decoration-underline'>Register</a></p>
                                </div>
                            </MDBTabsPane>

                            <MDBTabsPane show={justifyActive === 'tab2'} className='bg-dark' style={{ minWidth: '85%' }}>

                                <div className="text-center mb-3">
                                    <p>Sign un with:</p>

                                    <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                            <MDBIcon fab icon='facebook-f' size="sm" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                            <MDBIcon fab icon='twitter' size="sm" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                            <MDBIcon fab icon='google' size="sm" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                            <MDBIcon fab icon='github' size="sm" />
                                        </MDBBtn>
                                    </div>

                                    <p className="text-center mt-1">or:</p>
                                </div>

                                <MDBInput wrapperClass='mb-4 w-75 mx-auto' size='lg' placeholder='Name' id='form1' type='text' />
                                <MDBInput wrapperClass='mb-4 w-75 mx-auto' size='lg' placeholder='Mobile No.' id='form1' type='text' />
                                <MDBInput wrapperClass='mb-4 w-75 mx-auto' size='lg' placeholder='Email' id='form1' type='email' />
                                <MDBInput wrapperClass='mb-4 w-75 mx-auto' size='lg' placeholder='Password' id='form1' type='password' />
                                <div className='d-md-none' style={{ minWidth: '82svw' }}>
                                </div>

                                <div className='text-center'>
                                    <button className="mb-4 w-50 btn btn-primary">Sign up</button>
                                </div>
                            </MDBTabsPane>

                        </MDBTabsContent>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    );
}

export default LoginPage;