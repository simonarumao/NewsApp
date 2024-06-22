import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor()
  {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount()
  {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=22158b5e1e0d46ad8f9f331ed7bc9bf1&pageSize=20"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })

  }

handlePreviousClick = async() => {
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=22158b5e1e0d46ad8f9f331ed7bc9bf1&page=${this.state.page - 1}&pageSize=20`
  let data = await fetch(url);
  let parsedData = await data.json();
 
  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles
  })
}

  handleNextClick = async () => {
   
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      
    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=22158b5e1e0d46ad8f9f331ed7bc9bf1&page=${this.state.page + 1}&pageSize=20`
      let data = await fetch(url);
      let parsedData = await data.json();
   
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }
  render() {
   
    return (
        <div className='container my-3'>
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white text-center">Top Headlines for Today</h1>
        <div className="flex justify-between">
          <button disabled={this.state.page <=1} type="button" className="focus:outline-none text-white bg-green-800 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" className="focus:outline-none text-white bg-green-800 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
          <div className='row'>
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
                <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl = {element.urlToImage?element.urlToImage:"https://hips.hearstapps.com/hmg-prod/images/woman-takes-prescription-medication-royalty-free-image-1718736576.jpg?crop=1.00xw:0.752xh;0,0.202xh&resize=1200:*"} newsUrl = {element.url} />
            </div>
        })}
        </div>
       

       
        
      

        
        </div>
    )
  }
}

export default News
