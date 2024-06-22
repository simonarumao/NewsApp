import React, { Component } from 'react'

export class NewsItem extends Component {

    

    render() {
        let { title, description,imageUrl, newsUrl } = this.props
    return (

        <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
    <img class="w-full" src={imageUrl} alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">{description}</p>
    </div>
    <div class="px-6 pt-2 pb-4">
        <a href={newsUrl} class="text-white bg-green-800 hover:bg-green-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read more</a>
    </div>
</div>




    )
  }
}

export default NewsItem
