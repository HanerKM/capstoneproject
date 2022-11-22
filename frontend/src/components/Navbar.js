import { useEffect, useState } from "react";
import {
    Navbar,
    Nav,
    Container,
    OverlayTrigger,
    Popover,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/navbar.css";

const PopoverStyle = {
    backgroundColor: "#E3FCFF",
    borderRadius: ".5rem",
};

export const NavBar = () => {
    const [title, setTitle] = useState("Home");

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        document.title = title;
    }, [title, user]);

    return (
        <Navbar
            collapseOnSelect
            id="navbar"
            expand="md"
            className="sticky-top navbar"
            style={{ backgroundColor: "#cae9ed" }}
        >
            <Container>
                <Navbar.Brand>
                    <h2>
                        Bank App
                    </h2>
                </Navbar.Brand>
                <Navbar.Toggle
                    className="navbar-toggler fw-bolder text-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                />
                <Navbar.Collapse id="collapse navbar-collapse">
                    <Nav className="me-auto navbar-collapse justify-content-end">
                        <OverlayTrigger
                            placement="bottom"
                            trigger={["hover", "focus"]}
                            overlay={
                                <Popover
                                    id="popover-basic"
                                    style={PopoverStyle}
                                >
                                    <Popover.Body>
                                        Navigate to home page.
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <Nav.Link
                                onClick={() => {
                                    setTitle("Home");
                                }}
                                href="/"
                            >
                                Home
                            </Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            trigger={["hover", "focus"]}
                            overlay={
                                <Popover
                                    id="popover-basic"
                                    style={PopoverStyle}
                                >
                                    <Popover.Body>
                                        Create account.
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <Nav.Link
                                onClick={() => {
                                    setTitle("Create Account");
                                }}
                                href="/account"
                            >
                                Create Account
                            </Nav.Link>
                        </OverlayTrigger>
                        {user ? (
                            <>
                                <OverlayTrigger
                                    placement="bottom"
                                    trigger={["hover", "focus"]}
                                    overlay={
                                        <Popover
                                            id="popover-basic"
                                            style={PopoverStyle}
                                        >
                                            <Popover.Body>
                                                Deposit.
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <Nav.Link
                                        onClick={() => {
                                            setTitle("Deposit");
                                        }}
                                        href="/deposit"
                                    >
                                        Deposit
                                    </Nav.Link>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="bottom"
                                    trigger={["hover", "focus"]}
                                    overlay={
                                        <Popover
                                            id="popover-basic"
                                            style={PopoverStyle}
                                        >
                                            <Popover.Body>
                                                Withdraw.
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <Nav.Link
                                        onClick={() => {
                                            setTitle("Withdraw");
                                        }}
                                        href="/withdraw"
                                    >
                                        Withdraw
                                    </Nav.Link>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="bottom"
                                    trigger={["hover", "focus"]}
                                    overlay={
                                        <Popover
                                            id="popover-basic"
                                            style={PopoverStyle}
                                        >
                                            <Popover.Body>
                                                Check balance.
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <Nav.Link
                                        onClick={() => {
                                            setTitle("Balance");
                                        }}
                                        href="/balance"
                                    >
                                        Balance
                                    </Nav.Link>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="bottom"
                                    trigger={["hover", "focus"]}
                                    overlay={
                                        <Popover
                                            id="popover-basic"
                                            style={PopoverStyle}
                                        >
                                            <Popover.Body>
                                                User Data.
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <Nav.Link
                                        onClick={() => {
                                            setTitle("All Data");
                                        }}
                                        href="/userdata"
                                    >
                                        User Data
                                    </Nav.Link>
                                </OverlayTrigger>
                            </>
                        ) : (
                            <></>
                        )}
                        {user ? (
                            <OverlayTrigger
                                placement="bottom"
                                trigger={["hover", "focus"]}
                                overlay={
                                    <Popover
                                        id="popover-basic"
                                        style={PopoverStyle}
                                    >
                                        <Popover.Body>Logout.</Popover.Body>
                                    </Popover>
                                }
                            >
                                <Nav.Link
                                    onClick={() => {
                                        setTitle("Log In");
                                    }}
                                    href="/login"
                                >
                                    LogOut
                                </Nav.Link>
                            </OverlayTrigger>
                        ) : (
                            <OverlayTrigger
                                placement="bottom"
                                trigger={["hover", "focus"]}
                                overlay={
                                    <Popover
                                        id="popover-basic"
                                        style={PopoverStyle}
                                    >
                                        <Popover.Body>
                                            Log in.
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Nav.Link
                                    onClick={() => {
                                        setTitle("Log In");
                                    }}
                                    href="/login"
                                >
                                    Log In
                                </Nav.Link>
                            </OverlayTrigger>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
