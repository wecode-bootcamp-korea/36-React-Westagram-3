import OneChat from './OneChat';

const Chatting = ({ chatArr }) => {
  return chatArr.map((x, i) => <OneChat chatArr={x} key={i} />);
};

export default Chatting;
