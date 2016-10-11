class Repo extends React.Component {
  render = () => {
    disabledState = (this.props.isProcessingId === this.props.data.id) ? "disabled" : null;
    return (
      <li className="repo">
        <div className="repo-name">{this.props.data.full_github_name}</div>
        <div className="repo-activation-toggle repo-activation-toggle--private">
          <span className="repo-private-label">Private - $12</span>
          <button
            className="repo-toggle"
            onClick={
              () => this.props.onRepoClicked(this.props.data.id)
            }
            disabled={disabledState}
          >
          </button>
        </div>
      </li>
    );
  }
}
