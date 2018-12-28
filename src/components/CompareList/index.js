import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './style';

const CompareList = ({ repositories, removeRepo, updateRepo }) => (
  <Fragment>
    <Container>
      {repositories.map(repository => (
        <Repository key={repository.id}>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <strong>{repository.name}</strong>
            {' '}
            <small>{repository.owner.login}</small>
          </header>
          <ul>
            <li>
              {repository.stargazers_count}
              {' '}
              <small>stars</small>
            </li>
            <li>
              {repository.forks_count}
              {' '}
              <small>forks</small>
            </li>
            <li>
              {repository.open_issues_count}
              {' '}
              <small>issues</small>
            </li>
            <li>
              {repository.watchers}
              {' '}
              <small>Watch</small>
            </li>
            <li>
              {repository.lastCommit}
              {' '}
              <small>last commit</small>
            </li>
          </ul>
          <a target="_blank" href={repository.html_url} className="visit">
            <i className="fa fa-eye"/>
            Visitar
          </a>
          <button className="refresh" onClick={() => updateRepo(repository.id)}>
            <i className="fa fa-retweet"/>
            Atualizar
          </button>
          <button className="remove" onClick={() => removeRepo(repository.id)}>
            <i className="fa fa-trash"/>
            Deletar
          </button>
        </Repository>
      ))}
    </Container>
  </Fragment>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    onwer: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers: PropTypes.number,
    open_issues_count: PropTypes.number,
    updated_at: PropTypes.string,

  })).isRequired,
};

export default CompareList;
