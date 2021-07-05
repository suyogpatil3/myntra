
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import Navigation from './NavigationBar';
import ProductArea from './ProductArea';
import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Error from '../Components/Error';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      products:[],
      filteredProducts:[],
      searchfield:'',
      sortType:'',
      loader:true,
      error:false
    }
  }

 async componentDidMount(){
    await fetch('https://demo7242716.mockable.io/products')
    .then((res) => {if(res.ok) {
      return res.json();
    }
    })
    .then((data) => {
      console.log(data.products);
      this.setState({products:data.products,loader:false});
      console.log(this.state.products);
    }
    ).catch((error) => {
      this.setState({error:true})
    })
    if(this.state.searchfield==="" && this.state.sortType===""){
      this.setState({filteredProducts:this.state.products});
    }
  }

  changeProductArray = (changedArray) =>{
    if(changedArray.length !== 0){
    this.setState({filteredProducts:changedArray})
    }
  }

  onSearchChange = (event) =>{
    this.setState({searchfield : event.target.value});
    if(event.target.value=='' && this.state.searchfield!==''){
      this.setState({loader:true})
      setTimeout(()=>{
      this.setState({filteredProducts:this.state.products,loader:false})
    },800);
    }
    else{
    const filteredProducts = this.state.products.filter((product) =>{
      return product.productName.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    this.setState({loader:true})
    setTimeout(()=>{
    this.setState({filteredProducts:filteredProducts,loader:false});
    },1000);
  }
  }

  onSortChange = (event) =>{
    if(event.target.value==="default"){
      this.setState({filteredProducts:this.state.products});
    }
    else{
    const sortingProducts = this.state.filteredProducts;
      let sortValue = event.target.value;
      if(sortValue==="year"){
        sortingProducts.sort((a,b) => a.year-b.year);
      }
      else if(sortValue==="price"){
        sortingProducts.sort((a,b) => a.price-b.price);
      }
      else if(sortValue==="discount"){
        sortingProducts.sort((a,b) => b.discount-a.discount);
      }
      this.setState({loader:true})
      setTimeout(()=>{
        this.setState({filteredProducts:sortingProducts,loader:false});
      },1200);
    }
  }


  render() {
    return (
      <div>
        {
          (this.state.error) ? <Error/> : <> <div>
          <Navigation searchChange = {this.onSearchChange} setSortingType = {this.onSortChange}/>
        </div>
        <div className="productBody">
          <SideBar products={this.state.products} changeProductArray={this.changeProductArray} allProducts={this.state.products}/>
          {
            (this.state.loader===true) ?
            <div className="loading">
               <Loader
              type="Puff"
              color="#ff5d48f1"
              height={200}
              width={200}
              timeout={5000} //3 secs
            />
            </div>
            :
            <ProductArea products={this.state.filteredProducts} searchfield={this.state.searchfield}/>
          }
          
        </div> </>
        }
     
      </div>
    )
  }
}
