import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YANDEX_MAPS_API_KEY = '4a2e57c0-ed39-44b4-8f4a-de888136524b';

export default function DeliveryMap() {
  const mapState = { center: [55.751574, 37.573856], zoom: 10 };

  return (
    <div className="map-container">
      <YMaps query={{ apikey: YANDEX_MAPS_API_KEY }}>
        <Map defaultState={mapState} width="100%" height="200px">
          <Placemark geometry={[55.751574, 37.573856]} />
        </Map>
      </YMaps>
    </div>
  );
}