import { useMemo, useState } from 'react';
import Parks from './components/Parks/Parks';
import Select, { OptionValue } from './components/base/Select/Select';
import { parks } from './data/dataset1.json'
import './App.scss'

function App() {
  const [featuredCard, setFeaturedCard] = useState('');
  const parksWithImage = useMemo(() => parks.filter((item) => !!item.image), [])

  const options: OptionValue[] = useMemo(() =>
    parksWithImage.map((item, index) => ({ label: item.title || 'National Park', value: index.toString() })),
    [parksWithImage]
  );

  const handleSelectChange = (newValue: string) => {
    setFeaturedCard(newValue);
  };

  return (
    <main>
      <Select
        id='featured-card'
        label='Featured Card'
        options={options}
        onSelect={handleSelectChange}
        value={featuredCard}
        placeholder='Select Featured Card'
      />
      <Parks featuredCard={featuredCard} />
    </main>
  )
}

export default App
