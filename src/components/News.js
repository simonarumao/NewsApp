import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles  =  [
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Extreme heat tests US cities aiming to help low-income residents - BBC.com",
            "description": "From cooling centres to programmes helping with air conditioning, cities look to mitigate the impact of extreme heat.",
            "url": "https://www.bbc.com/news/articles/c7227d0nl20o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f5de/live/8283d5a0-2e64-11ef-bdc5-41d7421c2adf.jpg",
            "publishedAt": "2024-06-19T17:46:49Z",
            "content": "By Ana Faguy, BBC News, Washington\r\n'The Zone' is Phoenix's largest homeless encampment\r\nMary Carter has survived scorching Phoenix summers for 40 years, but she found herself paralysed by the heat w… [+4984 chars]"
        },
        
        
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Ben Cost",
            "title": "Super rare star explosion will be visible from Earth this month - New York Post ",
            "description": "NASA has predicted that a “once-in-a-life-time” star explosion — or nova — will be visible to the naked eye sometime this summer.",
            "url": "https://nypost.com/2024/06/19/lifestyle/super-rare-star-explosion-will-be-visible-from-earth-this-month/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/06/red-giant-star-white-dwarf-84077931.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-06-19T16:05:00Z",
            "content": "A star is dead? \r\nKeep your eyes on the skies, stargazers: NASA has predicted that the much-anticipated “once-in-a-life-time” star explosion or nova will be visible to the naked eye sometime this sum… [+3370 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Grace Kazarian",
            "title": "Virginia GOP primary too close to call in race Trump and McCarthy try to oust House Freedom Caucus Chair Bob Good - CBS News",
            "description": "House Freedom Caucus Chairman Bob Good's race against primary challenger state Sen. John McGuire is too close to call, with just 345 votes separating them.",
            "url": "https://www.cbsnews.com/news/trump-mccarthy-virginia-gop-primary-bob-good/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/06/18/4637777a-32fd-4615-acc8-13a5cf509533/thumbnail/1200x630/76da0f974e26df14c401c1fbec9545f9/gettyimages-2156985640.jpg?v=5842509bb796a146f9b20d3e8b03dac6",
            "publishedAt": "2024-06-19T15:52:24Z",
            "content": "Republican voters in Virginia's 5th Congressional District do not yet know whether House Freedom Caucus Chairman Bob Good was on his way to his fifth term in office or whether opponent, state Sen. Jo… [+2699 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Simone McCarthy, Manveena Suri, Lucas Lilieholm, Radina Gigova",
            "title": "Putin says Russia and North Korea will help each other if attacked, taking ties to a ‘new level’ - CNN",
            "description": "Vladimir Putin said Russia and North Korea have ramped up ties to a “new level,” pledging to help each other if either nation is attacked in a “breakthrough” new partnership announced during the Russian president’s rare visit to the reclusive state.",
            "url": "https://www.cnn.com/2024/06/19/asia/north-korea-russia-putin-visit-thursday-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-06-19t052125z-1474180113-rc25e8a0shwz-rtrmadp-3-northkorea-russia.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-06-19T15:48:00Z",
            "content": "Vladimir Putin said Russia and North Korea have ramped up ties to a new level, pledging to help each other if either nation is attacked in a breakthrough new partnership announced during the Russian … [+8186 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Caroline Thayer",
            "title": "Video shows Justin Timberlake driving moments before DWI arrest - Fox News",
            "description": "Fox News Digital has obtained video of Justin Timberlake driving on Main Street in Sag Harbor shortly before he was arrested for drunken driving.",
            "url": "https://www.foxnews.com/entertainment/video-shows-justin-timberlake-driving-moments-before-drunken-driving-arrest",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/06/justin-timberlake-dwi.jpg",
            "publishedAt": "2024-06-19T15:40:00Z",
            "content": "New video of Justin Timberlake driving shortly before being arrested for allegedly driving drunk has surfaced, showing the pop star in a BMW SUV traveling down Main Street in Sag Harbor, New York.\r\nT… [+3674 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Brian Dakss, Emily Mae Czachor",
            "title": "Tropical Storm Alberto, first of the Atlantic hurricane season, forms over the Gulf of Mexico - CBS News",
            "description": "Alberto, the first tropical storm of the Atlantic season, formed over the Gulf of Mexico Wednesday, the National Hurricane Center says.",
            "url": "https://www.cbsnews.com/news/atlantic-hurricane-season-first-tropical-storm-texas-mexico-gulf-of-mexico/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/06/19/ee78276f-b81c-45b1-9541-699fbd192375/thumbnail/1200x630/f2e3b7a0251e556f4e655d97daca5cb2/screen-shot-2024-06-19-at-11-05-07-am.png?v=5842509bb796a146f9b20d3e8b03dac6",
            "publishedAt": "2024-06-19T15:27:56Z",
            "content": "The first tropical storm of the Atlantic season formed over the Gulf of Mexico Wednesday, the National Hurricane Center said. The tropical storm has been named Alberto.\r\nForecasters said the storm co… [+4290 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Anthony D'Alessandro",
            "title": "‘Inside Out 2’ Posts Record Tuesday For Animated Movie With $29M+; $205M+ U.S., $380M WW – Box Office - Deadline",
            "description": "Disney/Pixar's 'Inside Out 2' grossed $29.1M stateside yesterday, repping a Tuesday record for an animated movie.",
            "url": "http://deadline.com/2024/06/inside-out-2-box-office-record-tuesday-1235978168/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2024/05/INSIDE-OUT-2-ONLINE-USE-i140_15mT_pub.pub16.1581.jpg?w=1024",
            "publishedAt": "2024-06-19T15:25:00Z",
            "content": "Disney/Pixar‘s Inside Out 2grossed $29.1M stateside yesterday, repping a Tuesday record for an animated movie. That beats the first Tuesday gross of 2018’s Incredibles 2 at $27M. \r\nThe haul flies the… [+1294 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Micah Maidenberg",
            "title": "Boeing Sent Two Astronauts Into Space. Now It Needs to Get Them Home. - The Wall Street Journal",
            "description": "Helium leaks and thruster problems prompt NASA and Boeing to delay astronauts’ return on company’s Starliner vehicle",
            "url": "https://www.wsj.com/science/space-astronomy/boeing-sent-two-astronauts-into-space-now-it-needs-to-get-them-home-99d96633",
            "urlToImage": "https://images.wsj.net/im-971031/social",
            "publishedAt": "2024-06-19T15:20:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "WCVB Boston"
            },
            "author": "Veronica Haynes",
            "title": "911 system outage was firewall issue, not cyberattack, Mass. officials say - WCVB Boston",
            "description": "A statewide outage of the Massachusetts 911 system on Tuesday was caused by a firewall issue, the state's Executive Office of Public Safety and Security said.",
            "url": "https://www.wcvb.com/article/911-outage-massachusetts-cause-firewall/61173826",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/barnstable-911-dispatch-center-1520481231.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            "publishedAt": "2024-06-19T15:10:00Z",
            "content": "A statewide outage of the Massachusetts 911 system on Tuesday was caused by a firewall issue, the state's Executive Office of Public Safety and Security said. \r\nThe Massachusetts State 911 Department… [+1232 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Gaza war: Israeli strikes may have violated laws of war, UN says - BBC.com",
            "description": "Israel says the UN report into six strikes last year that killed at least 218 people is \"flawed”.",
            "url": "https://www.bbc.com/news/articles/cy66e20j531o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/bc78/live/ba33a340-2e37-11ef-bdc5-41d7421c2adf.jpg",
            "publishedAt": "2024-06-19T14:16:14Z",
            "content": "By David Gritten, BBC News\r\nThe UN Human Rights Office says Israeli air strikes in Gaza may have systematically violated the laws of war requiring that civilians and civilian infrastructure be protec… [+5604 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": null,
            "title": "CEOs on the Four-Day Workweek: ‘All is Going Fine’ - The Wall Street Journal",
            "description": "The idea is for employees to find ways to do their jobs more efficiently. If they can do that, company leaders say, everybody wins.",
            "url": "https://www.wsj.com/lifestyle/workplace/four-day-workweek-wbr-group-charity-bank-ceo-council-a7081a75",
            "urlToImage": "https://images.wsj.net/im-968820/social",
            "publishedAt": "2024-06-19T14:00:00Z",
            "content": "Interest in a four-day workweek is spreading around the world, but a lot of questions remain. Maybe the biggest: Can companies really rely on at least the same amount and quality of work getting done… [+503 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Haley Ott",
            "title": "Stonehenge sprayed with orange paint by Just Stop Oil activists demanding U.K. \"phase out fossil fuels\" - CBS News",
            "description": "The Just Stop Oil group says two activists \"decorated\" the ancient Stonehenge monument with \"orange powder paint.\"",
            "url": "https://www.cbsnews.com/news/stonehenge-just-stop-oil-protest-activists-spray-orange-paint-demand-uk-stop-fossil-fuel/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/06/19/ba486dea-0e53-459b-afb5-f43cc869b13a/thumbnail/1200x630/55f567c5188b338d461ccb75a6272f0d/stonehenge-protest-just-stop-oil.jpg?v=5842509bb796a146f9b20d3e8b03dac6",
            "publishedAt": "2024-06-19T13:49:00Z",
            "content": "London — Environmental activists sprayed several of the ancient stones of Britain's iconic Stonehenge site with an orange substance Wednesday, demanding that the next U.K. government — set to be chos… [+2904 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Asa Fitch",
            "title": "Nvidia's Ascent to Most Valuable Company Has Echoes of Dot-Com Boom - The Wall Street Journal",
            "description": "Chip maker passes Microsoft for top spot, just as John Chambers-led Cisco Systems did two decades ago. He says the situation now is different.",
            "url": "https://www.wsj.com/tech/ai/nvidias-ascent-to-most-valuable-company-has-echoes-of-dot-com-boom-dd836c90",
            "urlToImage": "https://images.wsj.net/im-971417/social",
            "publishedAt": "2024-06-19T12:55:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Prevention.com"
            },
            "author": "Korin Miller",
            "title": "These Common Medications Can Make a Heat Wave More Dangerous - Prevention Magazine",
            "description": "Common medications may make you more susceptible to heat-related illnesses. Here, experts share which ones contribute to dehydration and temperature dysregulation.",
            "url": "https://www.prevention.com/health/health-conditions/a61156581/medications-heat-wave-intolerance/",
            "urlToImage": "https://hips.hearstapps.com/hmg-prod/images/woman-takes-prescription-medication-royalty-free-image-1718736576.jpg?crop=1.00xw:0.752xh;0,0.202xh&resize=1200:*",
            "publishedAt": "2024-06-19T12:44:37Z",
            "content": "\u003Cul\u003E\u003Cli\u003EA heat wave is expected in many parts of the U.S. this week.\u003C/li\u003E\u003Cli\u003ECertain medications raise your risk of heat illnesses like heat stroke and exhaustion. \u003C/li\u003E\u003Cli\u003EDoctors recommend caution … [+5750 chars]"
        },
        
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "David Schoenfield",
            "title": "Willie Mays was even better than his all-time great stats - ESPN",
            "description": "Mays was truly a player before his time, and the numbers we value in today's game would only have enhanced his all-time place.",
            "url": "https://www.espn.com/mlb/story/_/id/40382708/mlb-willie-mays-new-york-san-francisco-giants-all-great-career-stats",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0619%2Fr1347641_1296x729_16%2D9.jpg",
            "publishedAt": "2024-06-19T12:30:00Z",
            "content": "Maybe the greatest baseball player of all time is Babe Ruth. Perhaps it's Henry Aaron or Barry Bonds or Josh Gibson or Oscar Charleston. Proponents of a more antiquated version of the sport might arg… [+10216 chars]"
        }
  ]
  constructor()
  {
    super();
    this.state = {
      articles: this.articles,
      loading :false
    }
  }
  render() {
    return (
        <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        
        <div className='row'>
        {this.state.articles.map((element) => {
          return <div className="col-md-3" key={element.url}>
            <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl = {element.urlToImage} newsUrl = {element.url} />
                </div>
        })}
                
                
            

            </div>
      </div>
    )
  }
}

export default News
