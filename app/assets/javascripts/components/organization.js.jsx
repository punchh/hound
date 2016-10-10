var Organization = React.createClass({
  getInitialState: function() {
    return {
      repos: [
        {id:1, name: "aspire"}
      ]
    };
  },

  filterBySearchTerm: function(repo) {
    if ( this.props.filterTerm === null) {
      return true;
    } else {
      return (repo.name.indexOf(this.props.filterTerm) !== -1);
    }
  },

  render: function() {
    return (
      <div className="organization">
        <header className="organization-header">
          <h2 className="organization-header-title">{this.props.data.name}</h2>
        </header>
        <section className="repo_listing">
          <ul className="repos">
            {this.state.repos.filter(this.filterBySearchTerm).map( (repo) => (
              <Repo
                orgName={this.props.data.name}
                data={repo}
                key={repo.id}
                onRepoClicked={this.props.onRepoClicked}
              />
            ))}
          </ul>
        </section>
      </div>
    );
  }
});
