import React, { useState, useEffect } from 'react';
import axios from 'axios';
const config = require('./resources/config.json')

export function Home() {
    const [apiMessage, setApiMessage] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            config.api.invokeURL
          );
          setApiMessage(result.data);
        };
        fetchData();
      }, []);
    return (
        <div>
            test Home
            {apiMessage}
        </div>
    );
}
