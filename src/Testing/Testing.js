import React, { Component } from 'react';
import styles from './Testing.style.js'; 


class Testing extends Component
{
 render() {
 
        return (
            <div>
            
                  <div>
        <h2 className={styles.title}>
          Email Signup
        </h2>
        <input
          className={styles.email}
          placeholder="Email Please"
          />
        <br/>
        <button
          className={styles.submitButton}
          >
          Submit
        </button>
      </div>

            </div>
        );
    }
}
export default Testing;
    