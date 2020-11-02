import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText, Media } from "reactstrap";

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = [

        ]
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                < div ></div >
            );
        }
    }

    renderComments(dish) {

        if (dish != null) {

            const cmnt = dish.comments.map(comment => {
                return (

                    <li key={comment.id}>
                        {comment.comment}
                        <br /><br />
                        --{comment.author},
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                        <br /><br />
                    </li>
                )
            })
            return (
                <Card>
                    <h3>comments</h3>
                    <CardBody>

                        {cmnt}
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                < div ></div >
            );
        }
    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}
export default DishDetail;