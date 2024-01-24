import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const WorldMap = () => {
  return (
    <ComposableMap>
      <Geographies geography="/path/to/world-geographies.json">
        {({ geographies }: any) =>
          geographies.map((geo: any) => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
    </ComposableMap>
  );
};

export default WorldMap;