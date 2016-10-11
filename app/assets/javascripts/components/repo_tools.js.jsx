class RepoTools extends React.Component {
  render = () => {
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
}
