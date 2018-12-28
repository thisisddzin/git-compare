import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './style';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    this.setState({ loading: false, repositories: await this.getLocalRepositories() });
  }

  handleInputRepo = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const { repositories, repositoryInput } = this.state;

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });

      const localRepositories = await this.getLocalRepositories();

      await localStorage.setItem('@GitHub:compare', JSON.stringify([...localRepositories, repository]));
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleUpdateRepo = async (id) => {

    try {
      const { repositories } = this.state;

      const repoSearch = await repositories.filter(repo => repo.id === id);
      const { full_name } = repoSearch[0];

      const { data } = await api.get(`/repos/${full_name}`);

      data.lastCommit = moment(data.updated_at).fromNow()

      this.setState({
        repositories: repositories.map(repo => (repo.id === data.id ? data : repo)),
      });

      await localStorage.setItem('@GitHub:compare', JSON.stringify(repositories))
    } catch(err) {
      this.setState({ repositoryError: true })
    }
  }

  handleDeleteRepo = (id) => {
    const { repositories } = this.state;

    const updatedRepos = repositories.filter(repository => repository.id !== id);

    this.setState({ repositories: updatedRepos });

    localStorage.setItem('@GitHub:compare', JSON.stringify(updatedRepos));
  }

  getLocalRepositories = async () => JSON.parse(await localStorage.getItem('@GitHub:compare')) || [];

  render() {
    const {
      repositories, repositoryInput, repositoryError, loading,
    } = this.state;

    return (
      <Container>
        <img src={logo} alt="Logo" />

        <Form repositoryError={repositoryError} onSubmit={this.handleInputRepo}>
          <input
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
            type="text"
            placeholder="usuário/repositório"
          />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>

      <CompareList
        removeRepo={this.handleDeleteRepo}
        updateRepo={this.handleUpdateRepo}
        repositories={repositories}
      />
      </Container>
    );
  }
}
