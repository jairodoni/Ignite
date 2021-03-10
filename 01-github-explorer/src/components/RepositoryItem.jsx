export function RepositioryItem(props) {
  return (
    <li>
    {/* usando o interrogação dessa forma
     caso o repositorio seja null ele nem 
     procura o nome e deixa Default
    <strong>{props.repository?.name ?? 'Default'}</strong> */}
    <strong>{props.repository.name ?? 'Default'}</strong>
    <p>{props.repository.description}</p>
    <a href={props.repository.link}>
      Acessar repositório
    </a>
  </li>
  )
}