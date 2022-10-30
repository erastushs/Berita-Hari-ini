import "./news-item.js";

class NewsList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set articles(articles) {
    this._articles = articles;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    :host {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    @media screen and (max-width: 968px) {
      :host {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media screen and (max-width: 668px) {
      :host{
        grid-template-columns: repeat(1, 1fr);
      }
    }
    </style>
    `;

    this._articles.forEach((article) => {
      const newsItemElement = document.createElement("news-item");
      newsItemElement.news = article;
      this.shadowDOM.appendChild(newsItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
            <style>
                .placeholder {
                    font-weight: 300;
                    color: #363636;
                    user-select: none;
                }
            </>
        `;

    this.shadowDOM.innerHTML += `<p class="placeholder">${message}</p>`;
  }
}

customElements.define("news-list", NewsList);
