import React, {Component} from 'react';
import {Card, CardImg,CardBody,CardImgOverlay, CardText, CardTitle} from 'reactstrap';

class DishDetail extends Component {
    constructor (props) {
        super(props);
    }

    renderDish(dish) {
        return(
            <Card>
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );  
    }

    renderComments(comments) {
        const commentlist = comments.map((comments) => {
            let date = new Intl.DateTimeFormat('en-US', {
                year:'numeric',
                month: 'short',
                day: '2-digit'
            }).format(new Date(Date.parse(comments.date)))
    
            return (
                <ul key={comments.id} className = "list-unstyled">
                    <li>{comments.comment}</li>
                    <li>--{comments.author}, {date}</li>
                </ul>
            )
            
        
        })

        if(comments != null)
        {
            return (
                <div>
                    <h4>Comments</h4>
                    {commentlist}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
            
    }

    render () {
        if (this.props.dish != null)
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>

                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>  
            );
        else 
            return (
                <div></div>
            )
    }
}

export default DishDetail;