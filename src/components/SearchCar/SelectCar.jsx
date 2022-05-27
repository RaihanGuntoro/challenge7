import axios from 'axios';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, Card, Col, Row, Button, Form, Container } from 'reactstrap';
import React, { useEffect, useRef, useState } from "react";
import { Navigate } from 'react-router-dom';


const SelectCarMenu = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState({});
    const [cars, setCars] = useState([]);
    const capacityField = useRef();
    const isWithDriverField = useRef();
    const availableAtField = useRef();

    useEffect(() => {

        const fetchData = async () => {
            try {
                // Check status user login
                // 1. Get token from localStorage
                const token = localStorage.getItem("token");

                // 2. Check token validity from API
                const currentUserRequest = await axios.get(
                    "http://localhost:3500/auth/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const currentUserResponse = currentUserRequest.data;

                if (currentUserResponse.status) {
                    setUser(currentUserResponse.data.user);
                }
            } catch (err) {
                setIsLoggedIn(false);
            }
        };

        fetchData();
    }, []);

    const logout = () => {
        localStorage.removeItem("token");

        setIsLoggedIn(false);
        setUser({});
    };

    const filtered = async (e) => {
        e.preventDefault();
        try {

            const dataCars = await axios.get(`http://localhost:3500/cars/filtered?isWithDriver=${isWithDriverField.current.value}&capacity=${capacityField.current.value}&availableAt=${availableAtField.current.value}`)

            const payloadData = await dataCars.data.data.filteredCars;
            console.log(dataCars);
            setCars(payloadData);
        } catch (err) {
            console.log(err);
        }
    }

    return isLoggedIn ? (

        <div>
            {/* NAVBAR */}
            <div className='container header'>
                <div className='container header'>
                    <Navbar
                        color="light"
                        expand="md"
                        light

                    >
                        <NavbarBrand href="/">
                            <img alt='' src='img/logo.png' />
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck() { }} />
                        <Collapse navbar>
                            <Nav
                                className="ms-auto"
                                navbar-nav
                            >
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link text-black mrml-10" href="/cariMobil">Our Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-black mrml-10" href="#WhyUs">Why Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-black mrml-10" href="#Testi">Testimonial</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-black mrml-10" href="#FAQ">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-black mrml-10" >Hello {user.username}</a>
                                    </li>
                                    <button className=" btn-success-red bwhite mrml-10 bold" onClick={(e) => logout(e)}> Log Out </button>
                                </ul>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>

            </div>
            {/* MOBIL */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <h1 className="teksh1 mt-50besar">Sewa & Rental Mobil Terbaik di kawasan Surakarta</h1>
                        <p className="teksp">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                            terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    </div>
                    <div className="col-md-6 pe-auto mt-30k">
                        <img src="img/montor.png" width="600px" className="img-fluid" />
                    </div>
                </div> <br />
            </div>

            {/* FORM */}
            <div className="container mt-30k ">
                <div className="sewa2">
                    <div className="card garis1 br-15 cardcari ml-0k mr-0k">
                        <Form onSubmit={(e) => filtered(e)}>
                            <div className="row">
                                <div className="col-md-11 tengah">

                                    <div className="row">

                                        <div className="col-md-3 tengah mt-15">
                                            <div className=" form-group">
                                                <label className="form-label">Tipe Driver</label>
                                                <select ref={isWithDriverField} className="form-select">
                                                    <option value="true">Dengan Sopir</option>
                                                    <option value="false">Tanpa Sopir</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-3 tengah mt-15">
                                            <div className=" form-group">
                                                <label className="form-label">Tanggal</label>
                                                <input ref={availableAtField} type="date" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-md-3 tengah mt-15">
                                            <div className="form-group ">
                                                <label className="form-label">Waktu Jemput/Ambil</label>
                                                <select id="inputTime" className="form-select">
                                                    <option selected hidden>Waktu Jemput</option>
                                                    <option value="08:00">08:00 WIB</option>
                                                    <option value="09:00">09:00 WIB</option>
                                                    <option value="10:00">10:00 WIB</option>
                                                    <option value="11:00">11:00 WIB</option>
                                                    <option value="12:00">12:00 WIB</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-3 tengah mt-15">
                                            <div className=" form-group">
                                                <label className="form-label">Jumlah Penumpang</label>
                                                <select ref={capacityField} className="form-select">
                                                    <option hidden>Jumlah Penumpang</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-1 tengah ">
                                    <button type="submit" id="load-btn" className=" btn-success2 bwhite  bold ">Cari Mobil</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>


            {/* card cars */}
            <Container>
                <Row>
                    {cars.map((car) => (
                        <Col md={4}>
                            <Card style={{ marginTop: "2rem" }} key={car.id}>
                                <img src={car.image} alt="" style={{ height: "250px" }} />
                                <div className="card-body">
                                    <p>
                                        {car.model} / {car.manufacture}
                                    </p>
                                    <h5 className="card-title bold">
                                        Rp {car.rentPerDay} / hari
                                    </h5>
                                    <p className="card-text">{car.description}</p>
                                    <div className="">
                                
                                        {car.capacity} Orang
                                    </div>
                                    <div className="pt-2">
                                        
                                        {car.transmission}
                                    </div>
                                    <div className="pt-2">
                                        
                                        Tahun {car.year}
                                    </div>
                                    <button className="btn-success w-100 mt-3"> Pilih Mobil</button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>


            {/* FOOTER */}
            <div className="container">
                <footer className=" text-lg-start bg-light ">
                    <section className="">
                        <div className="container  text-md-start mt-5">

                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                                    <p>binarcarrental@gmail.com</p>
                                    <p>081-233-334-808</p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 bold">
                                    <p>Our Services</p>
                                    <p>Why us</p>
                                    <p>Testimonial</p>
                                    <p>FAQ</p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mr-100">
                                    <p>Connect with Us</p>
                                    <img src="icon/list.png" width="250px" />
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
                                    <p>Copyright Binar 2022</p>
                                    <img src="img/logo.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        </div>

    ) : (
        <Navigate to="/login" replace />
    );
}
export default SelectCarMenu
