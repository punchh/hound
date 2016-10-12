class Repo extends React.Component {
  render = () => {
    const { isProcessingId, data, onRepoClicked } = this.props;

    const disabledState = (isProcessingId === data.id) ? "disabled" : null;
    const price = data.price_in_dollars;

    return (
      <li className="repo">
        <div className="repo-name">{data.full_github_name}</div>
        <div className="repo-activation-toggle repo-activation-toggle--private">
          {
            price > 0
            ? <span className="repo-private-label">{`Private - $${price}`}</span>
            : null
          }
          <button
            className="repo-toggle"
            onClick={() => onRepoClicked(data.id)}
            disabled={disabledState}
          >
          </button>
        </div>
      </li>
    );
  }
}
