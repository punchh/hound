class Organization extends React.Component {
  filterBySearchTerm = (repo) => {
    if ( this.props.filterTerm === null) {
      return true;
    } else {
      return (repo.name.indexOf(this.props.filterTerm) !== -1);
    }
  }

  render = () => {
    const { data, onRepoClicked, isProcessingId, repos } = this.props;

    return (
      <div className="organization">
        <header className="organization-header">
          <h2 className="organization-header-title">{data.name}</h2>
        </header>
        <section className="repo_listing">
          <ul className="repos">
            {repos && repos.filter(this.filterBySearchTerm).map( (repo) => (
              <Repo
                data={repo}
                key={repo.id}
                onRepoClicked={onRepoClicked}
                isProcessingId={isProcessingId}
              />
            )) || null}
          </ul>
        </section>
      </div>
    );
  }
}
