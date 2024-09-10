import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Post(props) {

    const renderLikes = () => {
        if (props.likes === 0) return "Give us a like";
        else return "Likes" + props.likes;
    };
     
    const handleLikes = () => {
        console.log("Button clicked...");
    };
 
    return (
        <Col>
        <Card style={{ width: "18rem" }}>
            <Card.Body className="mb-3">
            <Card.Title>{props.author}</Card.Title>
            <Card.Text>{props.content}</Card.Text>
            <Card.Text>{renderLikes()}</Card.Text>
            <Button variant="primary" onClick={handleLikes}>
                Like
            </Button>
            </Card.Body>
        </Card>
        </Col>
    );
}

export default Post;