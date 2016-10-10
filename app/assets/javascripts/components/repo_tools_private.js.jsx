var RepoToolsPrivate = React.createClass({
  render: function() {
    return (
      <div className="repo-tools-private">
        <form className="button_to" method="post" action="/auth/github?access=full">
          <button className="repo-tools-private-button" type="submit">
            <span>Include private repos</span>
          </button>
        </form>
      </div>
    );
  }
});
