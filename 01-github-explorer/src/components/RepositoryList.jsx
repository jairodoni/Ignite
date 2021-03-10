import { RepositioryItem } from "./RepositoryItem"

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        <RepositioryItem repository={repository}/>
        <RepositioryItem repository={repository}/>
        <RepositioryItem repository={repository}/>
      </ul>
    </section>
  )
}