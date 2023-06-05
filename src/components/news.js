import React from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

export default class PersonList extends React.Component {
  state = {
    newsData: [],
    expanded: {},
    isLoading: true
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://newsapi.org/v2/everything', {
  params: {
    domains: 'wsj.com',
    apiKey: '1c544201b7f8412f8d9c9f23aafa2ff1',
    pageSize: 9 // Corrected parameter
  }
});

      const newsData = res.data.articles;
      this.setState({ newsData, isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  }

  handleExpand = (index) => {
    this.setState(prevState => ({
      expanded: {
        ...prevState.expanded,
        [index]: !prevState.expanded[index]
      }
    }))
  }

  render() {
    const { newsData, expanded, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <BeatLoader color="#007bff" loading={isLoading} size={20} />
        </div>
      );
    }

    const groupsOfThree = [];
    let i = 0;
    while (i < newsData.length) {
      groupsOfThree.push(newsData.slice(i, i + 3));
      i += 3;
    }

    return (
      <div className="container mainn">
        <h2 id='prodhead'>Latest News About Pets</h2>
        {groupsOfThree.map((newsGroup, index) => (
          <div className="row" key={index}>
            {newsGroup.map((news, index) => (
              <div className="col-md-4" key={index}>
                <div className="card carddd">
                  <img className="card-img-top" src={news.urlToImage} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p id='sorce'>Source-{news.source.name}</p>
                    {expanded[index] ?
                      <p className="card-text">{news.content}</p> :
                      <p className="card-text">{news.content.slice(0, 200)}... <a onClick={() => this.handleExpand(index)}><span id='readmore'>Read More</span></a></p>
                    }
                    <a href={news.url} className="btn btn-primary">Full Article</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}
