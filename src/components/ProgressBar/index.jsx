

const ProgressBar = (props) => {
  return (
    <div className="ProgressBar">
      <div style={{width: `${props.progress}%`, backgroundColor: props.color}} className="ProgressBar__progress">
      </div>
    </div>
  );
}

export default ProgressBar;