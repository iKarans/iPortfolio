import React from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Title } from '../../components/Title/Title';
import "./Contact.scss";
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

let DefaultIcon = L.icon({
        className: "contact__map__marker",
        iconUrl: icon,
        shadowUrl: iconShadow
    });
interface ContactProps {

}

export const Contact: React.FC<ContactProps> = ({}) => {
        return (
                <div className="contact">
                        <Title title="Contact" className="contact__title" />
                        <ContactForm />
                        <MapContainer center={[51.511074, -0.377232]} zoom={13} scrollWheelZoom={false} className="contact__map">
                                <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[51.511074, -0.377232]} icon={DefaultIcon}>
                                        <Popup className="contact__map__markup__popup">
                                                Aren't you nosy?
                                        </Popup>
                                </Marker>
                        </MapContainer>
                </div>
        );
}