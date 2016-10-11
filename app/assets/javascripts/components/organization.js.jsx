class Organization extends React.Component {
  filterBySearchTerm = (repo) => {
    if ( this.props.filterTerm === null) {
      return true;
    } else {
      return (repo.name.indexOf(this.props.filterTerm) !== -1);
    }
  }

  render = () => {
    return (
      <div className="organization">
        <header className="organization-header">
          <h2 className="organization-header-title">{this.props.data.name}</h2>
        </header>
        <section className="repo_listing">
          <ul className="repos">
            {this.props.repos && this.props.repos.filter(this.filterBySearchTerm).map( (repo) => (
              <Repo
                data={repo}
                key={repo.id}
                onRepoClicked={this.props.onRepoClicked}
                isProcessingId={this.props.isProcessingId}
              />
            )) || null}
          </ul>
        </section>
      </div>
    );
  }
}
