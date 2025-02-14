import * as React from 'react';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import LanguageIcon from '@mui/icons-material/Language';
import { IoWifiSharp } from "react-icons/io5";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LanIcon from '@mui/icons-material/Lan';
import { FaHandsHelping } from "react-icons/fa";

import CategoryCard from "../../../components/client/page";

import StorageIcon from '@mui/icons-material/Storage';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

import { IoBusiness } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

// react plugin used to create charts
// reactstrap components
import {
    //  Button,
    // Card,
    // CardHeader,
    //  CardBody,
    CardFooter,
    //  CardTitle,
    ListGroupItem,
    ListGroup,
    // Container,
    // Row,
    // Col,
} from "reactstrap";

import {
    //Container,
    //Card,
    CardContent,
    Typography,
    Grid,
    // Button,
    Box,
    AvatarGroup,
    Avatar,
    Alert
} from "@mui/material";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Label,
    FormGroup,
    Form,
    Input,
    FormText,
    NavItem,
    CardTitle,
    NavLink,
    Nav,
    Table,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledCarousel,
} from "reactstrap";
// core components

import { Stack } from "@mui/system";
import ExamplesNavbar from "../../../components/Navbars/ExamplesNavbar.js";
import Footer from "../../../components/Footer/Footer.js";
import Services from '../../../components/PageHeader/Services';
import IndexNavbar from '../../../components/Navbars/IndexNavbar';
import ContactApi from '../../../components/PageHeader/Contact';

const pricingPlans = [
    {
        title: "Basic Package",
        description: "Entry Plan",
        price: "Ksh 200/month",
        features: [
      
            "Lead tracking",
            "Email integration",
            "Basic reporting"
        ],
        img: require("../../../assets/img/bitcoin.png"),
        buttonColor: "primary"
    },
    {
        title: "Intermediate Package",
        description: "Best Value",
        price: "Ksh 700/month",
        features: [
      
            "Sales pipeline tracking",
            "Email & SMS marketing",
            "Task automation",
            "Customizable dashboards",
            "Basic analytics"
        ],
        img: require("../../../assets/img/bitcoin.png"),
        buttonColor: "success"
    },
    {
        title: "Advanced Package",
        description: "Premium Plan",
        price: "Ksh 1200/month",
        features: [
            "Unlimited users",
            "Sales automation",
            "Customer segmentation",
            "Advanced analytics & reporting",
            "Third-party integrations",
            "AI-powered insights",
            "Custom workflows",
            "24/7 premium support"
        ],
        img: require("../../../assets/img/bitcoin.png"),
        buttonColor: "info"
    }
];



const Crm = () => {


    React.useEffect(() => {
        document.body.classList.toggle("landing-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("landing-page");
        };
    }, []);

    return (
        <>
            <IndexNavbar />
            <div className="page-header">
                <img
                    alt="..."
                    className="path"
                    src={require("../../../assets/img/blob.png")}
                />
                <img
                    alt="..."
                    className="path2"
                    src={require("../../../assets/img/path2.png")}
                />
                <img
                    alt="..."
                    className="shapes triangle"
                    src={require("../../../assets/img/triunghiuri.png")}
                />
                <img
                    alt="..."
                    className="shapes wave"
                    src={require("../../../assets/img/waves.png")}
                />
                <img
                    alt="..."
                    className="shapes squares"
                    src={require("../../../assets/img/patrat.png")}
                />
                <img
                    alt="..."
                    className="shapes circle"
                    src={require("../../../assets/img/cercuri.png")}
                />
                <div className="content-center">
                    <Row className="row-grid justify-content-between align-items-center text-left">
                        <Col lg="6" md="6">
                            <h1 className="text-white">
                                Customer Relationship Management (CRM)

                            </h1>
                            <p className="text-white mb-3">
                                CRM systems help businesses manage interactions with current and potential customers. They centralize customer information, streamline communication, and support sales management. CRMs enhance customer satisfaction and loyalty by providing a comprehensive view of customer interactions and history.


                            </p>
                            <div className="btn-wrapper mb-3">
                                <p className="category text-success d-inline">
                                    Download App
                                </p>
                                <Button
                                    className="btn-link"
                                    color="success"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    size="sm"
                                >
                                    <i className="tim-icons icon-minimal-right" />
                                </Button>
                            </div>
                            <div className="btn-wrapper">
                                <div className="button-container">
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-dribbble" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-facebook" />
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <img
                                alt="..."
                                className="img-fluid"
                                src={require("../../../assets/img/services/crm.jpeg")}
                            />
                        </Col>
                    </Row>
                </div>
            </div>


            <section className="section " >

                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12">
                            <div >
                                <h1 className="text-center">Your best benefit</h1>
                            </div>

                            <Row className="row-grid justify-content-center" >
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            <SupportAgentRoundedIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Improved Customer Relationships: </h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }} >
                                            Better engagement through personalized communication and targeted marketing, leading to increased customer satisfaction and loyalty.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            < StorageIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Data Centralization</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }} >
                                            A unified database of customer information ensures that all departments have access to up-to-date customer data, improving collaboration and service delivery.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            < TrendingUpIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Sales Tracking:</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                            Manage and analyze sales pipelines to optimize sales strategies and improve conversion rates.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            <SettingsSuggestIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Automation </h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                            Automate repetitive tasks such as follow-ups and marketing campaigns, freeing up time for sales teams to focus on building relationships.h.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section >

                <Container>
                    <Row style={{ display: "flex", alignItems: "center", justifyContent: 'center' }} >
                        <Col md="4" style={{ marginTop: 100 }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                <h1>
                                    Pricing
                                    <hr className="line-info" />
                                </h1>
                            </div>

                        </Col>
                    </Row>



                    <Row style={{ marginTop: 120 }}>
                        {pricingPlans.map((plan, index) => (
                            <Col md="4" key={index}>
                                <Card className="card-coin card-plain">
                                    <CardHeader>
                                        <img
                                            alt="..."
                                            className="img-center img-fluid"
                                            src={plan.img}
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col className="text-center" md="12">
                                                <h4 className="text-uppercase">{plan.title}</h4>
                                                <span>{plan.description}</span>
                                                <hr className={`line-${plan.buttonColor}`} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <ListGroup>
                                                {plan.features.map((feature, idx) => (
                                                    <ListGroupItem key={idx}>• {feature}</ListGroupItem>
                                                ))}
                                            </ListGroup>
                                        </Row>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button className="btn-simple" color={plan.buttonColor}>
                                            {plan.price}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        ))}
                    </Row>




                </Container>




            </section>



            <ContactApi />

            <Footer />
        </>
    )
}


export default Crm