import { useState } from 'react';

export default function App() {
  const [brandName, setBrandName] = useState('');
  const [style, setStyle] = useState('minimal');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f3f4f6', padding: '2rem' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 0 10px #ccc' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>Logo & Vision Cooker</h1>
        <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Marka Adı:</label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Örn: Maskülenist"
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              required
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Stil:</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            >
              <option value="minimal">Minimal</option>
              <option value="güçlü">Güçlü</option>
              <option value="klasik">Klasik</option>
              <option value="lüks">Lüks</option>
            </select>
          </div>
          <button
            type="submit"
            style={{ width: '100%', background: '#000', color: 'white', padding: '0.75rem', borderRadius: '0.5rem' }}
          >
            Logoyu Üret
          </button>
        </form>

        {submitted && (
          <div style={{ marginTop: '2rem', padding: '1rem', background: '#f9fafb', borderRadius: '0.5rem' }}>
            <p><strong>Marka:</strong> {brandName}</p>
            <p><strong>Stil:</strong> {style}</p>
            <p style={{ color: '#888' }}>(AI üretimi burada gösterilecek)</p>
          </div>
        )}
      </div>
    </main>
  );
}
