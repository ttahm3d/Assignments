/* eslint-disable react/prop-types */
export default function Card({ name, designation, interests, links }) {
  return (
    <div className="card">
      <div className="card-name-section">
        <h1>{name}</h1>
        <p>{designation}</p>
      </div>
      <div className="card-interests-section">
        <h2>Interests</h2>
        {interests.map((i) => (
          <div key={i}>{i}</div>
        ))}
      </div>
      <div className="card-links-section">
        {links.map((l) => (
          <a className="card-link" href={l.url} key={l.text}>
            {l.text}
          </a>
        ))}
      </div>
    </div>
  );
}
