import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

export default class News extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const content = document.getElementById('data');
    content.innerHTML = this.message('Loading...');

    const url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=4ddad75f151740bcbc45fc0243f1a0e2';
    fetch(url)
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        content.innerHTML = this.renderArticles(resJson.articles);
      })
      .catch(err => {
        content.innerHTML = this.message(err.message);
      });
  }

  renderArticles(articles) {
    let content = "";
    articles.forEach(article => {
      content += `
        <div class="card col-3 m-1" style="width: 18rem;">
          <img src="${article.urlToImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-subtitle mb-2 text-body-secondary">${article.publishedAt}</p>
            <a href=${article.url} class="btn btn-primary">Read More</a>
          </div>
        </div>
      `;
    });
    return content;
  }

  message(msg) {
    return `<tr>
              <td class="text-center" colspan="8">${msg}</td>
          </tr>`;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const content = document.getElementById('data');
    content.innerHTML = this.message('Loading...');

    const searchQuery = document.getElementById('search').value;
    const newUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=4ddad75f151740bcbc45fc0243f1a0e2`;
    fetch(newUrl)
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        content.innerHTML = this.renderArticles(resJson.articles);
      })
      .catch(err => {
        content.innerHTML = this.message(err.message);
      });
  };

  render() {
    return (
      <div>
        <Container>
          <form id="myForm" onSubmit={this.handleSubmit}>
            <input type="text" id="search" />
            <button type="submit">Search</button>
          </form>
          <div id="data"></div>
        </Container>
      </div>
    );
  }
}