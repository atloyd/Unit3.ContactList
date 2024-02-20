/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useEffect } from 'react';

export default function SelectedContact({
	selectedContactId,
	setSelectedContactId,
}) {
	const [contact, setContact] = useState(null);
	useEffect(() => {
		async function fetchSelectedContact() {
			try {
				const response = await fetch(
					`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
				);
				const result = await response.json();
				setContact(result);
			} catch (error) {
				console.error(error);
			}
		}
		fetchSelectedContact();
	}, []);
	return (
        <div>
            {contact ? (
            <div>
                <h2>Selected Contact</h2>
                <p>Name: {contact.name}</p>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <button onClick={() => setSelectedContactId(null)}>Go Back</button>
            </div>
            ) : (
            <p>No contact selected</p>
            )}
        </div>
        );
}
