var Repo = React.createClass({
  render: function() {
    return (
      <li className="repo">
        <div className="repo-name">{this.props.orgName}/{this.props.data.name}</div>
        <div className="repo-activation-toggle repo-activation-toggle--private">
          <span className="repo-private-label">Private - $12</span>
          <button
            className="repo-toggle"
            onClick={
              () => this.props.onRepoClicked(this.props.data.id)
            }
          >
          </button>
        </div>
      </li>
    );
  }
});
