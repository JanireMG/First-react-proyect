import React, { Component } from 'react';
import axios from 'axios'; 

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data:[]
        };

        this.handleFilter = this.handleFilter.bind(this);
        //Bind sirve para que el this dentro de la funcion se refiera a la clase y no al evento del boton
    };

    handleFilter(filter){
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }
    }

        getPortfolioItems(filter = null) {
            axios
                .get('https://jani.devcamp.space/portfolio/portfolio_items')
                .then(response =>  {
                    if (filter) {
                        this.setState({
                            data: response.data.portfolio_items.filter(item => {
                                return item.category === filter;
                            })
                        });
                    } else {
                        this.setState({
                            data: response.data.portfolio_items
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }

        portfolioItems(){
            return this.state.data.map(item => {
                return <PortfolioItem key={item.id} item= {item} />
            });
        }

        componentDidMount() {
            this.getPortfolioItems();
        }
    
       
        render() {
            if (this.state.isLoading){
                return <div>Loading...</div>
            }


        return (
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="btn" onClick={() => this.handleFilter("shonen")}>Shonen</button>
                    <button className="btn" onClick={() => this.handleFilter("seinen")}>Seinen</button>
                    <button className="btn" onClick={() => this.handleFilter("horror")}>Horror</button>
                    <button className="btn" onClick={() => this.handleFilter("isekai")}>Isekai</button>
                    <button className="btn" onClick={() => this.handleFilter("shojo")}>Shojo</button>
                    <button className="btn" onClick={() => this.handleFilter("mecha")}>Mecha</button>
                    <button className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>ALL</button>   
                </div>
                <div className='portfolio-items-wrapper'>{this.portfolioItems()}</div>
            </div>                
        );
    }
}