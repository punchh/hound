class RepoToolsRefresh extends React.Component {
  render = () => {
    const { isSyncing, onRefreshClicked } = this.props;
    const buttonText = isSyncing ? "Loading..." : "Refresh repo list";

    return (
      <div className="repo-tools-refresh">
        <button
          className="repo-tools-refresh-button"
          disabled={isSyncing ? "disabled" : null}
          onClick={onRefreshClicked}
        >
          <span>{buttonText}</span>
        </button>
      </div>
    );
  }
}
