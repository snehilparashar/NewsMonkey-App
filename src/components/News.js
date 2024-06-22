import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 15,
        category: "sports"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(){
        super();
        console.log("Hello I'm a contructor")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d1ab9002c624ffca60adca107ca6c86&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handlePrevClick = async () => {
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d1ab9002c624ffca60adca107ca6c86&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        console.log("Next")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/15)) {
            console.log("No action can be taken")
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d1ab9002c624ffca60adca107ca6c86&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
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
        <h3 className='text-center' style = {{marginTop: '85px'}} >News Headline</h3>
        <div className="row my-3">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <NewsItem  
                title={element.title?element.title:""} 
                description={element.description?element.description:""} 
                imageUrl={element.urlToImage} 
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}/>
            </div>
        }
        )}
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > this.state.totalResults/(this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>  
        </div>        
      </div>
    )
  }
}

export default News