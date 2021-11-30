import { useState } from 'react';
import React from 'react';
import './Navbar.css';

function Navbar() {
    const [className, setClassName] = useState("navbar");

    function handleClick() {
        if (className === "navbar") {
            setClassName("navbar responsive");
        } else {
            setClassName("navbar");
        }
    }


    return (
        <div className={className} id="navlinks">
            <a href="#home" id="home" className="active"><img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e" alt="xbox"></img></a>
            <div className="dropdown">
                <button className="dropbtn">Game Pass
                    <i className="fa fa-down"></i>
                </button>
                <div className="dropdown-list">
                    <a href="#"> Visão Geral</a>
                    <a href="#"> Buscar Jogos</a>
                    <a href="#"> Xbox Game Pass para PC</a>
                    <a href="#"> Xbox Cloud Gaming (Beta)</a>
                    <a href="#"> Xbox Live Gold</a>
                </div>


            </div>

            <div className="dropdown">
                <button className="dropbtn">Jogos
                    <i className="fa fa-down"></i>
                </button>
                <div className="dropdown-list jogos">
                    <div className="row">
                        <div className="column">
                            <div className="listbox">
                                <p>Jogos de console</p>
                                <a href="#"> Ver todos os jogos digitais</a>
                                <a href="#">Jogos otimizados</a>
                                <a href="#"> Jogos compatíveis com versões anteriores</a>
                                <a href="#"> Games with Gold</a>
                                <a href="#"> Deals with Gold</a>
                            </div>
                        </div>

                        <div className="column">
                            <div className="listbox">
                                <p>Jogos de PC</p>
                                <a href="#"> Comprar todos os jogos para PC</a>
                                <a href="#">Jogos para Pc com o xbox</a>
                                <a href="#"> Xbox game pass</a>
                            </div>
                        </div>

                        <div className="column">
                            <div className="listbox">
                                <p>Todos os jogos</p>
                                <a href="#"> Explorar jogos</a>
                                <a href="#">Resgatar código</a>
                                <a href="#"> Vendas e ofertas especiais</a>

                            </div>
                        </div>
                    </div>




                </div>



                


            </div>

            <div className="dropdown">
                    <button className="dropbtn">Dispositivos
                        <i className="fa fa-down"></i>
                    </button>
                    <div className="dropdown-list consoles">
                        <div className="row">
                            <div className="column">
                                <div className="listbox">
                                    <p>Consoles</p>
                                    <a href="#"> Xbox Consoles</a>
                                    <a href="#">Xbox Series X</a>
                                    <a href="#"> Xbox Series S</a>
                                    <a href="#"> Compre todos os consoles
                                    </a>
                                    <a href="#"> Onde comprar
                                    </a>
                                </div>
                            </div>
                            <div className="column">
                                <div className="listbox">
                                    <p>Acessórios</p>
                                    <a href="#"> Compre todos os acessórios</a>
                                    <a href="#">Controles</a>
                                    <a href="#"> Fones de ouvido</a>
                                    <a href="#"> Discos rígidos e armazenamento
                                    </a>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            <a href="#play">Jogar</a>

            <div className="dropdown">
                    <button className="dropbtn">Comunidade
                        <i className="fa fa-down"></i>
                    </button>
                    <div className="dropdown-list consoles">
                        <div className="row">
                            <div className="column">
                                <div className="listbox">
                                    <p>Consoles</p>
                                    <a href="#"> Xbox Consoles</a>
                                    <a href="#">Xbox Series X</a>
                                    <a href="#"> Xbox Series S</a>
                                    <a href="#"> Compre todos os consoles
                                    </a>
                                    <a href="#"> Onde comprar
                                    </a>
                                </div>
                            </div>
                            <div className="column">
                                <div className="listbox">
                                    <p>Acessórios</p>
                                    <a href="#"> Compre todos os acessórios</a>
                                    <a href="#">Controles</a>
                                    <a href="#"> Fones de ouvido</a>
                                    <a href="#"> Discos rígidos e armazenamento
                                    </a>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            <a href="#about">About</a>

            <div className="dropdown">
                    <button className="dropbtn">Mais
                        <i className="fa fa-down"></i>
                    </button>
                    <div className="dropdown-list consoles">
                        <div className="row">
                            <div className="column">
                                <div className="listbox">
                                    <a href="#"> Suporte</a>
                                    <a href="#"> Meu Xbox</a>
                                    <a href="#"> Desenvolvedores</a>
                                    
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            <a href="#javascript:void(0);" className="icon" onClick={handleClick}>&#9776;</a>

        </div >
    )
};

export default Navbar
