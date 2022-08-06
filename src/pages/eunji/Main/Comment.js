import React from 'react';

// class Comment extends Component {
//     render() {
//         return(
//             <ul className="commentlist" value="feedComments">
//                 {this.props.commentContent}
//             </ul>
//         )
//     }
// }

const Comment = props => {
  return (
    <ul className="commentlist" value="feedComments">
      {props.commentContent}
    </ul>
  );
};

export default Comment;
