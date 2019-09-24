const Component = require('./Component.js');
const ArticleTitle = require('./ArticleTitle.js');
const ArticleContent = require('./ArticleContent.js');

class Article extends Component{
  constructor(props) {
    super(props);
    this.props.title = new ArticleTitle({
      title: this.props.title
    });
    this.props.content = new ArticleContent({
      content: this.props.content
    });
  }

  render(){
    return `<div>
      ${this.props.title.render()}
      <span>${this.props.author}</span>
      ${this.props.content.render()}
    </div>`;
  }
}

let newArticle = new Article({
  title: "Meet James",
  author: "Thomas Steve",
  content: "This is the content of this article"
})

console.log(newArticle.render())

// module.exports = Article;
