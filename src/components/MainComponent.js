import React, {Component} from 'react';
import Menu from './MenuComponents';
import DishDetail from './DishDetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import {Route, Switch , Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())}
});


class MainComponent extends Component {
  constructor (props) {
    super(props);
}

componentDidMount() {
  this.props.fetchDishes();
}

  render() {

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}  
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment = {this.props.addComment}
            />
      );
    };

    const HomePage = () => {
      return (
        <Home
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    const AboutUs = () => {
      return (
        <About
        leaders={this.props.leaders}
        />
      );
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path = "/home" component = {HomePage} /> 
          <Route exact path="/menu" component = {() => <Menu dishes={this.props.dishes}/>} />
          <Route path='/menu/:dishId' component={DishWithId}/>
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Redirect to = '/home'/>
        </Switch> 
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));
