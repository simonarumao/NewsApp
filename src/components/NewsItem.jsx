import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date,sources } = this.props;

    // Fallback values for title and description
    const defaultTitle = "Default Title";
    const defaultDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.";

      return (
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4 " >
            
        <img className="w-full h-48 object-cover object-center" src={imageUrl} alt="News" />
        <div className="px-6 py-4 h-60">
          <div className="font-bold  text-xl mb-2">{title.slice(0,107) || defaultTitle}  <span class="bg-red-100  text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{sources}</span>

          </div>
          <p className="text-gray-700 text-base line-clamp-3">{description.slice(0,119) || defaultDescription}</p>
        </div>
        <div className="px-6 pt-2 pb-4">
          <a
            href={newsUrl}
            className="text-white bg-customTeal hover:bg-hovercolor focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block text-center"
          >
            Read more
          </a>
        </div>
        <div className="px-6 pb-2 mb-2">
          <p className="text-xs text-gray-500">
            By {author ? author : "Unknown"} on {new Date(date).toDateString()}
          </p>
        </div>
      </div>
    );
  }
}

export default NewsItem;
