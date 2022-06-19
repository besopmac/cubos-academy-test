import { useParams } from 'react-router-dom';

export function Demo() {
  const params = useParams();

  return (
    <main style={{ padding: '20px' }}>
      <h1>API Demo {params.id}</h1>
      <div style={{ margin: '2rem 0', display: 'flex', gap: '10px' }}>
        <input type="text" />
        <button>Buscar</button>
      </div>

      {/* {data?.results.map((movie: Movie) => (
        <div style={{ marginBottom: '10px' }}>
          <h3>{movie.title}</h3>
        </div>
      ))} */}
    </main>
  );
}
