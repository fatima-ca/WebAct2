'use client';
import { useState, useEffect } from "react";

export default function Fetchuser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?inc=name,email,dob,location,login")

      .then(response => {
        if (!response.ok) throw new Error("Error :c");
        return response.json();
      })
      .then(data => {
        const userData = data.results[0];

        const datashape = {
          name: `${userData.name.title} ${userData.name.first} ${userData.name.last}`,
          email: userData.email,
          birthday: new Date(userData.dob.date).toLocaleDateString(),
          address: `${userData.location.street.number} ${userData.location.street.name}, ${userData.location.city}, ${userData.location.state}, ${userData.location.country}, ${userData.location.postcode}`,
          password: userData.login.password
        };

        setUser(datashape);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return { user, loading, error };
}
