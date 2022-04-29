import React from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Title } from '../../components/Title/Title';
import "./Contact.scss";
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

interface ContactProps {

}

export const Contact: React.FC<ContactProps> = ({}) => {
        return (
                <div className="contact">
                        <Title title="Contact" className="contact__title" />
                        <ContactForm />
                        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="contact__map">
                                <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[51.505, -0.09]}>
                                <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                                </Marker>
                        </MapContainer>
                </div>
        );
}