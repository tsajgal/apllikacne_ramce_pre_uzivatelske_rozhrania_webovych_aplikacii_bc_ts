import React from 'react';
import './Blog.css';
import {db} from "../../firebase";
import newId from "../utils/newid";

const INITIAL_STATE = {
    id: '',
    users: null,
    username: '',
    article_text: '',
    error: null,

};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});


class Blog extends React.Component{
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.setState({id: newId()});
        db.onceGetArticle().then(snapshot =>
            this.setState(() => ({ users: snapshot.val() }))
        );
    }

    onSubmit = (event) => {
        const {
            id,
            username,
            article_text,
        } = this.state;

        // Create a user in your own accessible Firebase Database too
        db.doCreateArticle(id, username, article_text)
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }


    render(){
        const { users } = this.state;

        const {
            error,
        } = this.state;

        return(
            <div className="main container">
                <h1>Blog</h1>
                {!!users && <ArticleList users={users} />}
                {error && <p>{error.message}</p>}
                <div>
                    <div className={'col-md-4 col-lg-4'}></div>
                    <div className={'blog_form col-xs-12 col-sm-12 col-md-4 col-lg-4 sing_in'}>
                        <form method="post" onSubmit={this.onSubmit}>
                            <input id="username" type="text" name="username" placeholder="Celé meno" value={this.state.username} onocus="" onChange={this.handleInputChange} /><br/>
                            <input id="article_text" type="text" name="article_text" placeholder="Vložte text" value={this.state.article_text} onocus="" onChange={this.handleInputChange} /><br/>

                            <input  type="submit" value="Odoslat" />
                        </form>
                    </div>
                    <div className={'col-md-4 col-lg-4'}></div>
                </div>
            </div>
        );
    }
}

const ArticleList = ({ users }) =>
    <div>
        {Object.keys(users).map(key =>
            <div className="clanok">

                <h2 key={key}>{users[key].username}</h2>
                <div className={'clanokFoto'}>

                </div>
                <p key={key}>{users[key].article_text}</p>

            </div>
        )}
    </div>

export default Blog;