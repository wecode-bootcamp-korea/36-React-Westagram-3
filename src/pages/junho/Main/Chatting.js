import OneChat from './OneChat';

const Chatting = props => {
  return props.chatArr.map((x, i) => <OneChat chatArr={x} key={i} />);
};

export default Chatting;
