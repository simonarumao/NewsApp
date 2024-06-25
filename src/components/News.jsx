import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    apiKey: "22158b5e1e0d46ad8f9f331ed7bc9bf1",
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string,
    category:PropTypes.string
  }

  constructor()
  {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    }
  }

   
  async updateNews()
  {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    this.props.setProgress(30)

    let parsedData = await data.json();
    this.props.setProgress(50)

    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false }) 
    this.props.setProgress(100)
  }


  async componentDidMount()
  {
    this.updateNews();

  }

// handlePreviousClick = async() => {
  

//   await this.setState({
//     page:this.state.page-1
//   })
//   this.updateNews()
// }

// handleNextClick = async () => {

//   await this.setState({
//     page:this.state.page+1
//   })
//   this.updateNews();
  //   }
  

  fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({ page: this.state.page + 1 })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    }) 
  
  };
  
  render() {
   
    return (
      <>
        <h1 className="mb-6 sm:mb-4 pt-20 text-2xl font-extrabold leading-none tracking-tight text-customTeal md:text-4xl lg:text-4xl dark:text-white text-center">Top Headlines for <span className='text-[#04C4C4]'>{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</span></h1>
        {/* <div className="flex justify-between">
        //   <button disabled={this.state.page <=1} type="button" className="focus:outline-none text-white bg-customTeal p  focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={this.handlePreviousClick}>&larr; Previous</button>
        //   <button disabled= {this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="focus:outline-none text-white bg-customTeal  focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={this.handleNextClick}>Next &rarr;</button>
        // </div> */}
        
        
        <InfiniteScroll 
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container  ">
          <div className='row' >
        {this.state.loading && <Spinner />}
          { this.state.articles.map((element) => {
            return <div className="col-md-3 flex justify-center items-center " key={element.url}>
                <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl = {element.urlToImage?element.urlToImage:"notava.png"} newsUrl = {element.url} author={element.author} date = {element.publishedAt} sources={element.source.name} />
            </div>
        })}
            </div>
            </div>
        </InfiniteScroll>
        </>
    )
  }
}

export default News
