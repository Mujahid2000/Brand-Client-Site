import { Map, Marker } from "pigeon-maps";
import { useState } from 'react';

export const Mapset = () => {
    const [hue, setHue] = useState(0);
    const color = `hsl(${hue % 360}deg 39% 70%)`;

    return (
        <Map height={300} defaultCenter={[40.699256, -73.993796]} defaultZoom={11}>
            <Marker
                width={50}
                anchor={[40.699256, -73.993796]}
                color={color}
                onClick={() => setHue(hue + 20)}
            />
        </Map>
    );
};

export default Mapset;
