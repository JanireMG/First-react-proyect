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
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    getPortfolioItems() {
        axios
            .get('https://jani.devcamp.space/portfolio/portfolio_items')
            .then(response =>  {
            // handle success
                this.setState({
                    data: response.data.portfolio_items,
                });
            })
            .catch(error => {
            // handle error
                console.log(error);
            })
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
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter("shonen")}>Shonen</button>
                <button className="btn" onClick={() => this.handleFilter("seinen")}>Seinen</button>
                <button className="btn" onClick={() => this.handleFilter("horror")}>Horror</button>
                <button className="btn" onClick={() => this.handleFilter("isekai")}>Isekai</button>
                <button className="btn" onClick={() => this.handleFilter("shojo")}>Shojo</button>
                <button className="btn" onClick={() => this.handleFilter("mecha")}>Mecha</button>
                    
                {this.portfolioItems()}
            </div>                
        );
    }
}