import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product';  
import WishList from '../wishlist/wishlist';

const http=new HttpService();
class App extends Component {
    constructor(props){
      super(props);
      this.state={products:[]};
      this.loadData=this.loadData.bind(this);
      this.productList=this.productList.bind(this);
      this.loadData();
    }
    loadData=()=>{
      var self=this;
      http.getProducts().then(data=>{
        self.setState({products:data})
    },err=>{
        
      });
    }
    productList=()=>{
      const list=this.state.products.map((product)=>
        <div className="col-sm-4" class="img-fluid-align" key={product._id}>
        <Product product={product}/>
        </div>
      );
      return (list);
    }
    render(){ 
        return (
            <div className="App">    
            <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Welcome to Swag Shop </h1>
                  <SearchPage />
                </header> 
                <div className="App-main">
                  <div className="container-fluid App-main">
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="row">
                          {this.productList()}
                        </div>
                        
                      </div>
                      <div className="col-sm-4">
                      <WishList />
                      </div>
                      
                    </div>
                      
                  </div>
                </div>    
            </div>          
          );
        }
  }

export default App;
