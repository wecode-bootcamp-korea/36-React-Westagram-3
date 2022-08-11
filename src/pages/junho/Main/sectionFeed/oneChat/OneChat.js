import './oneChat.scss';
const OneChat = ({ chatArr, id, del }) => (
  <div className="create" id={id}>
    <p className="createP">juno :{chatArr}</p>
    <button className="createBtn" onClick={del}>
      삭제
    </button>
  </div>
);

export default OneChat;
