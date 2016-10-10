var RepoTools = React.createClass({
  render: function() {
    return (
      <div className="repo-tools">
        <RepoToolsSearch onSearchInput={this.props.onSearchInput} />
        {
          this.props.showPrivateButton
          ? <RepoToolsPrivate />
          : null
        }
        <RepoToolsRefresh
          isSyncing={this.props.isSyncing}
          onRefreshClicked={this.props.onRefreshClicked}
        />
      </div>
    );
  }
});
