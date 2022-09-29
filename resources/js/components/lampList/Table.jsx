// import axios from 'axios';
import React, { Component } from 'react';
import TableRow from './TableRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateModal from './Modals/CreateModal';

class Table extends Component {


    constructor(props) {
        super(props);

        this.state = {
            lamps:[],
        }
    }

    componentDidMount() {
        this.getLampList();
    }

    getLampList = () => {
        let self = this;
        axios.get('/get/lamp/list').then(function (response) {
            self.setState({
                lamps: response.data
            });
        });
    }

    render() {
        return (
            <div className="container">
                <ToastContainer/>

                <section className="p-5">
                <CreateModal />
                    <nav className="navbar navbar-expand d-flex flex-column align-item-start sidebar">
                        <a href="#" className="navbar-brand text-dark">
                            <div className="fw-bold">商品分類</div>
                        </a>
                        <ul className="navbar-nav d-flex flex-column w-100">
                            <li className="nav-item dropdown w-100">
                                <a href="#" className="nav-link dropdown-toggle text-dark pl-4" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">•&nbsp;&nbsp;吊掛式</a>
                                <ul className="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                                    <li><a href="#" className="dropdown-item">典雅細緻</a></li>
                                    <li><a href="#" className="dropdown-item">北歐設計</a></li>
                                    <li><a href="#" className="dropdown-item">工業復古</a></li>
                                    <li><a href="#" className="dropdown-item">木藝森活</a></li>
                                    <li><a href="#" className="dropdown-item">現代時尚</a></li>
                                    <li><a href="#" className="dropdown-item">簡約環保</a></li>
                                    <li><a href="#" className="dropdown-item">華麗水晶</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle text-dark pl-4" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">•&nbsp;&nbsp;吸頂式</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a href="#" className="dropdown-item">典雅細緻</a></li>
                                    <li><a href="#" className="dropdown-item">北歐設計</a></li>
                                    <li><a href="#" className="dropdown-item">工業復古</a></li>
                                    <li><a href="#" className="dropdown-item">木藝森活</a></li>
                                    <li><a href="#" className="dropdown-item">現代時尚</a></li>
                                    <li><a href="#" className="dropdown-item">簡約環保</a></li>
                                    <li><a href="#" className="dropdown-item">華麗水晶</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle text-dark pl-4" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">•&nbsp;&nbsp;壁掛式</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a href="#" className="dropdown-item">典雅細緻</a></li>
                                    <li><a href="#" className="dropdown-item">北歐設計</a></li>
                                    <li><a href="#" className="dropdown-item">工業復古</a></li>
                                    <li><a href="#" className="dropdown-item">木藝森活</a></li>
                                    <li><a href="#" className="dropdown-item">現代時尚</a></li>
                                    <li><a href="#" className="dropdown-item">簡約環保</a></li>
                                    <li><a href="#" className="dropdown-item">華麗水晶</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle text-dark pl-4" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">•&nbsp;&nbsp;桌檯式</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a href="#" className="dropdown-item">典雅細緻</a></li>
                                    <li><a href="#" className="dropdown-item">北歐設計</a></li>
                                    <li><a href="#" className="dropdown-item">工業復古</a></li>
                                    <li><a href="#" className="dropdown-item">木藝森活</a></li>
                                    <li><a href="#" className="dropdown-item">現代時尚</a></li>
                                    <li><a href="#" className="dropdown-item">簡約環保</a></li>
                                    <li><a href="#" className="dropdown-item">華麗水晶</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle text-dark pl-4" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">•&nbsp;&nbsp;落地式</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a href="#" className="dropdown-item">典雅細緻</a></li>
                                    <li><a href="#" className="dropdown-item">北歐設計</a></li>
                                    <li><a href="#" className="dropdown-item">工業復古</a></li>
                                    <li><a href="#" className="dropdown-item">木藝森活</a></li>
                                    <li><a href="#" className="dropdown-item">現代時尚</a></li>
                                    <li><a href="#" className="dropdown-item">簡約環保</a></li>
                                    <li><a href="#" className="dropdown-item">華麗水晶</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </section>

                <section className="p-4 product">
                    <div className="row row-cols-1 row-cols-md-3 g-4 col-md-10">
                        {this.state.lamps.map(function (x, i) {
                            return <TableRow key={i} data={x} />
                        })}
                    </div>
                </section>
            </div>
        );
    }
}


export default Table;