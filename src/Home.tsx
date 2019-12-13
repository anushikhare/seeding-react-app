import React, { useState, useEffect } from 'react';
import { stylesheet } from 'typestyle';
import axios from 'axios';
const config = require('./resources/config.json');

const styles = stylesheet({
    container: {
        padding: '20px'
    }
})

export function Home() {
    const [apiMessage, setApiMessage] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            config.api.invokeURL
          );
          setApiMessage(result.data.message);
        };
        fetchData();
      }, []);
    return (
        <div className={styles.container}>
            {apiMessage}
        </div>
    );
}
