import moment from "moment";

class NewsItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set news(news) {
    this._news = news;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>

                * {
                    text-transform: capitalize;
                    text-decoration: none;
                    outline: none;
                }

                :host {
                    display: block;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(25, 25, 25, 0.1);
                    overflow: hidden;
                }

                :host(:hover) {  cursor: pointer;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
                    transform: translateY(-5px);
                }



                img {
                    width: 100%;
                    height: 200px;
                    object-position: center;
                    object-fit: cover;
                }

                .content {
                    padding: 10px;
                    color: black;
                }

                p{
                    font-weight: bolder;
                }

                .info {
                    display: flex;
                    margin-top: 10px;
                    justify-content: space-between;
                    font-size: 0.8rem;
                    font-weight: 300;
                }


            </style>
            
            <a href="${this._news.url}" target="_blank">
                <img src="${this._news.urlToImage}"/>
                <div class="content">
                    <p class="title">
                        ${this._news.title}
                    </p>
                    <div class="info">
                        <span>${moment.utc(this._news.publishedAt).fromNow()}</span>
                        <span>${this._news.source.name}</span>
                    </div>
                </div>
            </a>
     
        `;
  }
}

customElements.define("news-item", NewsItem);
