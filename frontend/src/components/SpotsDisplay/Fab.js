import './fab.css';

const Fab = props => {
    return (
      <div className={props.hidden ? 'fab is-hidden' : 'fab'} onClick={props.onClick}>
        <button aria-label="add" role="img" className="fab-symbol">Create New Room</button>
      </div>
    );
};

export default Fab;
