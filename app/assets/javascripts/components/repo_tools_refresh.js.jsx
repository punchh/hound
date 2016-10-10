var RepoToolsRefresh = React.createClass({
  render: function() {
    return (
      <div className="repo-tools-refresh">
        {
          this.props.isSyncing
          ?
            <button className="repo-tools-refresh-button" disabled="disabled">
              <span>Loading...</span>
            </button>
          :
            <button className="repo-tools-refresh-button" onClick={this.props.onRefreshClicked}>
              <span>Refresh repo list</span>
            </button>
          }
      </div>
    );
  }
});
